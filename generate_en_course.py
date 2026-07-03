import json
import random
import os

UNITS = [
    {"unit": 2, "title": "Mi Familia y Yo", "theme": "family"},
    {"unit": 3, "title": "En la Ciudad", "theme": "city"},
    {"unit": 4, "title": "Rutina Diaria (Checkpoint 1)", "theme": "routine"},
    {"unit": 5, "title": "Comida y Bebida", "theme": "food"},
    {"unit": 6, "title": "Ropa y Compras", "theme": "clothes"},
    {"unit": 7, "title": "Hobbies y Tiempo Libre", "theme": "hobbies"},
    {"unit": 8, "title": "Planes Futuros (Checkpoint 2)", "theme": "future"}
]

VOCAB = {
    "family": [
        {"en": "Mother", "es": "Madre"}, {"en": "Father", "es": "Padre"},
        {"en": "Brother", "es": "Hermano"}, {"en": "Sister", "es": "Hermana"},
        {"en": "Grandmother", "es": "Abuela"}, {"en": "Grandfather", "es": "Abuelo"},
        {"en": "Aunt", "es": "Tía"}, {"en": "Uncle", "es": "Tío"},
        {"en": "Cousin", "es": "Primo/a"}, {"en": "Family", "es": "Familia"}
    ],
    "city": [
        {"en": "Bank", "es": "Banco"}, {"en": "Hospital", "es": "Hospital"},
        {"en": "School", "es": "Escuela"}, {"en": "Restaurant", "es": "Restaurante"},
        {"en": "Park", "es": "Parque"}, {"en": "Supermarket", "es": "Supermercado"},
        {"en": "Street", "es": "Calle"}, {"en": "Museum", "es": "Museo"},
        {"en": "Bus stop", "es": "Parada de autobús"}, {"en": "Train station", "es": "Estación de tren"}
    ],
    "routine": [
        {"en": "Wake up", "es": "Despertar"}, {"en": "Have breakfast", "es": "Desayunar"},
        {"en": "Go to work", "es": "Ir a trabajar"}, {"en": "Have lunch", "es": "Almorzar"},
        {"en": "Go home", "es": "Ir a casa"}, {"en": "Have dinner", "es": "Cenar"},
        {"en": "Go to bed", "es": "Ir a dormir"}, {"en": "Take a shower", "es": "Bañarse"},
        {"en": "Read a book", "es": "Leer un libro"}, {"en": "Watch TV", "es": "Ver la tele"}
    ],
    "food": [
        {"en": "Apple", "es": "Manzana"}, {"en": "Bread", "es": "Pan"},
        {"en": "Water", "es": "Agua"}, {"en": "Coffee", "es": "Café"},
        {"en": "Milk", "es": "Leche"}, {"en": "Cheese", "es": "Queso"},
        {"en": "Chicken", "es": "Pollo"}, {"en": "Fish", "es": "Pescado"},
        {"en": "Rice", "es": "Arroz"}, {"en": "Salad", "es": "Ensalada"}
    ],
    "clothes": [
        {"en": "Shirt", "es": "Camisa"}, {"en": "Pants", "es": "Pantalones"},
        {"en": "Shoes", "es": "Zapatos"}, {"en": "Dress", "es": "Vestido"},
        {"en": "Jacket", "es": "Chaqueta"}, {"en": "Hat", "es": "Sombrero"},
        {"en": "Socks", "es": "Calcetines"}, {"en": "Skirt", "es": "Falda"},
        {"en": "T-shirt", "es": "Camiseta"}, {"en": "Coat", "es": "Abrigo"}
    ],
    "hobbies": [
        {"en": "Play tennis", "es": "Jugar tenis"}, {"en": "Swim", "es": "Nadar"},
        {"en": "Run", "es": "Correr"}, {"en": "Paint", "es": "Pintar"},
        {"en": "Listen to music", "es": "Escuchar música"}, {"en": "Dance", "es": "Bailar"},
        {"en": "Play video games", "es": "Jugar videojuegos"}, {"en": "Travel", "es": "Viajar"},
        {"en": "Sing", "es": "Cantar"}, {"en": "Cook", "es": "Cocinar"}
    ],
    "future": [
        {"en": "Travel tomorrow", "es": "Viajar mañana"}, {"en": "Study next week", "es": "Estudiar la próxima semana"},
        {"en": "Visit friends", "es": "Visitar amigos"}, {"en": "Buy a car", "es": "Comprar un carro"},
        {"en": "Learn English", "es": "Aprender inglés"}, {"en": "Move to a new house", "es": "Mudarse a una nueva casa"},
        {"en": "Start a new job", "es": "Empezar un nuevo trabajo"}, {"en": "Go on vacation", "es": "Ir de vacaciones"},
        {"en": "Read more", "es": "Leer más"}, {"en": "Save money", "es": "Ahorrar dinero"}
    ]
}

