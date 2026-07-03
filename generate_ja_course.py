import json
import random
import os

UNITS = [
    {"unit": 1, "title": "Saludos (Aisatsu)", "theme": "greetings"},
    {"unit": 2, "title": "Familia (Kazoku)", "theme": "family"},
    {"unit": 3, "title": "Ciudad (Machi)", "theme": "city"},
    {"unit": 4, "title": "Rutina (Nichijō)", "theme": "routine"},
    {"unit": 5, "title": "Comida (Tabemono)", "theme": "food"},
    {"unit": 6, "title": "Compras (Kaimono)", "theme": "clothes"},
    {"unit": 7, "title": "Hobbies (Shumi)", "theme": "hobbies"},
    {"unit": 8, "title": "Planes (Yotei)", "theme": "future"}
]

VOCAB = {
    "greetings": [
        {"ja": "Ohayou (おはよう)", "es": "Buenos días", "img": "contenido/img/vocab_morning.png"},
        {"ja": "Konnichiwa (こんにちは)", "es": "Hola / Buenas tardes", "img": "contenido/img/vocab_hello.png"},
        {"ja": "Genki desu ka (元気ですか)", "es": "¿Cómo estás?", "img": "contenido/img/vocab_how_are_you.png"},
        {"ja": "Arigatou (ありがとう)", "es": "Gracias", "img": "contenido/img/vocab_happy.png"},
        {"ja": "Sayounara (さようなら)", "es": "Adiós", "img": None},
        {"ja": "Onegaishimasu (お願いします)", "es": "Por favor", "img": "contenido/img/vocab_business.png"},
        {"ja": "Watashi no namae wa (私の名前は)", "es": "Me llamo", "img": "contenido/img/vocab_student.png"},
        {"ja": "Hajimemashite (はじめまして)", "es": "Encantado", "img": "contenido/img/vocab_friends.png"},
        {"ja": "Hai (はい)", "es": "Sí", "img": None},
        {"ja": "Iie (いいえ)", "es": "No", "img": None}
    ],
    "family": [
        {"ja": "Haha (母)", "es": "Madre"}, {"ja": "Chichi (父)", "es": "Padre"},
        {"ja": "Ani (兄)", "es": "Hermano mayor"}, {"ja": "Ane (姉)", "es": "Hermana mayor"},
        {"ja": "Sobo (祖母)", "es": "Abuela"}, {"ja": "Sofu (祖父)", "es": "Abuelo"},
        {"ja": "Oba (伯母)", "es": "Tía"}, {"ja": "Oji (伯父)", "es": "Tío"},
        {"ja": "Kazoku (家族)", "es": "Familia"}, {"ja": "Ito-ko (いとこ)", "es": "Primo"}
    ],
    "city": [
        {"ja": "Ginkou (銀行)", "es": "Banco"}, {"ja": "Byouin (病院)", "es": "Hospital"},
        {"ja": "Gakkou (学校)", "es": "Escuela"}, {"ja": "Resutoran (レストラン)", "es": "Restaurante"},
        {"ja": "Kouen (公園)", "es": "Parque"}, {"ja": "Suupaa (スーパー)", "es": "Supermercado"},
        {"ja": "Michi (道)", "es": "Calle"}, {"ja": "Hakubutsukan (博物館)", "es": "Museo"},
        {"ja": "Eki (駅)", "es": "Estación de tren"}, {"ja": "Kuukou (空港)", "es": "Aeropuerto", "img": "contenido/img/vocab_countries.png"}
    ],
    "routine": [
        {"ja": "Okiru (起きる)", "es": "Despertar"}, {"ja": "Asagohan (朝ごはん)", "es": "Desayuno"},
        {"ja": "Shigoto ni iku (仕事に行く)", "es": "Ir a trabajar"}, {"ja": "Hirugohan (昼ごはん)", "es": "Almuerzo"},
        {"ja": "Kaeru (帰る)", "es": "Volver a casa"}, {"ja": "Bangohan (晩ごはん)", "es": "Cena"},
        {"ja": "Neru (寝る)", "es": "Dormir"}, {"ja": "Shawaa (シャワー)", "es": "Ducha"},
        {"ja": "Hon wo yomu (本を読む)", "es": "Leer un libro"}, {"ja": "Terebi wo miru (テレビを見る)", "es": "Ver la tele"}
    ],
    "food": [
        {"ja": "Ringo (りんご)", "es": "Manzana"}, {"ja": "Pan (パン)", "es": "Pan"},
        {"ja": "Mizu (水)", "es": "Agua"}, {"ja": "Koohii (コーヒー)", "es": "Café"},
        {"ja": "Gyuunyuu (牛乳)", "es": "Leche"}, {"ja": "Chiizu (チーズ)", "es": "Queso"},
        {"ja": "Toriniku (鶏肉)", "es": "Pollo"}, {"ja": "Sakana (魚)", "es": "Pescado"},
        {"ja": "Gohan (ご飯)", "es": "Arroz"}, {"ja": "Sarada (サラダ)", "es": "Ensalada"}
    ],
    "clothes": [
        {"ja": "Shatsu (シャツ)", "es": "Camisa"}, {"ja": "Zubon (ズボン)", "es": "Pantalones"},
        {"ja": "Kutsu (靴)", "es": "Zapatos"}, {"ja": "Doresu (ドレス)", "es": "Vestido"},
        {"ja": "Jaketto (ジャケット)", "es": "Chaqueta"}, {"ja": "Boushi (帽子)", "es": "Sombrero"},
        {"ja": "Kutsushita (靴下)", "es": "Calcetines"}, {"ja": "Sukaato (スカート)", "es": "Falda"},
        {"ja": "Tii-shatsu (Tシャツ)", "es": "Camiseta"}, {"ja": "Kooto (コート)", "es": "Abrigo"}
    ],
    "hobbies": [
        {"ja": "Tenisu (テニス)", "es": "Tenis"}, {"ja": "Oyogu (泳ぐ)", "es": "Nadar"},
        {"ja": "Hashiru (走る)", "es": "Correr"}, {"ja": "E wo kaku (絵を描く)", "es": "Pintar"},
        {"ja": "Ongaku (音楽)", "es": "Música"}, {"ja": "Dansu (ダンス)", "es": "Bailar"},
        {"ja": "Geemu (ゲーム)", "es": "Videojuegos"}, {"ja": "Ryokou (旅行)", "es": "Viajar"},
        {"ja": "Utau (歌う)", "es": "Cantar"}, {"ja": "Ryouri (料理)", "es": "Cocinar"}
    ],
    "future": [
        {"ja": "Ashita ryokou suru (明日旅行する)", "es": "Viajar mañana"}, {"ja": "Raishuu benkyou suru (来週勉強する)", "es": "Estudiar la próxima semana"},
        {"ja": "Tomodachi ni au (友達に会う)", "es": "Visitar amigos"}, {"ja": "Kuruma wo kau (車を買う)", "es": "Comprar un carro"},
        {"ja": "Nihongo wo manabu (日本語を学ぶ)", "es": "Aprender japonés"}, {"ja": "Hikkosu (引っ越す)", "es": "Mudarse"},
        {"ja": "Atarashii shigoto (新しい仕事)", "es": "Nuevo trabajo"}, {"ja": "Yasumi (休み)", "es": "Vacaciones"},
        {"ja": "Motto yomu (もっと読む)", "es": "Leer más"}, {"ja": "Chokin suru (貯金する)", "es": "Ahorrar dinero"}
    ]
}

