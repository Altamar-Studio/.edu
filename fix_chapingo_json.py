import json
import re

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

# Define section starts based on our knowledge of the exam
# We will just map the 130 questions to these sections
sections = [
    (1, 15, "Habilidad Matemática"),
    (16, 27, "Habilidad Verbal"),
    (28, 35, "Comprensión Lectora"),
    (36, 50, "Matemáticas"),
    (51, 58, "Español y Literatura"),
    (59, 70, "Historia de México"),
    (71, 78, "Geografía"),
    (79, 95, "Biología"),
    (96, 108, "Física"),
    (109, 122, "Química"), # Let's assume XII is 128
    (123, 127, "Desarrollo Rural y Agricultura"),
    (128, 130, "Educación Cívica y Sociedad")
]

for q in questions:
    n = q['number']
    
    # assign section
    for s_start, s_end, s_name in sections:
        if s_start <= n <= s_end:
            q['section'] = s_name
            break
            
    # clean text
    # text might start with instructions like:
    # "Tiempo sugerido total... 1. Si 5x - 3 = 2x + 12, x ="
    # We want to remove everything before the "1. " or "2. " etc if it doesn't look like part of the question.
    
    # Specifically, look for `\n{n}. ` or just `{n}. `
    pattern = re.compile(rf'(?:\n|^)\s*{n}\.\s+(.*)', re.DOTALL)
    match = pattern.search(q['text'])
    if match:
        q['text'] = match.group(1).strip()
    else:
        # Fallback if no exact number matches
        pass

with open('simulador-chapingo-questions.js', 'w') as f:
    f.write('window.CHAPINGO_QUESTIONS = ')
    json.dump(questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

