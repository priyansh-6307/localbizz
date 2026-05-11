from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

nav_list = soup.find('ul', class_='nav_link_list')
if nav_list:
    print("NAV LIST FOUND")
    # Print the parent of the nav list to see the container
    container = nav_list.find_parent('div', class_='nav_component')
    if container:
        print(f"NAV COMPONENT FOUND: Class={container.get('class')}")
        # Look for any child that might be a background
        bg = container.find('div', class_='nav_bg')
        if bg:
            print(f"NAV BG FOUND: Class={bg.get('class')}")
        
        # Look for the 'Book Tickets' button which is usually separate
        tickets = soup.find(string=lambda t: t and 'Book Tickets' in t)
        if tickets:
            print(f"BOOK TICKETS TEXT FOUND in {tickets.parent.name}")
            
    # Print a larger chunk of the nav component
    if container:
        print(str(container)[:2000])
else:
    print("NAV LIST NOT FOUND")
