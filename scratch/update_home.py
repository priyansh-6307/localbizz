import os
import re

original_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\www.museumofmoney.com\index.html'
target_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'

with open(original_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Title & Meta
html = re.sub(r'<title>.*?</title>', '<title>Locbizz | Creative Marketing Agency</title>', html)
html = html.replace("Discover Dallas' only fun money museum at Dealey Plaza in Downtown Dallas! Perfect for all ages. Find out why everyone's talking about it.", "Locbizz is a specialized digital agency providing strategic ad campaigns, cinematic 3D ad production, and high-performance website development.")
html = html.replace('https://www.museumofmoney.com', 'https://locbizz.com')

# 2. Update Theme
html = html.replace('data-animate-theme-to="green"', 'data-animate-theme-to="black"')
html = html.replace('data-animate-theme-to="pink"', 'data-animate-theme-to="black"')
html = html.replace('data-animate-theme-to="blue"', 'data-animate-theme-to="black"')
html = html.replace('data-page-theme="green"', 'data-page-theme="black"')

# 3. Update Text Content
html = html.replace('Museum of Money', 'Locbizz')
html = html.replace('MoMoney', 'Locbizz')
html = html.replace('The Museum', 'Locbizz')
html = html.replace('Exhibits', 'Services')
html = html.replace('exhibits', 'Services')
html = html.replace('Find Us', 'About Us')
html = html.replace('/find-us', '/about')
html = html.replace('"@type": "Museum"', '"@type": "DigitalAgency"')

# 4. Update Hero Title & Text
original_hero_title_pattern = r'(class="home_hero_title.*?>)(.*?)(</h1>)'
html = re.sub(original_hero_title_pattern, r'\1CRAFTING DIGITAL <span class="u-zindex-2">EXPERIENCES</span><br/>\3', html)

original_hero_text_pattern = r'(class="home_hero_text.*?>)(.*?)(</p>)'
html = re.sub(original_hero_text_pattern, r'\1Transforming brands through creative storytelling, 3D animations, and high-performance digital marketing.\3', html)

# 5. Update Logo
logo_pattern = r'(<div class="nav_logo_link">).*?(</div>)'
html = re.sub(logo_pattern, r'\1<img src="/logo.webp" style="height: 50px; width: auto; object-fit: contain;" alt="Locbizz">\2', html, flags=re.DOTALL)

# 6. Update Videos & Socials
html = re.sub(r'data-player-src="https://vz-c736837e-fa3\.b-cdn\.net/.*?"', 'data-player-src="/uouoo.mp4"', html)
html = re.sub(r'src="https://vz-c736837e-fa3\.b-cdn\.net/.*?"', 'src="/uouoo.mp4"', html)
html = html.replace('https://www.instagram.com/momoneymuseum/', 'https://www.instagram.com/locbizz/')
html = html.replace('https://www.youtube.com/@LocbizzMuseum', 'https://www.youtube.com/@locbizz')
html = html.replace('https://www.tiktok.com/@momoneymuseum', 'https://www.tiktok.com/@locbizz')

# 7. Add Force Navbar Visible Style
force_style = """
    <style>
        .force-navbar-visible {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
        body, main {
            background-color: #000000 !important;
        }
        /* Ensure all text is visible on black background */
        .u-text-color-green, [data-animate-theme-to="black"] .u-text-color-green {
            color: #ffffff !important;
        }
    </style>
"""
html = html.replace('</head>', force_style + '</head>')

# 8. Final touches
html = html.replace('<main', '<main style="background-color: #000000 !important;"')

with open(target_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Final update for webflow-home.html completed.")
