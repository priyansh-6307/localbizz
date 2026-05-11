from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Update copyright text
credit = soup.find('a', class_='footer_credit')
if credit:
    # Replace link with a simple span or just update the link text
    credit['href'] = '#'
    credit.string = "© Locbizz 2026"
    print("Updated footer credit/copyright.")

# 2. Remove the right portions (Secondary links and Newsletter)
secondary_wrap = soup.find('div', class_='footer_link_secondary_wrap')
if secondary_wrap:
    secondary_wrap.decompose()
    print("Removed secondary footer links.")

newsletter_wrap = soup.find('div', class_='newsletter_wrap')
if newsletter_wrap:
    newsletter_wrap.decompose()
    print("Removed newsletter section.")

# 3. Remove the falling coins canvas (it's legacy museum stuff)
coins = soup.find('div', class_='canvas-matter')
if coins:
    coins.decompose()
    print("Removed falling coins animation.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Footer update complete.")
