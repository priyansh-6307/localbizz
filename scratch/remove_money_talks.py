from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Find and remove the 'Money Talks' section (ft_articles_wrap)
money_talks = soup.find('section', class_='ft_articles_wrap')
if money_talks:
    money_talks.decompose()
    print("Removed 'Money Talks' section.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Cleanup complete.")