GRAMMAR = {
    "family": [
        {"en": "My {0} is tall", "es": "Mi {0} es alto"},
        {"en": "Her {0} is nice", "es": "Su {0} es amable"}
    ],
    "city": [
        {"en": "Where is the {0}", "es": "¿Dónde está el {0}?"},
        {"en": "There is a {0} here", "es": "Hay un {0} aquí"}
    ],
    "routine": [
        {"en": "I {0} at 7 AM", "es": "Yo suelo {0} a las 7 AM"},
        {"en": "She likes to {0}", "es": "A ella le gusta {0}"}
    ],
    "food": [
        {"en": "I want some {0}", "es": "Quiero {0}"},
        {"en": "Do you like {0}", "es": "¿Te gusta el {0}?"}
    ],
    "clothes": [
        {"en": "How much is this {0}", "es": "¿Cuánto cuesta este {0}?"},
        {"en": "I like those {0}", "es": "Me gustan esos {0}"}
    ],
    "hobbies": [
        {"en": "I love to {0}", "es": "Me encanta {0}"},
        {"en": "Can you {0}", "es": "¿Puedes {0}?"}
    ],
    "future": [
        {"en": "I am going to {0}", "es": "Voy a {0}"},
        {"en": "She will {0}", "es": "Ella va a {0}"}
    ]
}

def generate_distractors(correct_en, vocab_list):
    pool = [v["en"] for v in vocab_list if v["en"] != correct_en]
    random.shuffle(pool)
    return pool[:3]

def build_lesson(lesson_id, theme, diff_level):
    exercises = []
    vocab_list = VOCAB[theme]
    
    # 3 multiple_choice
    for _ in range(3):
        v = random.choice(vocab_list)
        exercises.append({
            "type": "multiple_choice",
            "prompt": f"Choose the correct translation: '{v['es']}'",
            "answer": v["en"],
            "distractors": generate_distractors(v["en"], vocab_list),
            "target_vocab": v["en"].lower(),
            "difficulty": diff_level,
            "spanish_translation": f"Elige la traducción correcta: '{v['es']}'",
            "explanation": f"'{v['en']}' significa '{v['es']}'."
        })
        
    # 2 translate
    for _ in range(2):
        v = random.choice(vocab_list)
        exercises.append({
            "type": "translate",
            "prompt": f"Type in English: '{v['es']}'",
            "phrase": v["es"],
            "answer": v["en"],
            "target_vocab": v["en"].lower(),
            "difficulty": diff_level + 1,
            "spanish_translation": f"Escribe en inglés: '{v['es']}'",
            "explanation": f"Se escribe '{v['en']}'."
        })
        
    # 3 order_words
    for _ in range(3):
        v = random.choice(vocab_list)
        template = random.choice(GRAMMAR[theme])
        en_sent = template["en"].format(v["en"].lower())
        es_sent = template["es"].format(v["es"].lower())
        words = en_sent.replace(".", "").replace("?", "").split()
        exercises.append({
            "type": "order_words",
            "prompt": f"Translate: '{es_sent}'",
            "answer": en_sent,
            "options": words,
            "target_vocab": v["en"].lower(),
            "difficulty": diff_level + 2,
            "spanish_translation": f"Traduce: '{es_sent}'",
            "explanation": f"La estructura correcta es: '{en_sent}'."
        })

    # 1 match_pairs
    pairs = random.sample(vocab_list, 4)
    exercises.append({
        "type": "match_pairs",
        "prompt": "Match the correct pairs",
        "pairs": [{"left": p["en"], "right": p["es"]} for p in pairs],
        "target_vocab": "vocab_mix",
        "difficulty": diff_level + 3,
        "spanish_translation": "Empareja las palabras correctas",
        "explanation": "Relaciona cada palabra en inglés con su significado."
    })
    
    # 1 fill_in_blank
    v = random.choice(vocab_list)
    template = random.choice(GRAMMAR[theme])
    en_sent = template["en"].format("_____")
    ans = template["en"].format(v["en"].lower())
    distractors = generate_distractors(v["en"], vocab_list)
    
    exercises.append({
        "type": "fill_in_blank",
        "prompt": en_sent,
        "answer": v["en"].lower(),
        "options": [v["en"].lower()] + [d.lower() for d in distractors],
        "target_vocab": v["en"].lower(),
        "difficulty": diff_level + 1,
        "spanish_translation": f"Completa la oración: '{template['es'].format(v['es'].lower())}'",
        "explanation": f"La palabra correcta es '{v['en'].lower()}'."
    })
    
    random.shuffle(exercises)
    return {
        "lesson_id": lesson_id,
        "title": f"Lesson {lesson_id + 1}",
        "exercises": exercises
    }

def main():
    out_dir = "/Users/alan/Downloads/edu-main 4/contenido"
    for unit_data in UNITS:
        unit = unit_data["unit"]
        theme = unit_data["theme"]
        title = unit_data["title"]
        
        lessons = []
        for l in range(5):
            lessons.append(build_lesson(l, theme, unit))
            
        json_data = {
            "language": "en",
            "level": "a1",
            "unit": unit,
            "title": title,
            "lessons": lessons
        }
        
        path = os.path.join(out_dir, f"en_a1_u{unit}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(json_data, f, indent=2, ensure_ascii=False)
        print(f"Generated {path} with 5 lessons.")

if __name__ == "__main__":
    main()
