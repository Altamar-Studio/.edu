# EstudiandoAndo — Herramientas Internas de Contenido

Esta carpeta contiene scripts de uso **exclusivamente interno** (no llegan al usuario).

## `generate_content.py` — Generador de ejercicios vía IA

Pipeline de 3 pasos:
1. **Generación**: Llama a Gemini con el temario de una unidad y produce ejercicios variados en JSON.
2. **Validación**: Segunda llamada a Gemini para revisar gramática, traducciones y marcar dudosos.
3. **Guardado**: Escribe el resultado en `/contenido/{lang}_{level}_u{N}.json` con metadatos de versión.

### Requisitos
```bash
pip install google-genai
```

### Uso
```bash
# Obtén tu API Key gratuita en: https://aistudio.google.com/apikey
export GEMINI_API_KEY="tu_api_key_aqui"

# Generar Unidad 1 de Inglés A1 (piloto)
python3 tools/generate_content.py --lang en --level a1 --unit 1

# Generar otras unidades/idiomas (una vez que se defina el curriculum)
python3 tools/generate_content.py --lang fr --level a1 --unit 1
python3 tools/generate_content.py --lang pt --level a1 --unit 1
python3 tools/generate_content.py --lang ja --level a1 --unit 1
```

### Salida
El script escribe en `/contenido/` con la convención de nombre: `{lang}_{level}_u{N}.json`

Ejemplo: `contenido/en_a1_u1.json`

### Ejercicios marcados como dudosos
Si la IA de validación detecta algún ejercicio cuestionable, lo marca con:
```json
{ "flagged": true, "flag_reason": "razón específica" }
```
Estos deben ser revisados manualmente antes de hacer deploy.

### Agregar nuevas unidades al curriculum
Edita el diccionario `CURRICULUM` dentro de `generate_content.py`.

---
> **Nota de arquitectura**: Este script está pensado para correr localmente o en un CI/CD job,
> nunca en el navegador del usuario. El JSON resultante se committea al repo y `leccion.js` lo lee
> vía `fetch()` estático.
