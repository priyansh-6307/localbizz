import re
from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')

# 1. Update Navigation Buttons
# Target links: Services, Blog, Book Tickets
# Target texts: SERVICES, BLOG, BOOK TICKETS, CONTACT

def update_link(old_text_pattern, new_text, new_href):
    # Find all <a> tags
    for a in soup.find_all('a'):
        text = a.get_text(strip=True)
        if re.search(old_text_pattern, text, re.IGNORECASE):
            # Update the text content inside spans if they exist (Webflow style)
            spans = a.find_all('span')
            if spans:
                for span in spans:
                    if re.search(old_text_pattern, span.get_text(strip=True), re.IGNORECASE):
                        span.string = new_text
            else:
                a.string = new_text
            
            # Update href
            a['href'] = new_href
            
            # Update data-text attributes (for hover effects)
            for el in a.find_all(attrs={"data-text": True}):
                if re.search(old_text_pattern, el['data-text'], re.IGNORECASE):
                    el['data-text'] = new_text
            
            # Check if parent has data-text
            parent = a.parent
            if parent and parent.has_attr('data-text'):
                if re.search(old_text_pattern, parent['data-text'], re.IGNORECASE):
                    parent['data-text'] = new_text

# Mapping replacements
update_link(r'Services|Exhibits', 'Home', '/')
update_link(r'Blog', 'Work', '/work')
update_link(r'Book Tickets|Tickets', 'Tools', '/tools')
update_link(r'Contact', 'Contact', '/contact')

# 2. Remove Green Backgrounds / Boxes
# Override specific data attributes that trigger green theme
for el in soup.find_all(attrs={"data-animate-theme-to": "green"}):
    el['data-animate-theme-to'] = "black"

for el in soup.find_all(attrs={"data-theme": "green"}):
    el['data-theme'] = "black"

# 3. Inject CSS to kill the green box at the top
style_tag = soup.new_tag('style')
style_tag.string = """
    /* Force navbar and its components to be black/transparent and NOT green */
    .nav_component, .nav_bg, .nav_bar, .nav_menu, .navbar, [data-animate-theme-to="green"], .u-theme-green {
        background-color: #000000 !important;
        background: #000000 !important;
    }
    .u-text-color-green, .text-green-500, .text-green-600 {
        color: #ffffff !important;
    }
    /* If the green box is a specific fixed element */
    [style*="background-color: rgb(11, 58, 34)"], [style*="background-color: #0b3a22"] {
        background-color: #000000 !important;
    }
"""
if soup.head:
    soup.head.append(style_tag)

# 4. Final global string replacement for any missed "Book Tickets" or "Services" in text
final_html = str(soup)
# Be careful with global replacements to not break paths, but these are pretty safe for display text
# final_html = final_html.replace('Book Tickets', 'Tools') # Already handled by soup mostly

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Navbar buttons updated and green box overrides injected.")
