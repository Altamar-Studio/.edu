import re

with open("leccion.js", "r", encoding="utf-8") as f:
    js = f.read()

# Remove let lives = getLives();
js = re.sub(r'let\s+lives\s*=\s*getLives\(\);\s*', '', js)

# Remove const livesCounter
js = re.sub(r'const\s+livesCounter\s*=\s*document\.getElementById\(\'lives-counter\'\);\s*', '', js)

# Remove updateLives function
update_lives_func = r"""function updateLives\(\) \{
    if \(livesCounter\) \{
        livesCounter\.textContent = lives \+ '/5';
    \}
    if \(lives <= 0\) \{
        SoundFX\.gameOver\(\);
        modalGameOver\.classList\.remove\('hidden'\);
        modalGameOver\.classList\.add\('flex'\);
    \}
\}"""
js = js.replace(update_lives_func, "")

# Remove lives-- and updateLives() from match_pairs failure
js = re.sub(r'\s*lives--;\s*updateLives\(\);\s*', '', js)

# Remove lives = decrementLife();
js = re.sub(r'\s*lives\s*=\s*decrementLife\(\);\s*', '', js)

# Remove updateLives() in general
js = re.sub(r'\s*updateLives\(\);\s*', '', js)

# Fix the continue logic where it checks `lives > 0`
js = js.replace("if(feedbackTitle.textContent === 'Respuesta incorrecta' && lives > 0) {", "if(feedbackTitle.textContent === 'Respuesta incorrecta') {")

with open("leccion.js", "w", encoding="utf-8") as f:
    f.write(js)
    
print("leccion.js cleaned.")
