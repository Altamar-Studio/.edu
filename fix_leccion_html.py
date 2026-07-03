import re

with open("leccion.html", "r", encoding="utf-8") as f:
    html = f.read()

# Remove the lives flex container
# It looks like:
# <div class="flex flex-col items-end">
#   <div class="flex items-center gap-1 font-bold text-red-500">...</div>
# </div>
lives_block = re.search(r'<div class="flex flex-col items-end">.*?</div>\s*</div>', html, flags=re.DOTALL)
if lives_block:
    html = html.replace(lives_block.group(0), "")

# Let's be safer and just remove the specific lives div:
html = re.sub(r'<div class="flex flex-col items-end">[\s\S]*?<div class="flex items-center gap-1 font-bold text-red-500">.*?</div>[\s\S]*?</div>', '', html)

# Also remove modal-game-over
game_over_block = re.search(r'<!-- Game Over Modal -->[\s\S]*?<div id="modal-game-over"[\s\S]*?</div>\s*</div>\s*</div>', html)
if game_over_block:
    html = html.replace(game_over_block.group(0), "")

with open("leccion.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("leccion.html cleaned.")
