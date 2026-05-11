import os
import re

target_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'

with open(target_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the curved apostrophe issue in the meta description
html = re.sub(r"Discover Dallas[’'] only fun money museum at Dealey Plaza in Downtown Dallas! Perfect for all ages\. Find out why everyone[’']s talking about it\.", "Locbizz is a specialized digital agency providing strategic ad campaigns, cinematic 3D ad production, and high-performance website development.", html)

# Fix Museum Services
html = html.replace('"name": "Museum Services"', '"name": "Locbizz Services"')

# Fix any lingering links
html = html.replace('momoney-the-museum-of-money', 'locbizz')

with open(target_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed remaining museum references.")
