#!/usr/bin/env python3
"""
generate_content.py — Herramienta interna de generación de contenido para EstudiandoAndo/Idiomas.

PIPELINE:
  PASO 1: Leer el temario de una unidad desde CURRICULUM (en este script).
  PASO 2: Llamar a Gemini para GENERAR los ejercicios (4-6 tipos variados por lección).
  PASO 3: Llamar a Gemini para VALIDAR gramática/traducción y marcar dudosos.
  PASO 4: Guardar como JSON versionado en /contenido/.

USO:
  export GEMINI_API_KEY="tu_api_key"
  python3 tools/generate_content.py --lang en --level a1 --unit 1

TODO [BACKEND]: Cuando haya un backend, este script podría integrarse como
  un worker/job que se dispara al agregar nuevas unidades al CMS.
"""

import argparse
import json
import os
import re
import sys
import datetime

try:
    from google import genai
except ImportError:
    print("ERROR: Instala google-genai: pip install google-genai")
    sys.exit(1)

# ─────────────────────────────────────────────
# CURRICULUM: Temario que define QUÉS lecciones
# generar. El CÓMO lo decide la IA.
# ─────────────────────────────────────────────
from curriculum import CURRICULUM

# ─────────────────────────────────────────────
# PROMPT TEMPLATES
# ─────────────────────────────────────────────

GENERATION_PROMPT = """Eres un experto en enseñanza de idiomas para hispanohablantes.

Tu tarea es generar ejercicios de aprendizaje de idiomas en formato JSON estricto.

## Lección a generar:
- Idioma objetivo: {lang_name}
- Nivel CEFR: {level}
- Título de lección: {lesson_title}
- Vocabulario foco: {vocab_focus}
- Tema: {topic}
- Tipos de ejercicio requeridos: {exercise_types}

## Reglas de contenido:
- Los enunciados (prompt) SIEMPRE en español (es la lengua base del alumno).
- Las respuestas correctas en el idioma objetivo ({lang_name}).
- Los distractores deben ser del mismo campo semántico, plausibles pero claramente incorrectos.
- Para `translate`: incluir la frase a traducir del {lang_name} al español. El campo `answer` es la traducción al español, y `accepted_answers` incluye variantes válidas.
- Para `order_words`: las `options` son las palabras en desorden (del idioma {lang_name}), el `answer` es el array en orden correcto.
- Para `fill_in_blank`: la frase tiene `_____` donde va la palabra. Las `options` incluyen la respuesta correcta + 2 distractores.
- Para `match_pairs`: el `answer` es un array de objetos {{a: texto_en_idioma, b: traduccion_espanol}}.
- Generar EXACTAMENTE {num_exercises} ejercicios: al menos uno de cada tipo requerido, distribuidos de forma pedagógica.

## Schema JSON exacto a seguir:
{{
  "exercises": [
    {{
      "id": "ex_001",
      "type": "multiple_choice | fill_in_blank | order_words | translate | match_pairs",
      "vocab": {{
        "word": "palabra principal del ejercicio en {lang_name}",
        "translation": "traducción al español"
      }},
      "topic": "{topic}",
      "prompt": "Enunciado en español para el alumno",
      "answer": "string para multiple_choice/fill_in_blank/translate, array para order_words",
      "accepted_answers": ["solo para translate: variantes aceptables en español"],
      "distractors": ["solo para multiple_choice: 3 opciones incorrectas"],
      "options": ["solo para fill_in_blank y order_words: las palabras/opciones disponibles"],
      "pairs": [{{ "a": "en inglés", "b": "en español" }}],
      "image": {{
        "url": null,
        "generation_prompt": "descripción en inglés para generar una ilustración simple y limpia de esta palabra/frase"
      }},
      "notes": "comentario pedagógico interno, opcional"
    }}
  ]
}}

Responde SOLO con el JSON válido. Sin markdown, sin explicaciones extra.
"""

VALIDATION_PROMPT = """Eres un revisor experto en lingüística y enseñanza de idiomas para hispanohablantes.

Revisa los siguientes ejercicios de {lang_name} nivel {level} y:
1. Verifica que las respuestas correctas sean gramaticalmente correctas.
2. Verifica que los distractores sean del mismo campo semántico.
3. Verifica que las traducciones sean naturales (no literales de forma torpe).
4. Marca con `"flagged": true` y `"flag_reason": "razón"` cualquier ejercicio dudoso.
5. Corrige errores evidentes directamente en el JSON.
6. NO cambies el schema, solo añade/modifica campos `flagged` y `flag_reason`.

Ejercicios a revisar:
{exercises_json}

Responde SOLO con el JSON corregido y validado. Sin markdown, sin explicaciones extra.
"""

# ─────────────────────────────────────────────
# PIPELINE
# ─────────────────────────────────────────────