GRAMMAR = {
    "greetings": [
        {"ja": "Watashi wa {0} to iimasu", "es": "Yo digo {0}"},
        {"ja": "Kare wa {0} to kotaemasu", "es": "Él responde {0}"}
    ],
    "family": [
        {"ja": "Watashi no {0} wa se ga takai desu", "es": "Mi {0} es alto"},
        {"ja": "Kare no {0} wa shinsetsu desu", "es": "Su {0} es amable"}
    ],
    "city": [
        {"ja": "{0} wa doko desu ka", "es": "¿Dónde está el {0}?"},
        {"ja": "Koko ni {0} ga arimasu", "es": "Hay un {0} aquí"}
    ],
    "routine": [
        {"ja": "Watashi wa {0} ga shitai desu", "es": "Yo quiero {0}"},
        {"ja": "Kanojo wa {0} ga suki desu", "es": "A ella le gusta {0}"}
    ],
    "food": [
        {"ja": "Watashi wa {0} ga hoshii desu", "es": "Quiero {0}"},
        {"ja": "{0} wa suki desu ka", "es": "¿Te gusta el {0}?"}
    ],
    "clothes": [
        {"ja": "Kono {0} wa ikura desu ka", "es": "¿Cuánto cuesta este {0}?"},
        {"ja": "Watashi wa kono {0} ga suki desu", "es": "Me gustan estos {0}"}
    ],
    "hobbies": [
        {"ja": "Watashi wa {0} ga daisuki desu", "es": "Me encanta {0}"},
        {"ja": "{0} dekimasu ka", "es": "¿Puedes {0}?"}
    ],
    "future": [
        {"ja": "Watashi wa {0} tsumori desu", "es": "Voy a {0}"},
        {"ja": "Kanojo wa {0} tsumori desu", "es": "Ella va a {0}"}
    ]
}

