with open('leccion.js', 'r') as f:
    content = f.read()

old_block = """    // Use 'prompt' (new schema) with fallback to 'question' (legacy placeholder)
    const questionText = ex.question || ex.prompt || '';
    let html = `<h2 class="text-2xl sm:text-3xl font-bold mb-8 text-ea-dark dark:text-white">${questionText}</h2>`;

    if (ex.type === 'multiple_choice') {
        let imageHtml = '';
        if (ex.image) {
            imageHtml = `<div class="mb-6 w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-sm border border-black/5"><img src="${ex.image}" alt="Imagen del ejercicio" class="w-full h-auto object-cover"/></div>`;
        }
        html += imageHtml;"""

new_block = """    // Use 'prompt' (new schema) with fallback to 'question' (legacy placeholder)
    const questionText = ex.question || ex.prompt || '';
    let html = `<h2 class="text-2xl sm:text-3xl font-bold mb-8 text-ea-dark dark:text-white">${questionText}</h2>`;

    if (ex.image) {
        html += `<div class="mb-6 w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-sm border border-black/5"><img src="${ex.image}" alt="Imagen del ejercicio" class="w-full h-auto object-cover"/></div>`;
    }

    if (ex.type === 'multiple_choice') {"""

content = content.replace(old_block, new_block)

with open('leccion.js', 'w') as f:
    f.write(content)
print("leccion.js updated to support images globally.")
