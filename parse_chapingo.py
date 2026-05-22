import json

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

# strip the assignment
json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

sections = [
    (1, 20, "Habilidad Matemática"),
    (21, 35, "Habilidad Verbal"),
    (36, 45, "Comprensión Lectora"),
    (46, 68, "Matemáticas"),
    (69, 83, "Español y Literatura"),
    (84, 93, "Historia de México"),
    (94, 103, "Geografía"),
    (104, 113, "Biología"),
    (114, 122, "Física"),
    (123, 130, "Química")
    # Actually, are there 12 sections or 10? The user said 12 in UV but I might have to find the real sections.
]

# Let's inspect the questions to find section headers
for q in questions:
    print(f"Q{q['number']}: {q['text'][:50]}...")
