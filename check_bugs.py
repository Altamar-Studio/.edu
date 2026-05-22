import json

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

for q in questions:
    if q['number'] in [33, 40]:
        print(f"Q{q['number']}:")
        print(f"Text: {q['text']}")
        print(f"Correct: {q['correct_answer']}")
        print(f"Options: {q['options']}")
        print("---")
