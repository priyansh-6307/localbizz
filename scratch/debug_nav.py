from bs4 import BeautifulSoup
import re

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("--- NAV LINKS ---")
nav_links = soup.find_all('a', class_=lambda c: c and 'nav' in c.lower())
for link in nav_links:
    print(f"Text: '{link.get_text(strip=True)}', Class: {link.get('class')}, Href: {link.get('href')}")

print("\n--- CONTENT LINKS ---")
for a in soup.find_all('a'):
    text = a.get_text(strip=True).lower()
    if any(x in text for x in ['services', 'contact', 'blog', 'tickets']):
        print(f"Text: '{a.get_text(strip=True)}', Class: {a.get('class')}, Href: {a.get('href')}")

print("\n--- BUTTONS ---")
for btn in soup.find_all(['button', 'div'], class_=lambda c: c and 'btn' in c.lower()):
    text = btn.get_text(strip=True).lower()
    if any(x in text for x in ['services', 'contact', 'blog', 'tickets']):
        print(f"Text: '{btn.get_text(strip=True)}', Tag: {btn.name}, Class: {btn.get('class')}")
