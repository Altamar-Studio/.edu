import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# We want to ensure that in the mobile nav, the anchor corresponding to the current file has opacity-100
# and all others have opacity-40.

def fix_active_state(html_block, current_file):
    def repl_anchor(m):
        a_tag = m.group(1)
        if current_file in a_tag:
            # Make active
            a_tag = re.sub(r'opacity-40\s+hover:opacity-100', 'opacity-100 text-black dark:text-white', a_tag)
        else:
            # Make inactive
            a_tag = re.sub(r'opacity-100\s+text-black\s+dark:text-white', 'opacity-40 hover:opacity-100', a_tag)
        return a_tag
        
    return re.sub(r'(<a[^>]*href="[^"]*"[^>]*>.*?</a>)', repl_anchor, html_block, flags=re.DOTALL)

for f in html_files:
    if f == 'leccion.html': continue
    
    with open(f, 'r') as file:
        content = file.read()
        
    original = content
    
    # mobile nav pattern
    mobile_nav_pattern = re.compile(r'(<nav class="fixed bottom-0 left-0 right-0[^>]*>)(.*?)(</nav>)', re.DOTALL)
    
    def repl_mobile(m):
        prefix = m.group(1)
        anchors_block = m.group(2)
        suffix = m.group(3)
        
        fixed_block = fix_active_state(anchors_block, f)
        
        return prefix + fixed_block + suffix

    content = mobile_nav_pattern.sub(repl_mobile, content)
    
    if content != original:
        with open(f, 'w') as file:
            file.write(content)
        print(f"Fixed active state in {f}")

