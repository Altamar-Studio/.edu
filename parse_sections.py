import urllib.request
import os

try:
    import pypdf
except ImportError:
    os.system("pip install pypdf")
    import pypdf

reader = pypdf.PdfReader("/Users/alan/Downloads/Simulacro Chapingo PROPEDEUTICO 2026.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

import re

for line in text.split('\n'):
    if re.match(r'^(I|V|X)+\.\s', line.strip()):
        print(line.strip())

