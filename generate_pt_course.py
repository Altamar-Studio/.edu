import json
import random
import os

UNITS = [
    {"unit": 1, "title": "Saudações e Apresentações", "theme": "greetings"},
    {"unit": 2, "title": "Minha Família", "theme": "family"},
    {"unit": 3, "title": "Na Cidade", "theme": "city"},
    {"unit": 4, "title": "Rotina Diária (Checkpoint 1)", "theme": "routine"},
    {"unit": 5, "title": "Comida e Bebida", "theme": "food"},
    {"unit": 6, "title": "Roupas e Compras", "theme": "clothes"},
    {"unit": 7, "title": "Hobbies e Tempo Livre", "theme": "hobbies"},
    {"unit": 8, "title": "Planos Futuros (Checkpoint 2)", "theme": "future"}
]

VOCAB = {
    "greetings": [
        {"pt": "Bom dia", "es": "Hola / Buenos días", "img": "contenido/img/vocab_morning.png"},
        {"pt": "Oi", "es": "Hola (informal)", "img": "contenido/img/vocab_hello.png"},
        {"pt": "Como você está?", "es": "¿Cómo estás?", "img": "contenido/img/vocab_how_are_you.png"},
        {"pt": "Obrigado", "es": "Gracias", "img": "contenido/img/vocab_happy.png"},
        {"pt": "Tchau", "es": "Adiós", "img": None},
        {"pt": "Por favor", "es": "Por favor", "img": "contenido/img/vocab_business.png"},
        {"pt": "Meu nome é", "es": "Me llamo", "img": "contenido/img/vocab_student.png"},
        {"pt": "Prazer em conhecer", "es": "Encantado", "img": "contenido/img/vocab_friends.png"},
        {"pt": "Sim", "es": "Sí", "img": None},
        {"pt": "Não", "es": "No", "img": None}
    ],
    "family": [
        {"pt": "Mãe", "es": "Madre"}, {"pt": "Pai", "es": "Padre"},
        {"pt": "Irmão", "es": "Hermano"}, {"pt": "Irmã", "es": "Hermana"},
        {"pt": "Avó", "es": "Abuela"}, {"pt": "Avô", "es": "Abuelo"},
        {"pt": "Tia", "es": "Tía"}, {"pt": "Tio", "es": "Tío"},
        {"pt": "Primo", "es": "Primo"}, {"pt": "Família", "es": "Familia"}
    ],
    "city": [
        {"pt": "Banco", "es": "Banco"}, {"pt": "Hospital", "es": "Hospital"},
        {"pt": "Escola", "es": "Escuela"}, {"pt": "Restaurante", "es": "Restaurante"},
        {"pt": "Parque", "es": "Parque"}, {"pt": "Supermercado", "es": "Supermercado"},
        {"pt": "Rua", "es": "Calle"}, {"pt": "Museu", "es": "Museo"},
        {"pt": "Estação de trem", "es": "Estación de tren"}, {"pt": "Aeroporto", "es": "Aeropuerto", "img": "contenido/img/vocab_countries.png"}
    ],
    "routine": [
        {"pt": "Acordar", "es": "Despertar"}, {"pt": "Tomar café da manhã", "es": "Desayunar"},
        {"pt": "Ir para o trabalho", "es": "Ir a trabajar"}, {"pt": "Almoçar", "es": "Almorzar"},
        {"pt": "Ir para casa", "es": "Ir a casa"}, {"pt": "Jantar", "es": "Cenar"},
        {"pt": "Ir dormir", "es": "Ir a dormir"}, {"pt": "Tomar banho", "es": "Bañarse"},
        {"pt": "Ler um livro", "es": "Leer un libro"}, {"pt": "Assistir TV", "es": "Ver la tele"}
    ],
    "food": [
        {"pt": "Maçã", "es": "Manzana"}, {"pt": "Pão", "es": "Pan"},
        {"pt": "Água", "es": "Agua"}, {"pt": "Café", "es": "Café"},
        {"pt": "Leite", "es": "Leche"}, {"pt": "Queijo", "es": "Queso"},
        {"pt": "Frango", "es": "Pollo"}, {"pt": "Peixe", "es": "Pescado"},
        {"pt": "Arroz", "es": "Arroz"}, {"pt": "Salada", "es": "Ensalada"}
    ],
    "clothes": [
        {"pt": "Camisa", "es": "Camisa"}, {"pt": "Calça", "es": "Pantalones"},
        {"pt": "Sapatos", "es": "Zapatos"}, {"pt": "Vestido", "es": "Vestido"},
        {"pt": "Jaqueta", "es": "Chaqueta"}, {"pt": "Chapéu", "es": "Sombrero"},
        {"pt": "Meias", "es": "Calcetines"}, {"pt": "Saia", "es": "Falda"},
        {"pt": "Camiseta", "es": "Camiseta"}, {"pt": "Casaco", "es": "Abrigo"}
    ],
    "hobbies": [
        {"pt": "Jogar tênis", "es": "Jugar tenis"}, {"pt": "Nadar", "es": "Nadar"},
        {"pt": "Correr", "es": "Correr"}, {"pt": "Pintar", "es": "Pintar"},
        {"pt": "Ouvir música", "es": "Escuchar música"}, {"pt": "Dançar", "es": "Bailar"},
        {"pt": "Jogar videogame", "es": "Jugar videojuegos"}, {"pt": "Viajar", "es": "Viajar"},
        {"pt": "Cantar", "es": "Cantar"}, {"pt": "Cozinhar", "es": "Cocinar"}
    ],
    "future": [
        {"pt": "Viajar amanhã", "es": "Viajar mañana"}, {"pt": "Estudar na próxima semana", "es": "Estudiar la próxima semana"},
        {"pt": "Visitar amigos", "es": "Visitar amigos"}, {"pt": "Comprar um carro", "es": "Comprar un carro"},
        {"pt": "Aprender português", "es": "Aprender portugués"}, {"pt": "Mudar de casa", "es": "Mudarse"},
        {"pt": "Começar um novo trabalho", "es": "Empezar un nuevo trabajo"}, {"pt": "Sair de férias", "es": "Ir de vacaciones"},
        {"pt": "Ler mais", "es": "Leer más"}, {"pt": "Economizar dinheiro", "es": "Ahorrar dinero"}
    ]
}

