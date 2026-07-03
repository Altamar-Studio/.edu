import os
import glob
import shutil
import json

# 1. Copy images
artifact_dir = "/Users/alan/.gemini/antigravity/brain/6b7843a0-72a5-4a93-add3-6a533bd0ff11/"
target_dir = "/Users/alan/Downloads/edu-main 4/contenido/img/"

images = glob.glob(os.path.join(artifact_dir, "vocab_*.png"))

# Create a mapping of base name to final relative path
image_map = {
    "A friendly person waving hello": "vocab_hello.png",
    "A bright sunrise over a city, morning coffee": "vocab_morning.png",
    "Two friends meeting and asking how they are": "vocab_how_are_you.png",
    "Two people shaking hands, business casual": "vocab_business.png",
    "A young male student with a backpack": "vocab_student.png",
    "A happy group of friends laughing": "vocab_friends.png",
    "A very large dog standing on grass": "vocab_big.png",
    "A happy woman smiling": "vocab_happy.png",
    "A person looking at their watch running": "vocab_late.png",
    "A globe with pins on different countries": "vocab_countries.png"
}

# The files generated have timestamps like vocab_hello_123.png
# Let's map base name (e.g. vocab_hello) to the actual file copied
base_to_final = {}

for img_path in images:
    filename = os.path.basename(img_path)
    # Extract base name by removing the _[timestamp].png
    # Assuming format: base_name_timestamp.png
    parts = filename.split('_')
    if len(parts) >= 3:
        # e.g. vocab_how_are_you_123.png
        base_name = "_".join(parts[:-1])
    else:
        base_name = parts[0]
        
    final_filename = base_name + ".png"
    final_path = os.path.join(target_dir, final_filename)
    shutil.copy2(img_path, final_path)
    base_to_final[base_name] = "contenido/img/" + final_filename

print("Images copied successfully!")

# 2. Update JSON
json_path = "/Users/alan/Downloads/edu-main 4/contenido/en_a1_u1.json"
with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

prompt_to_base = {
    "A friendly person waving hello": "vocab_hello",
    "A bright sunrise over a city, morning coffee": "vocab_morning",
    "Two friends meeting and asking how they are": "vocab_how_are_you",
    "Two people shaking hands, business casual": "vocab_business",
    "A young male student with a backpack": "vocab_student",
    "A happy group of friends laughing": "vocab_friends",
    "A very large dog standing on grass": "vocab_big",
    "A happy woman smiling": "vocab_happy",
    "A person looking at their watch running": "vocab_late",
    "A globe with pins on different countries": "vocab_countries"
}

updated_count = 0
for lesson in data.get("lessons", []):
    for ex in lesson.get("exercises", []):
        prompt = ex.get("image_prompt")
        if prompt and prompt in prompt_to_base:
            base = prompt_to_base[prompt]
            if base in base_to_final:
                ex["image"] = base_to_final[base]
                del ex["image_prompt"]
                updated_count += 1

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    
print(f"Updated {updated_count} exercises in JSON.")
