import json
import re

with open('simulador-chapingo-questions.js', 'r') as f:
    content = f.read()

json_str = content.replace('window.CHAPINGO_QUESTIONS = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

questions = json.loads(json_str)

# We need to map the 130 questions to their actual sections.
# Let's read the PDF using pdftotext or PyPDF2 if available
