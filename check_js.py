import re
import subprocess

with open("curso-ingles.html", "r", encoding="utf-8") as f:
    html = f.read()

scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
for i, script in enumerate(scripts):
    with open(f"temp_{i}.js", "w", encoding="utf-8") as out:
        out.write(script)
    
    result = subprocess.run(["node", "-c", f"temp_{i}.js"], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error in script {i}: {result.stderr}")
    else:
        print(f"Script {i} OK")

