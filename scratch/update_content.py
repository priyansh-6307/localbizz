
import re

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Background to Black
content = content.replace('data-page-theme="green"', 'data-page-theme="black" style="background-color: #000000 !important;"')
content = content.replace('data-animate-theme-to="green"', 'data-animate-theme-to="black"')
# Also force body background
content = content.replace('<body class="body">', '<body class="body" style="background-color: #000000 !important;">')

# 2. Logo Replacement
# Replace the SVG in both desktop and mobile nav
logo_html = '<img src="/logo.webp" style="height: 50px; width: auto; object-fit: contain;" alt="Locbizz">'
content = re.sub(r'<svg[^>]*class="logo_svg">.*?</svg>', logo_html, content, flags=re.DOTALL)

# 3. Hero Content
content = content.replace('WE PUT FUN <span class="u-zindex-2">IN&nbsp;FUND</span>', 'CRAFTING DIGITAL <span class="u-zindex-2">EXPERIENCES</span>')
content = content.replace('WE PUT FUN <span class="u-zindex-2">IN\xa0FUND</span>', 'CRAFTING DIGITAL <span class="u-zindex-2">EXPERIENCES</span>') # handle non-breaking space
content = content.replace('Crack the laser maze, snap unreal photos, and discover Dallas’s most playful money experience.', 'Transforming brands through creative storytelling, 3D animations, and high-performance digital marketing.')

# 4. Video Replacement
# Replace bunny video with our local video
content = content.replace('data-player-src="https://vz-c736837e-fa3.b-cdn.net/a416b5f4-8816-4104-af8d-67d4fa943a20/playlist.m3u8"', 'data-player-src="/uouoo.mp4"')
# Also update the video tag itself if it exists with a src
content = re.sub(r'<video[^>]*class="bunny-bg__video"[^>]*></video>', '<video preload="auto" width="1920" height="1080" playsinline muted loop autoplay class="bunny-bg__video" src="/uouoo.mp4"></video>', content)

# 5. Button Text
content = content.replace('Book Tickets', 'Start a Project')
content = content.replace('BOOK TICKETS', 'START A PROJECT')

# 6. Exhibits -> Services, Find Us -> Contact etc in nav
content = content.replace('exhibits', 'Services')
content = content.replace('Exhibits', 'Services')
content = content.replace('Find Us', 'Contact')
content = content.replace('Find us', 'Contact')

# 7. Page Title
content = content.replace('<title>MoMoney | Interactive Museum of Money at Dealey Plaza</title>', '<title>Locbizz | Creative Marketing Agency</title>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated webflow-home.html content for Locbizz.")
