from bs4 import BeautifulSoup
import re

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Map of replacements
replacements = {
    'Services': 'Home',
    'SERVICES': 'HOME',
    'Blog': 'Work',
    'BLOG': 'WORK',
    'Book Tickets': 'Tools',
    'BOOK TICKETS': 'TOOLS',
    'Tickets': 'Tools',
    'TICKETS': 'TOOLS'
}

# 1. Replace text in all text nodes
for text_node in soup.find_all(string=True):
    if text_node.parent.name in ['script', 'style']:
        continue
    
    original = text_node.string
    if not original: continue
    
    new_text = original
    for old, new in replacements.items():
        # Only replace whole words or specific patterns to avoid breaking class names
        # Actually, in text nodes, it's usually safe to replace the whole string if it matches
        if old in original:
            new_text = new_text.replace(old, new)
    
    if new_text != original:
        text_node.replace_with(new_text)

# 2. Replace in data-text attributes (crucial for Webflow buttons)
for el in soup.find_all(attrs={"data-text": True}):
    val = el['data-text']
    for old, new in replacements.items():
        if old in val:
            val = val.replace(old, new)
    el['data-text'] = val

# 3. Update hrefs
for a in soup.find_all('a', href=True):
    href = a['href']
    if '/Services' in href: a['href'] = '/'
    if '/exhibits' in href: a['href'] = '/'
    if '/blog' in href: a['href'] = '/work'
    if '/tickets' in href: a['href'] = '/tools'

# 4. Final check for any data-animate-theme-to="green"
for el in soup.find_all(attrs={"data-animate-theme-to": "green"}):
    el['data-animate-theme-to'] = "black"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Thorough text replacement completed.")
