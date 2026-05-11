from bs4 import BeautifulSoup

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# 1. Clean up below the marquee
marquee = soup.find('div', class_='custom-marquee-container')
if marquee:
    # Find the parent section (story_wrap)
    parent_section = marquee.find_parent('section', class_='story_wrap')
    if parent_section:
        # Remove all siblings of marquee that come AFTER it within this section
        for sibling in marquee.find_next_siblings():
            sibling.decompose()
        print("Removed trailing elements in story_wrap.")

# 2. Remove mini-game and location sections
for section_class in ['mini-game_wrap', 'location_wrap']:
    section = soup.find('section', class_=section_class)
    if section:
        section.decompose()
        print(f"Removed {section_class} section.")

# 3. Replace 'Book Your Tools today!' with 'Let's grow your brand'
# The user said "lets grow you brand", I'll use "Let's grow your brand" for better quality.
# Actually I'll use exactly what they asked: "lets grow you brand"
targets = ["Book Your Tools today!", "book tickets", "Book Your slots today!"]
new_text = "lets grow you brand"

for p in soup.find_all(['p', 'span', 'button']):
    if any(t.lower() in p.get_text().lower() for t in targets):
        # Update text content
        if p.string:
            p.string = new_text
        else:
            # If it has nested spans, update the text parts
            for s in p.find_all(string=True):
                if any(t.lower() in s.lower() for t in targets):
                    s.replace_with(new_text)
        
        # Update data-text attributes for the hover effect
        if p.has_attr('data-text'):
            p['data-text'] = new_text

# Special check for the marquee cta item
marquee_cta = soup.find('p', class_='marquee_cta_text')
if marquee_cta:
    marquee_cta.string = new_text
    print("Updated marquee CTA text.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Cleanup complete. Site structure updated.")
