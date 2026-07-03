import os
from google import genai

api_key = os.environ.get("GEMINI_API_KEY", "AIzaSyDkfqqKjU02EWi7CZ7M-54sKV-F0IaqYAU")
client = genai.Client(api_key=api_key)

try:
    result = client.models.generate_images(
        model='imagen-3.0-generate-001',
        prompt='A friendly person waving hello, flat vector illustration, colorful',
        config=dict(number_of_images=1, output_mime_type="image/jpeg")
    )
    for generated_image in result.generated_images:
        with open('test_hello.jpg', 'wb') as f:
            f.write(generated_image.image.image_bytes)
    print("SUCCESS")
except Exception as e:
    print("FAILED:", e)
