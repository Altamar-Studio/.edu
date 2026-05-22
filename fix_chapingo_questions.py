import json
import re

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

sections_map = {
    "I.": "Habilidad Matemática",
    "II.": "Habilidad Verbal",
    "III.": "Comprensión Lectora",
    "IV.": "Matemáticas",
    "V.": "Español y Literatura",
    "VI.": "Historia de México",
    "VII.": "Geografía",
    "VIII.": "Biología",
    "IX.": "Física",
    "X.": "Química",
    "XI.": "Desarrollo Rural",
    "XII.": "Agronomía"
}

# The PDF has sections like "I. Habilidad Matemática"
# We can just manually assign them based on index or parsing text
# The ranges based on the PDF reading:
# Q1-Q15: Habilidad Matemática
# Q16-Q27: Habilidad Verbal
# Let's read the PDF text line by line to extract the correct sections.
