import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We want to find the desktop nav and mobile nav.
# Desktop nav looks like:
# <div class="hidden md:flex items-center gap-6 text-sm font-medium opacity-60">
#     <a ... href="biblioteca.html">Biblioteca</a>
#     ...
# </div>

desktop_nav_pattern = re.compile(
    r'(<div class="hidden md:flex items-center gap-6 text-sm font-medium opacity-60">\s*)(.*?)(\s*</div>)',
    re.DOTALL
)

mobile_nav_pattern = re.compile(
    r'(<nav class="fixed bottom-0 left-0 right-0[^>]*>)(.*?)(</nav>)',
    re.DOTALL
)

def parse_anchors(html_block):
    # Extracts all anchor tags in order
    return re.findall(r'(<a[^>]*>.*?</a>)', html_block, re.DOTALL)

def reorder_desktop_anchors(anchors):
    order = ['biblioteca.html', 'aprendizaje.html', 'idiomas.html', 'noticias.html']
    new_anchors = []
    for target in order:
        for a in anchors:
            if target in a:
                new_anchors.append(a)
                break
    # Keep any other links (like login) if they exist
    for a in anchors:
        if not any(target in a for target in order) and "html" in a:
            new_anchors.append(a)
    return new_anchors

def reorder_mobile_anchors(anchors):
    order = ['index.html', 'biblioteca.html', 'aprendizaje.html', 'idiomas.html', 'noticias.html']
    new_anchors = []
    
    # We also want to FIX the active state. The active page should have opacity-100 text-black dark:text-white
    # but let's just do the reordering first, preserving the exact strings.
    for target in order:
        for a in anchors:
            if target in a:
                new_anchors.append(a)
                break
    return new_anchors

for f in html_files:
    if f == 'leccion.html': continue # skip lesson screen usually has no global nav
    
    with open(f, 'r') as file:
        content = file.read()
        
    original = content
    
    # Desktop
    def repl_desktop(m):
        prefix = m.group(1)
        anchors_block = m.group(2)
        suffix = m.group(3)
        anchors = parse_anchors(anchors_block)
        if len(anchors) >= 4:
            new_anchors = reorder_desktop_anchors(anchors)
            # Find the original whitespace between anchors to maintain formatting
            # Let's just use a newline and 20 spaces
            joiner = "\n                    "
            return prefix + joiner.join(new_anchors) + suffix
        return m.group(0)

    content = desktop_nav_pattern.sub(repl_desktop, content)
    
    # Mobile
    def repl_mobile(m):
        prefix = m.group(1)
        anchors_block = m.group(2)
        suffix = m.group(3)
        anchors = parse_anchors(anchors_block)
        if len(anchors) >= 4:
            new_anchors = reorder_mobile_anchors(anchors)
            joiner = "\n        "
            return prefix + "\n        " + joiner.join(new_anchors) + "\n    " + suffix
        return m.group(0)
        
    content = mobile_nav_pattern.sub(repl_mobile, content)
    
    # Fix active state for mobile nav
    # Find the current filename
    current_file = f
    
    # We want to ensure ONLY the current_file anchor has opacity-100 text-black dark:text-white
    # and others have opacity-40 hover:opacity-100
    
    if content != original:
        with open(f, 'w') as file:
            file.write(content)
        print(f"Updated {f}")

