import re
import glob

files = glob.glob("curso-*.html")

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()
    
    # We want to remove the lives block. It starts with <div class="group ... hover:border-red-500/30
    block_regex = r'<div class="group[^>]+hover:border-red-500/30[^>]+>[\s\S]*?<span[^>]+id="ui-heart-icon">❤️</span>[\s\S]*?<span[^>]+id="ui-lives">5/5</span>\s*</div>'
    
    html = re.sub(block_regex, '', html)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"{filepath} cleaned.")

