import json
import random
import os

UNITS = [
    {"unit": 1, "title": "Les Salutations", "theme": "greetings"},
    {"unit": 2, "title": "La Famille", "theme": "family"},
    {"unit": 3, "title": "La Ville", "theme": "city"},
    {"unit": 4, "title": "La Routine (Checkpoint 1)", "theme": "routine"},
    {"unit": 5, "title": "La Nourriture", "theme": "food"},
    {"unit": 6, "title": "Les Vêtements", "theme": "clothes"},
    {"unit": 7, "title": "Les Loisirs", "theme": "hobbies"},
    {"unit": 8, "title": "Projets (Checkpoint 2)", "theme": "future"}
]

VOCAB = {
    "greetings": [
        {"fr": "Bonjour", "es": "Hola / Buenos días", "img": "contenido/img/vocab_morning.png"},
        {"fr": "Salut", "es": "Hola (informal)", "img": "contenido/img/vocab_hello.png"},
        {"fr": "Comment ça va ?", "es": "¿Cómo estás?", "img": "contenido/img/vocab_how_are_you.png"},
        {"fr": "Merci", "es": "Gracias", "img": "contenido/img/vocab_happy.png"},
        {"fr": "Au revoir", "es": "Adiós", "img": None},
        {"fr": "S'il vous plaît", "es": "Por favor", "img": "contenido/img/vocab_business.png"},
        {"fr": "Je m'appelle", "es": "Me llamo", "img": "contenido/img/vocab_student.png"},
        {"fr": "Enchanté", "es": "Encantado", "img": "contenido/img/vocab_friends.png"},
        {"fr": "Oui", "es": "Sí", "img": None},
        {"fr": "Non", "es": "No", "img": None}
    ],
    "family": [
        {"fr": "Mère", "es": "Madre"}, {"fr": "Père", "es": "Padre"},
        {"fr": "Frère", "es": "Hermano"}, {"fr": "Sœur", "es": "Hermana"},
        {"fr": "Grand-mère", "es": "Abuela"}, {"fr": "Grand-père", "es": "Abuelo"},
        {"fr": "Tante", "es": "Tía"}, {"fr": "Oncle", "es": "Tío"},
        {"fr": "Cousin", "es": "Primo"}, {"fr": "Famille", "es": "Familia"}
    ],
    "city": [
        {"fr": "Banque", "es": "Banco"}, {"fr": "Hôpital", "es": "Hospital"},
        {"fr": "École", "es": "Escuela"}, {"fr": "Restaurant", "es": "Restaurante"},
        {"fr": "Parc", "es": "Parque"}, {"fr": "Supermarché", "es": "Supermercado"},
        {"fr": "Rue", "es": "Calle"}, {"fr": "Musée", "es": "Museo"},
        {"fr": "Gare", "es": "Estación de tren"}, {"fr": "Aéroport", "es": "Aeropuerto", "img": "contenido/img/vocab_countries.png"}
    ],
    "routine": [
        {"fr": "Se réveiller", "es": "Despertar"}, {"fr": "Prendre le petit déjeuner", "es": "Desayunar"},
        {"fr": "Aller au travail", "es": "Ir a trabajar"}, {"fr": "Déjeuner", "es": "Almorzar"},
        {"fr": "Rentrer chez soi", "es": "Ir a casa"}, {"fr": "Dîner", "es": "Cenar"},
        {"fr": "Se coucher", "es": "Ir a dormir"}, {"fr": "Prendre une douche", "es": "Bañarse"},
        {"fr": "Lire un livre", "es": "Leer un libro"}, {"fr": "Regarder la télé", "es": "Ver la tele"}
    ],
    "food": [
        {"fr": "Pomme", "es": "Manzana"}, {"fr": "Pain", "es": "Pan"},
        {"fr": "Eau", "es": "Agua"}, {"fr": "Café", "es": "Café"},
        {"fr": "Lait", "es": "Leche"}, {"fr": "Fromage", "es": "Queso"},
        {"fr": "Poulet", "es": "Pollo"}, {"fr": "Poisson", "es": "Pescado"},
        {"fr": "Riz", "es": "Arroz"}, {"fr": "Salade", "es": "Ensalada"}
    ],
    "clothes": [
        {"fr": "Chemise", "es": "Camisa"}, {"fr": "Pantalon", "es": "Pantalones"},
        {"fr": "Chaussures", "es": "Zapatos"}, {"fr": "Robe", "es": "Vestido"},
        {"fr": "Veste", "es": "Chaqueta"}, {"fr": "Chapeau", "es": "Sombrero"},
        {"fr": "Chaussettes", "es": "Calcetines"}, {"fr": "Jupe", "es": "Falda"},
        {"fr": "T-shirt", "es": "Camiseta"}, {"fr": "Manteau", "es": "Abrigo"}
    ],
    "hobbies": [
        {"fr": "Jouer au tennis", "es": "Jugar tenis"}, {"fr": "Nager", "es": "Nadar"},
        {"fr": "Courir", "es": "Correr"}, {"fr": "Peindre", "es": "Pintar"},
        {"fr": "Écouter de la musique", "es": "Escuchar música"}, {"fr": "Danser", "es": "Bailar"},
        {"fr": "Jouer aux jeux vidéo", "es": "Jugar videojuegos"}, {"fr": "Voyager", "es": "Viajar"},
        {"fr": "Chanter", "es": "Cantar"}, {"fr": "Cuisiner", "es": "Cocinar"}
    ],
    "future": [
        {"fr": "Voyager demain", "es": "Viajar mañana"}, {"fr": "Étudier la semaine prochaine", "es": "Estudiar la próxima semana"},
        {"fr": "Visiter des amis", "es": "Visitar amigos"}, {"fr": "Acheter une voiture", "es": "Comprar un carro"},
        {"fr": "Apprendre le français", "es": "Aprender francés"}, {"fr": "Déménager", "es": "Mudarse"},
        {"fr": "Commencer un nouveau travail", "es": "Empezar un nuevo trabajo"}, {"fr": "Partir en vacances", "es": "Ir de vacaciones"},
        {"fr": "Lire plus", "es": "Leer más"}, {"fr": "Économiser de l'argent", "es": "Ahorrar dinero"}
    ]
}

