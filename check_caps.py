import json
import re

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

for q in questions:
    if re.search(r'\b[A-Z]{3,}\b', q['text']):
        print(f"Q{q['number']}: {q['text']}")
