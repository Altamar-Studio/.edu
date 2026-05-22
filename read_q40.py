import urllib.request
import os

try:
    import pypdf
except ImportError:
    import pypdf

reader = pypdf.PdfReader("/Users/alan/Downloads/Simulacro Chapingo PROPEDEUTICO 2026.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

print(text[text.find("33."):text.find("45.")])
