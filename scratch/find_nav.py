from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Find the navbar by looking for 'Services' and 'Contact' together in a nav-like structure
for a in soup.find_all('a'):
    if 'Services' in a.get_text():
        # Check if it has siblings like 'Contact' or 'Blog'
        parent = a.parent
        while parent:
            text = parent.get_text().lower()
            if 'contact' in text and 'blog' in text:
                print(f"Potential Nav Container: Tag={parent.name}, Class={parent.get('class')}")
                # Print the first few hundred characters of this container
                print(str(parent)[:1000])
                break
            parent = parent.parent
        if parent: break
