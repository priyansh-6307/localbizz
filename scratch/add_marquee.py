import re
from bs4 import BeautifulSoup

file_path = r"c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

# Find the h2 with class story_title containing 'Once upon a'
h2s = soup.find_all('h2', class_=lambda c: c and 'story_title' in c)
target_h2 = None
for h2 in h2s:
    if "Once upon a" in h2.get_text():
        target_h2 = h2
        break

if target_h2:
    # Change text to "OUR WORK"
    target_h2.clear()
    target_h2.append("OUR WORK")
    target_h2['style'] = target_h2.get('style', '') + " text-transform: uppercase; text-align: center;"
    
    # Get the wrapper
    wrapper = target_h2.find_parent('div', class_=lambda c: c and 'story_title_wrap' in c)
    if not wrapper:
        wrapper = target_h2

    # Add Marquee
    marquee_html = """
    <style>
    .custom-marquee-container {
        overflow: hidden;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-top: 60px;
        margin-bottom: 60px;
        background: transparent;
        padding: 20px 0;
    }
    .custom-marquee-track {
        display: flex;
        gap: 20px;
        width: max-content;
        animation: marquee-left-to-right 40s linear infinite;
    }
    @keyframes marquee-left-to-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
    }
    .custom-marquee-card {
        flex: 0 0 auto;
        width: 350px;
        height: 450px;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .custom-marquee-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    @media screen and (max-width: 768px) {
        .custom-marquee-card {
            width: 250px;
            height: 350px;
        }
    }
    </style>
    <div class="custom-marquee-container">
        <div class="custom-marquee-track">
    """
    
    images = [
        "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", 
        "6.webp", "7.webp", "8.webp", "9.jpg", "10.webp", 
        "11.webp", "12.webp", "13.webp"
    ]
    
    for _ in range(2):
        for img in images:
            marquee_html += f'<div class="custom-marquee-card"><img src="/new image/{img}" class="custom-marquee-img" /></div>\n'
            
    marquee_html += """
        </div>
    </div>
    """
    
    marquee_soup = BeautifulSoup(marquee_html, "html.parser")
    wrapper.insert_after(marquee_soup)
    print("Successfully updated text and added marquee.")
else:
    print("Failed to find target h2.")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))