GRAMMAR = {
    "greetings": [
        {"pt": "Eu digo {0}", "es": "Yo digo {0}"},
        {"pt": "Ele responde {0}", "es": "Él responde {0}"}
    ],
    "family": [
        {"pt": "Meu {0} é alto", "es": "Mi {0} es alto"},
        {"pt": "Sua {0} é gentil", "es": "Su {0} es amable"}
    ],
    "city": [
        {"pt": "Onde fica o {0}?", "es": "¿Dónde está el {0}?"},
        {"pt": "Tem um {0} aqui", "es": "Hay un {0} aquí"}
    ],
    "routine": [
        {"pt": "Eu quero {0}", "es": "Yo quiero {0}"},
        {"pt": "Ela gosta de {0}", "es": "A ella le gusta {0}"}
    ],
    "food": [
        {"pt": "Eu quero {0}", "es": "Quiero {0}"},
        {"pt": "Você gosta de {0}?", "es": "¿Te gusta el {0}?"}
    ],
    "clothes": [
        {"pt": "Quanto custa este {0}?", "es": "¿Cuánto cuesta este {0}?"},
        {"pt": "Eu gosto destes {0}", "es": "Me gustan esos {0}"}
    ],
    "hobbies": [
        {"pt": "Eu adoro {0}", "es": "Me encanta {0}"},
        {"pt": "Você pode {0}?", "es": "¿Puedes {0}?"}
    ],
    "future": [
        {"pt": "Eu vou {0}", "es": "Voy a {0}"},
        {"pt": "Ela vai {0}", "es": "Ella va a {0}"}
    ]
}

def generate_distractors(correct_pt, vocab_list):
    pool = [v["pt"] for v in vocab_list if v["pt"] != correct_pt]
    random.shuffle(pool)
    return pool[:3]

