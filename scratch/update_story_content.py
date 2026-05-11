from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Target the story section texts
left_p = soup.find('p', class_='story_text u-text-style-h3')
if left_p:
    left_p.string = "Let's Build Something Unreal for Your Brand"
    print("Updated left text.")

right_p = soup.find('p', class_='story_text u-text-style-main')
if right_p:
    right_p.string = "Ready to transform your brand with cinematic production? Let’s create visuals that stop scrolls and start conversations."
    print("Updated right text.")

# 2. Update the button
# Find the button that says "Discover what's on"
for a in soup.find_all('a'):
    if "Discover what's on" in a.get_text():
        a['href'] = '/contact'
        # Update nested spans
        for span in a.find_all('span'):
            if span.string == "Discover what's on":
                span.string = "CONTACT US"
        # Also update sr-only text
        sr = a.find(class_='u-sr-only')
        if sr: sr.string = "CONTACT US"
        print("Updated button link to /contact.")

# Also update the visual parts of the button (the ones outside the 'a' but inside the 'wrap')
btn_wrap = soup.find('div', class_='btn_main_wrap')
if btn_wrap:
    for span in btn_wrap.find_all('span'):
        if "Discover what's on" in span.get_text():
            if span.string:
                span.string = "CONTACT US"
            if span.has_attr('data-text'):
                span['data-text'] = "CONTACT US"
            # Handle nested text
            for s in span.find_all(string=True):
                if "Discover what's on" in s:
                    s.replace_with("CONTACT US")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Content replacement complete.")
