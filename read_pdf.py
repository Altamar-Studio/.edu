import urllib.request
import os

try:
    import pypdf
except ImportError:
    os.system("pip install pypdf")
    import pypdf

reader = pypdf.PdfReader("/Users/alan/Downloads/Simulacro Chapingo PROPEDEUTICO 2026.pdf")
text = ""
for page in reader.pages[:5]:
    text += page.extract_text() + "\n"
print(text)