def build_lesson(lesson_id, theme, diff_level):
    exercises = []
    vocab_list = VOCAB[theme]
    
    # 3 multiple_choice
    for _ in range(3):
        v = random.choice(vocab_list)
        ex = {
            "type": "multiple_choice",
            "prompt": f"Escolha a tradução correta : '{v['es']}'",
            "answer": v["pt"],
            "distractors": generate_distractors(v["pt"], vocab_list),
            "target_vocab": v["pt"].lower(),
            "difficulty": diff_level,
            "spanish_translation": f"Elige la traducción correcta: '{v['es']}'",
            "explanation": f"'{v['pt']}' significa '{v['es']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 2 translate
    for _ in range(2):
        v = random.choice(vocab_list)
        ex = {
            "type": "translate",
            "prompt": f"Escreva em português : '{v['es']}'",
            "phrase": v["es"],
            "answer": v["pt"],
            "target_vocab": v["pt"].lower(),
            "difficulty": diff_level + 1,
            "spanish_translation": f"Escribe en portugués: '{v['es']}'",
            "explanation": f"Se escribe '{v['pt']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 3 order_words
    for _ in range(3):
        v = random.choice(vocab_list)
        template = random.choice(GRAMMAR[theme])
        pt_sent = template["pt"].format(v["pt"].lower())
        es_sent = template["es"].format(v["es"].lower())
        words = pt_sent.replace(".", "").replace("?", "").replace("!", "").split()
        exercises.append({
            "type": "order_words",
            "prompt": f"Traduza : '{es_sent}'",
            "answer": pt_sent,
            "options": words,
            "target_vocab": v["pt"].lower(),
            "difficulty": diff_level + 2,
            "spanish_translation": f"Traduce: '{es_sent}'",
            "explanation": f"La estructura correcta es: '{pt_sent}'."
        })

    # 1 match_pairs
    pairs = random.sample(vocab_list, 4)
    exercises.append({
        "type": "match_pairs",
        "prompt": "Faça a correspondência correta",
        "pairs": [{"left": p["pt"], "right": p["es"]} for p in pairs],
        "target_vocab": "vocab_mix",
        "difficulty": diff_level + 3,
        "spanish_translation": "Empareja las palabras correctas",
        "explanation": "Relaciona cada palabra en portugués con su significado."
    })
    
    # 1 fill_in_blank
    v = random.choice(vocab_list)
    template = random.choice(GRAMMAR[theme])
    pt_sent = template["pt"].format("_____")
    ans = template["pt"].format(v["pt"].lower())
    distractors = generate_distractors(v["pt"], vocab_list)
    
    exercises.append({
        "type": "fill_in_blank",
        "prompt": pt_sent,
        "answer": v["pt"].lower(),
        "options": [v["pt"].lower()] + [d.lower() for d in distractors],
        "target_vocab": v["pt"].lower(),
        "difficulty": diff_level + 1,
        "spanish_translation": f"Completa la oración: '{template['es'].format(v['es'].lower())}'",
        "explanation": f"La palabra correcta es '{v['pt'].lower()}'."
    })
    
    random.shuffle(exercises)
    return {
        "lesson_id": lesson_id,
        "title": f"Lição {lesson_id + 1}",
        "exercises": exercises
    }

def main():
    out_dir = "/Users/alan/Downloads/edu-main 4/contenido"
    os.makedirs(out_dir, exist_ok=True)
    
    for unit_data in UNITS:
        unit = unit_data["unit"]
        theme = unit_data["theme"]
        title = unit_data["title"]
        
        lessons = []
        for l in range(5):
            lessons.append(build_lesson(l, theme, unit))
            
        json_data = {
            "language": "pt",
            "level": "a1",
            "unit": unit,
            "title": title,
            "lessons": lessons
        }
        
        path = os.path.join(out_dir, f"pt_a1_u{unit}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(json_data, f, indent=2, ensure_ascii=False)
        print(f"Generated {path} with 5 lessons.")

if __name__ == "__main__":
    main()