GRAMMAR = {
    "greetings": [
        {"fr": "Je dis {0}", "es": "Yo digo {0}"},
        {"fr": "Il répond {0}", "es": "Él responde {0}"}
    ],
    "family": [
        {"fr": "Mon {0} est grand", "es": "Mi {0} es alto"},
        {"fr": "Sa {0} est gentille", "es": "Su {0} es amable"}
    ],
    "city": [
        {"fr": "Où est le {0} ?", "es": "¿Dónde está el {0}?"},
        {"fr": "Il y a un {0} ici", "es": "Hay un {0} aquí"}
    ],
    "routine": [
        {"fr": "Je veux {0}", "es": "Yo quiero {0}"},
        {"fr": "Elle aime {0}", "es": "A ella le gusta {0}"}
    ],
    "food": [
        {"fr": "Je veux du {0}", "es": "Quiero {0}"},
        {"fr": "Aimes-tu le {0} ?", "es": "¿Te gusta el {0}?"}
    ],
    "clothes": [
        {"fr": "Combien coûte ce {0} ?", "es": "¿Cuánto cuesta este {0}?"},
        {"fr": "J'aime ces {0}", "es": "Me gustan esos {0}"}
    ],
    "hobbies": [
        {"fr": "J'adore {0}", "es": "Me encanta {0}"},
        {"fr": "Peux-tu {0} ?", "es": "¿Puedes {0}?"}
    ],
    "future": [
        {"fr": "Je vais {0}", "es": "Voy a {0}"},
        {"fr": "Elle va {0}", "es": "Ella va a {0}"}
    ]
}

def generate_distractors(correct_fr, vocab_list):
    pool = [v["fr"] for v in vocab_list if v["fr"] != correct_fr]
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
            "prompt": f"Choisis la bonne traduction : '{v['es']}'",
            "answer": v["fr"],
            "distractors": generate_distractors(v["fr"], vocab_list),
            "target_vocab": v["fr"].lower(),
            "difficulty": diff_level,
            "spanish_translation": f"Elige la traducción correcta: '{v['es']}'",
            "explanation": f"'{v['fr']}' significa '{v['es']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 2 translate
    for _ in range(2):
        v = random.choice(vocab_list)
        ex = {
            "type": "translate",
            "prompt": f"Écris en français : '{v['es']}'",
            "phrase": v["es"],
            "answer": v["fr"],
            "target_vocab": v["fr"].lower(),
            "difficulty": diff_level + 1,
            "spanish_translation": f"Escribe en francés: '{v['es']}'",
            "explanation": f"Se escribe '{v['fr']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 3 order_words
    for _ in range(3):
        v = random.choice(vocab_list)
        template = random.choice(GRAMMAR[theme])
        fr_sent = template["fr"].format(v["fr"].lower())
        es_sent = template["es"].format(v["es"].lower())
        words = fr_sent.replace(".", "").replace("?", "").replace("!", "").split()
        exercises.append({
            "type": "order_words",
            "prompt": f"Traduis : '{es_sent}'",
            "answer": fr_sent,
            "options": words,
            "target_vocab": v["fr"].lower(),
            "difficulty": diff_level + 2,
            "spanish_translation": f"Traduce: '{es_sent}'",
            "explanation": f"La estructura correcta es: '{fr_sent}'."
        })

    # 1 match_pairs
    pairs = random.sample(vocab_list, 4)
    exercises.append({
        "type": "match_pairs",
        "prompt": "Fais correspondre les bonnes paires",
        "pairs": [{"left": p["fr"], "right": p["es"]} for p in pairs],
        "target_vocab": "vocab_mix",
        "difficulty": diff_level + 3,
        "spanish_translation": "Empareja las palabras correctas",
        "explanation": "Relaciona cada palabra en francés con su significado."
    })
    
    # 1 fill_in_blank
    v = random.choice(vocab_list)
    template = random.choice(GRAMMAR[theme])
    fr_sent = template["fr"].format("_____")
    ans = template["fr"].format(v["fr"].lower())
    distractors = generate_distractors(v["fr"], vocab_list)
    
    exercises.append({
        "type": "fill_in_blank",
        "prompt": fr_sent,
        "answer": v["fr"].lower(),
        "options": [v["fr"].lower()] + [d.lower() for d in distractors],
        "target_vocab": v["fr"].lower(),
        "difficulty": diff_level + 1,
        "spanish_translation": f"Completa la oración: '{template['es'].format(v['es'].lower())}'",
        "explanation": f"La palabra correcta es '{v['fr'].lower()}'."
    })
    
    random.shuffle(exercises)
    return {
        "lesson_id": lesson_id,
        "title": f"Leçon {lesson_id + 1}",
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
            "language": "fr",
            "level": "a1",
            "unit": unit,
            "title": title,
            "lessons": lessons
        }
        
        path = os.path.join(out_dir, f"fr_a1_u{unit}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(json_data, f, indent=2, ensure_ascii=False)
        print(f"Generated {path} with 5 lessons.")

if __name__ == "__main__":
    main()