def generate_distractors(correct_ja, vocab_list):
    pool = [v["ja"] for v in vocab_list if v["ja"] != correct_ja]
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
            "prompt": f"Elige la traducción correcta : '{v['es']}'",
            "answer": v["ja"],
            "distractors": generate_distractors(v["ja"], vocab_list),
            "target_vocab": v["ja"].split(" (")[0].lower(),
            "difficulty": diff_level,
            "spanish_translation": f"Traducción de: '{v['es']}'",
            "explanation": f"'{v['ja']}' significa '{v['es']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 2 translate
    for _ in range(2):
        v = random.choice(vocab_list)
        ex = {
            "type": "translate",
            "prompt": f"Escribe en japonés : '{v['es']}'",
            "phrase": v["es"],
            "answer": v["ja"],
            "target_vocab": v["ja"].split(" (")[0].lower(),
            "difficulty": diff_level + 1,
            "spanish_translation": f"Traduce: '{v['es']}'",
            "explanation": f"Se dice '{v['ja']}'."
        }
        if v.get("img"):
            ex["image"] = v["img"]
        exercises.append(ex)
        
    # 3 order_words
    for _ in range(3):
        v = random.choice(vocab_list)
        template = random.choice(GRAMMAR[theme])
        
        # Replace template value with romaji/kana
        val = v["ja"].split(" (")[0]
        ja_sent = template["ja"].format(val)
        es_sent = template["es"].format(v["es"].lower())
        words = ja_sent.replace(".", "").replace("?", "").replace("!", "").split()
        
        exercises.append({
            "type": "order_words",
            "prompt": f"Traduce : '{es_sent}'",
            "answer": ja_sent,
            "options": words,
            "target_vocab": val.lower(),
            "difficulty": diff_level + 2,
            "spanish_translation": f"Ordena la frase: '{es_sent}'",
            "explanation": f"La estructura correcta es: '{ja_sent}'."
        })

    # 1 match_pairs
    pairs = random.sample(vocab_list, 4)
    exercises.append({
        "type": "match_pairs",
        "prompt": "Empareja los términos",
        "pairs": [{"left": p["ja"], "right": p["es"]} for p in pairs],
        "target_vocab": "vocab_mix",
        "difficulty": diff_level + 3,
        "spanish_translation": "Relaciona japonés con español",
        "explanation": "Cada término tiene su par equivalente."
    })
    
    # 1 fill_in_blank
    v = random.choice(vocab_list)
    template = random.choice(GRAMMAR[theme])
    val = v["ja"].split(" (")[0]
    ja_sent_blank = template["ja"].format("_____")
    ans = val
    
    distractors_raw = generate_distractors(v["ja"], vocab_list)
    distractors = [d.split(" (")[0] for d in distractors_raw]
    
    exercises.append({
        "type": "fill_in_blank",
        "prompt": ja_sent_blank,
        "answer": ans,
        "options": [ans] + distractors,
        "target_vocab": ans.lower(),
        "difficulty": diff_level + 1,
        "spanish_translation": f"Completa: '{template['es'].format(v['es'].lower())}'",
        "explanation": f"Falta '{val}'."
    })
    
    random.shuffle(exercises)
    return {
        "lesson_id": lesson_id,
        "title": f"Lección {lesson_id + 1}",
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
            "language": "ja",
            "level": "a1",
            "unit": unit,
            "title": title,
            "lessons": lessons
        }
        
        path = os.path.join(out_dir, f"ja_a1_u{unit}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(json_data, f, indent=2, ensure_ascii=False)
        print(f"Generated {path} with 5 lessons.")

if __name__ == "__main__":
    main()
