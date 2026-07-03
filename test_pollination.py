import urllib.request
import urllib.parse
prompt = "A friendly person waving hello, flat vector illustration, colorful"
url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt + ", flat vector illustration, language learning app style, clean white background, minimalist, high quality") + "?width=400&height=400&nologo=true"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        with open("test_pollination2.jpg", "wb") as f:
            f.write(response.read())
    print("Saved!")
except Exception as e:
    print("FAILED:", e)
