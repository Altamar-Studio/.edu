import re

with open("userProfile.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Remove lives and lastLivesUpdate from DEFAULT_PROFILE
js = re.sub(r'\s*lives:\s*5,\s*lastLivesUpdate:\s*Date\.now\(\),', '', js)

# 2. Remove default sets from getProfile
js = re.sub(r'\s*if\s*\(parsed\.lives\s*===\s*undefined\)\s*parsed\.lives\s*=\s*5;', '', js)
js = re.sub(r'\s*if\s*\(!parsed\.lastLivesUpdate\)\s*parsed\.lastLivesUpdate\s*=\s*Date\.now\(\);', '', js)

# 3. Remove initProfile recharge block
recharge_block = r"""    // Check lives recharge
    if \(profile\.lives < 5\) \{
        const now = Date\.now\(\);
        const diff = now - profile\.lastLivesUpdate;
        const livesToAdd = Math\.floor\(diff / LIFE_RECHARGE_MS\);
        if \(livesToAdd > 0\) \{
            profile\.lives = Math\.min\(5, profile\.lives \+ livesToAdd\);
            // Advance the timer by the amount of full chunks processed
            profile\.lastLivesUpdate \+= livesToAdd \* LIFE_RECHARGE_MS;
        \}
    \}"""
js = js.replace(recharge_block, "")

# Remove LIFE_RECHARGE_MS
js = re.sub(r'const\s+LIFE_RECHARGE_MS\s*=\s*15\s*\*\s*60\s*\*\s*1000;\s*//\s*15\s*minutes\s*per\s*life', '', js)

# Remove startLivesTimer call from initProfile
js = re.sub(r'\s*startLivesTimer\(\);', '', js)

# Remove startLivesTimer function
start_timer_func = r"""function startLivesTimer\(\) \{
    setInterval\(\(\) => \{
        let profile = getProfile\(\);
        if \(profile\.lives < 5\) \{
            const now = Date\.now\(\);
            const diff = now - profile\.lastLivesUpdate;
            if \(diff >= LIFE_RECHARGE_MS\) \{
                profile\.lives = Math\.min\(5, profile\.lives \+ 1\);
                profile\.lastLivesUpdate \+= LIFE_RECHARGE_MS;
                saveProfile\(profile\);
                updateUIHeaders\(\);
            \} else \{
                updateUIHeaders\(\); // To refresh the visible timer
            \}
        \}
    \}, 1000\);
\}"""
js = js.replace(start_timer_func, "")

# Remove getLives and decrementLife
lives_funcs = r"""// Funciones utilitarias para las Vidas \(Lives\)
function getLives\(\) \{
    return getProfile\(\)\.lives;
\}

function decrementLife\(\) \{
    let profile = getProfile\(\);
    if \(profile\.lives > 0\) \{
        profile\.lives--;
        profile\.lastLivesUpdate = Date\.now\(\);
        saveProfile\(profile\);
    \}
    return profile\.lives;
\}"""
js = js.replace(lives_funcs, "")

# Remove UI updating logic
ui_logic = r"""    const livesEl = document\.getElementById\('ui-lives'\);
    
    // Elementos adicionales para gamificación
    const streakIcon = document\.getElementById\('ui-streak-icon'\);
    const livesTimer = document\.getElementById\('ui-lives-timer'\); // Elemento a inyectar en HTML para el timer

    if \(streakEl\) streakEl\.textContent = profile\.streak;
    if \(xpEl\) xpEl\.textContent = profile\.xp\.toLocaleString\(\);
    
    if \(livesEl\) \{
        if \(profile\.lives >= 5\) \{
            livesEl\.textContent = '5/5';
            if\(livesTimer\) livesTimer\.classList\.add\('hidden'\);
        \} else \{
            livesEl\.textContent = profile\.lives \+ '/5';
            if \(livesTimer\) \{
                const now = Date\.now\(\);
                const diff = now - profile\.lastLivesUpdate;
                const msLeft = Math\.max\(0, LIFE_RECHARGE_MS - diff\);
                const mins = Math\.floor\(msLeft / 60000\);
                const secs = Math\.floor\(\(msLeft % 60000\) / 1000\);
                livesTimer\.textContent = `\$\{mins\}:\$\{secs\.toString\(\)\.padStart\(2, '0'\)\}`;
                livesTimer\.classList\.remove\('hidden'\);
            \}
        \}
    \}
    
    // Escalar la llama según la racha \(max scale 1\.5\)
    if \(streakIcon\) \{"""

new_ui_logic = """    
    // Elementos adicionales para gamificación
    const streakIcon = document.getElementById('ui-streak-icon');

    if (streakEl) streakEl.textContent = profile.streak;
    if (xpEl) xpEl.textContent = profile.xp.toLocaleString();
    
    // Escalar la llama según la racha (max scale 1.5)
    if (streakIcon) {"""
js = js.replace(ui_logic, new_ui_logic)

with open("userProfile.js", "w", encoding="utf-8") as f:
    f.write(js)
    
print("userProfile.js cleaned.")
