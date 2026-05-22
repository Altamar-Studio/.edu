import urllib.request
import os
import re

try:
    import pypdf
except ImportError:
    import pypdf

reader = pypdf.PdfReader("/Users/alan/Downloads/Simulacro Chapingo PROPEDEUTICO 2026.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

lines = text.split('\n')
current_section = ""
q_pattern = re.compile(r'^(\d+)\.\s')

for i, line in enumerate(lines):
    line = line.strip()
    sec_match = re.match(r'^(I|V|X)+\.\s(.*)', line)
    if sec_match:
        current_section = sec_match.group(2).strip()
        print(f"\nSection: {current_section}")
    
    q_match = q_pattern.match(line)
    if q_match:
        q_num = int(q_match.group(1))
        # print first question of each section
        print(f"  Q{q_num}: {line[:30]}...")

