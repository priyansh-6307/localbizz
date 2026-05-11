from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Clean up the nav_link_list
nav_list = soup.find('ul', class_='nav_link_list')
if nav_list:
    # Remove the broken 'TOOLSTOOLS' link if it exists
    for li in nav_list.find_all('li'):
        if 'TOOLS' in li.get_text() or 'TOOLSTOOLS' in li.get_text():
            li.decompose()
    
    # Add a fresh, correctly formatted TOOLS link
    # I'll use the exact structure from the 'Work' link (which I'll copy)
    work_link = None
    for li in nav_list.find_all('li'):
        if 'Work' in li.get_text():
            work_link = li
            break
    
    if work_link:
        import copy
        tools_li = copy.deepcopy(work_link)
        # Update text and href
        for span in tools_li.find_all('span'):
            if span.string == 'Work':
                span.string = 'TOOLS'
            if span.get('data-text') == 'Work':
                span['data-text'] = 'TOOLS'
        
        for a in tools_li.find_all('a'):
            a['href'] = '/tools'
            if 'data-gtm' in a.attrs: a['data-gtm'] = 'tools'
        
        for btn in tools_li.find_all('button'):
            if btn.get_text() == 'Work':
                # Update SR text
                sr = btn.find(class_='u-sr-only')
                if sr: sr.string = 'TOOLS'
        
        nav_list.append(tools_li)
        print("Added properly formatted TOOLS link to the list.")

# 2. Remove the separate white button list (nav_btn_list)
for btn_list in soup.find_all('ul', class_='nav_btn_list'):
    print("Removing nav_btn_list (the white separate button)")
    btn_list.decompose()

# 3. Fix the 'TOOLSTOOLS' text duplication if it persists in any other way
# Actually, the 'class_' issue was the main culprit.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Navbar cleaned up and white button removed.")
