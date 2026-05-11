import re
from bs4 import BeautifulSoup

file_path = r"c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

outro = soup.find('div', attrs={'data-card-stack-outro': ''})
if outro:
    # Change href
    for a in outro.find_all('a', href=re.compile(r'/Services', re.I)):
        a['href'] = '/work'

    # The button text is likely scattered in text nodes and attributes.
    # It's easier to modify the raw HTML string of the outro block.
    outro_html = str(outro)
    
    # Replace the text
    outro_html = re.sub(r'(?i)Explore our Services', 'Our Work', outro_html)
    
    # Replace the parsed tree with the modified one
    new_outro = BeautifulSoup(outro_html, "html.parser").find('div')
    outro.replace_with(new_outro)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Updated 'Explore our Services' to 'Our Work'")