def clean_json_response(raw: str) -> str:
    """Limpia bloques markdown que la IA a veces añade aunque se le pida JSON puro."""
    raw = raw.strip()
    if raw.startswith("```"):
        raw = re.sub(r"^```(?:json)?\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
    return raw.strip()


def call_gemini(client, prompt: str, model: str = "models/gemini-2.5-flash") -> str:
    response = client.models.generate_content(
        model=model,
        contents=prompt,
        config={"temperature": 0.4}
    )
    return response.text


def generate_unit(client, lang: str, level: str, unit_num: int):
    unit_key = f"unit{unit_num}"
    unit_data = CURRICULUM[lang][level][unit_key]
    lang_name = {"en": "Inglés", "fr": "Francés", "pt": "Portugués", "ja": "Japonés"}[lang]

    all_lessons = []
    flagged_count = 0

    print(f"\n{'='*60}")
    print(f"  GENERANDO: {lang_name} A1 — {unit_data['title']}")
    print(f"{'='*60}")

    for lesson in unit_data["lessons"]:
        print(f"\n  ► Lección: {lesson['title']} ({lesson['id']})")

        # ── PASO 2: GENERACIÓN ──────────────────────
        num_ex = max(5, len(lesson["exercise_types_required"]) + 2)
        gen_prompt = GENERATION_PROMPT.format(
            lang_name=lang_name,
            level=level.upper(),
            lesson_title=lesson["title"],
            vocab_focus=", ".join(lesson["vocab_focus"]),
            topic=lesson["topic"],
            exercise_types=", ".join(lesson["exercise_types_required"]),
            num_exercises=num_ex
        )

        print(f"    [1/2] Generando {num_ex} ejercicios con Gemini...", end=" ", flush=True)
        raw_gen = call_gemini(client, gen_prompt)
        gen_data = json.loads(clean_json_response(raw_gen))
        print(f"✓ {len(gen_data['exercises'])} ejercicios generados")

        # ── PASO 3: VALIDACIÓN ──────────────────────
        val_prompt = VALIDATION_PROMPT.format(
            lang_name=lang_name,
            level=level.upper(),
            exercises_json=json.dumps(gen_data, ensure_ascii=False, indent=2)
        )

        print(f"    [2/2] Validando gramática y traducciones...", end=" ", flush=True)
        raw_val = call_gemini(client, val_prompt)
        val_data = json.loads(clean_json_response(raw_val))
        print("✓ Validación completa")

        # Contar ejercicios marcados
        for ex in val_data.get("exercises", []):
            if ex.get("flagged"):
                flagged_count += 1
                print(f"    ⚠️  Ejercicio dudoso [{ex['id']}]: {ex.get('flag_reason')}")

        lesson_result = {
            "id": lesson["id"],
            "title": lesson["title"],
            "topic": lesson["topic"],
            "xp_reward": 20,
            "exercises": val_data.get("exercises", [])
        }
        all_lessons.append(lesson_result)

    # ── PASO 4: GUARDAR JSON VERSIONADO ─────────
    output = {
        "_meta": {
            "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
            "model": "gemini-2.0-flash",
            "pipeline_version": "1.0.0",
            "lang": lang,
            "level": level,
            "unit": unit_num,
            "flagged_exercises": flagged_count,
            "schema_version": "1.0"
            # TODO [BACKEND]: agregar campo "reviewed_by" cuando haya flujo de revisión humana
        },
        "language": {
            "code": lang,
            "name": lang_name,
            "flag": {"en": "🇺🇸", "fr": "🇫🇷", "pt": "🇧🇷", "ja": "🇯🇵"}[lang]
        },
        "level": level.upper(),
        "unit": {
            "id": f"{lang}_{level}_u{unit_num}",
            "number": unit_num,
            "title": unit_data["title"],
            "description": unit_data["description"],
            "icon": unit_data["icon"]
        },
        "lessons": all_lessons
    }

    # Crear directorio contenido/ si no existe
    out_dir = os.path.join(os.path.dirname(__file__), "..", "contenido")
    os.makedirs(out_dir, exist_ok=True)

    filename = f"{lang}_{level}_u{unit_num}.json"
    filepath = os.path.join(out_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    total_exercises = sum(len(l["exercises"]) for l in all_lessons)
    print(f"\n{'='*60}")
    print(f"  ✅ COMPLETADO")
    print(f"     Archivo: contenido/{filename}")
    print(f"     Lecciones: {len(all_lessons)}")
    print(f"     Ejercicios totales: {total_exercises}")
    if flagged_count > 0:
        print(f"     ⚠️  Ejercicios dudosos: {flagged_count} (revisar manualmente)")
    print(f"{'='*60}\n")

    return filepath


def main():
    parser = argparse.ArgumentParser(
        description="EstudiandoAndo — Generador de contenido de idiomas vía Gemini"
    )
    parser.add_argument("--lang", required=True, choices=["en", "fr", "pt", "ja"],
                        help="Código de idioma (en, fr, pt, ja)")
    parser.add_argument("--level", required=True, choices=["a1", "a2", "b1"],
                        help="Nivel CEFR en minúsculas")
    parser.add_argument("--unit", required=True, type=int,
                        help="Número de unidad (ej. 1)")
    parser.add_argument("--api-key", default=None,
                        help="Gemini API Key (alternativa: variable de entorno GEMINI_API_KEY)")
    args = parser.parse_args()

    # Resolver API key
    api_key = args.api_key or os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("\nERROR: Necesitas una Gemini API Key.")
        print("  Opción 1: export GEMINI_API_KEY='tu_key'")
        print("  Opción 2: python3 tools/generate_content.py --api-key 'tu_key' ...\n")
        print("  Obtén tu key gratis en: https://aistudio.google.com/apikey\n")
        sys.exit(1)

    # Verificar que el curriculum existe
    unit_key = f"unit{args.unit}"
    if args.lang not in CURRICULUM or args.level not in CURRICULUM[args.lang] or unit_key not in CURRICULUM[args.lang][args.level]:
        print(f"\nERROR: No existe curriculum para {args.lang}/{args.level}/{unit_key}")
        print("  Unidades disponibles:", list(CURRICULUM.get(args.lang, {}).get(args.level, {}).keys()))
        sys.exit(1)

    # Inicializar cliente Gemini
    client = genai.Client(api_key=api_key)

    # Ejecutar pipeline
    generate_unit(client, args.lang, args.level, args.unit)


if __name__ == "__main__":
    main()
