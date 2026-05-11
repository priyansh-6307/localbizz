from bs4 import BeautifulSoup
import re

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Find the "three dots" menu and replace it with "TOOLS"
# It might be a span with dots or an icon.
# Let's search for the text '...' or something similar.
dots_found = False
for li in soup.find_all('li', class_='nav_link'):
    text = li.get_text(strip=True)
    if '...' in text or not text: # Empty text might be an icon
        print(f"Found potential dots menu in LI: {li.get('class')}")
        # Replace its content with 'TOOLS' structure
        # I'll copy the structure of a working nav link
        li.clear()
        # Create a link inside
        a = soup.new_tag('a', href='/tools', class_='w-inline-block')
        span = soup.new_tag('span', class_='btn_secondary_inner')
        back_span = soup.new_tag('span', class_='btn_secondary_back', **{'data-text': 'TOOLS'})
        back_text = soup.new_tag('span', class_='btn_secondary_back_text u-text-style-h5')
        back_text.string = 'TOOLS'
        back_span.append(back_text)
        
        front_span = soup.new_tag('span', class_='btn_secondary_front')
        front_bg = soup.new_tag('span', class_='btn_secondary_bg')
        front_text = soup.new_tag('span', class_='btn_secondary_front_text u-text-style-h5')
        front_text.string = 'TOOLS'
        front_span.append(front_bg)
        front_span.append(front_text)
        
        span.append(back_span)
        span.append(front_span)
        a.append(span)
        li.append(a)
        dots_found = True
        print("Replaced dots with TOOLS")

# 2. Find and remove the "separate white button"
# It's likely the one I renamed to 'Tools' earlier which was 'Book Tickets'.
# It might be outside the main UL.
for btn in soup.find_all(string=re.compile('Tools', re.I)):
    parent = btn.parent
    while parent:
        if 'nav' in str(parent.get('class', '')).lower() or 'btn' in str(parent.get('class', '')).lower():
            # If it's not the one we just created in the UL
            if parent.name == 'li' and parent.find_parent('ul', class_='nav_link_list'):
                # This is the one in the list, leave it if we want it there
                # Wait, the user said "remove that white tools button"
                # If there are TWO tools buttons, I should remove the one that looks like a big white button.
                pass
            
            if 'btn_main' in str(parent.get('class', '')).lower() or 'btn_secondary' in str(parent.get('class', '')).lower():
                # Let's check if it's the 'separate' one.
                # Usually it's in a div with 'nav_cta' or similar.
                if parent.find_parent('div', class_='nav_cta'):
                    print(f"Removing separate Tools button in nav_cta: {parent.name}")
                    parent.decompose()
                    break
        parent = parent.parent

# 3. Aggressive Green Box Removal
# Search for any element that might be the green box
# Based on the screenshot, it's at the top.
for div in soup.find_all('div'):
    style = div.get('style', '')
    # Check for green colors in inline styles
    if any(c in style for c in ['#0b3a22', 'rgb(11, 58, 34)', '#136038']):
        print(f"Removing green inline style from DIV: {div.get('class')}")
        div['style'] = style.replace('#0b3a22', '#000000').replace('rgb(11, 58, 34)', 'rgb(0, 0, 0)')

# Force global CSS at the end of head
if soup.head:
    style_tag = soup.new_tag('style')
    style_tag.string = """
        /* Kill the green box */
        .nav_component, .nav_bg, .nav_bar, .nav_menu, .navbar, .nav_wrap, [data-animate-theme-to="green"] {
            background-color: #000000 !important;
            background: #000000 !important;
        }
        /* Target the specific sticky/fixed container */
        .w-nav, .w-nav-overlay, .w-nav-brand {
            background-color: transparent !important;
        }
        /* Ensure the top section is black */
        section, header, .header, .top-nav {
            background-color: #000000 !important;
        }
        /* If there is a green div specifically for the box */
        div[style*="background-color: rgb(11, 58, 34)"], div[style*="background-color: #0b3a22"] {
            background-color: #000000 !important;
        }
    """
    soup.head.append(style_tag)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Nav fixed, dots replaced, and green box killed.")
