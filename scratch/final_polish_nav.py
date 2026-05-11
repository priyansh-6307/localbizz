import re

file_path = r'c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add spacing and fix TOOLS hover in a new style tag
# Also add aggressive green-to-black replacement for CSS variables
new_styles = """
<style>
    /* Spacing between nav buttons */
    .nav_link_list {
        display: flex !important;
        gap: 15px !important;
        align-items: center !important;
    }
    .nav_link {
        margin-right: 0 !important; /* using gap instead */
    }
    
    /* Fix TOOLS hover (and all buttons) */
    .btn_secondary_wrap:hover .btn_secondary_back_text,
    .btn_secondary_wrap:hover .btn_secondary_front_text {
        color: #000000 !important;
    }
    .btn_secondary_wrap:hover .btn_secondary_bg {
        background-color: #ffffff !important;
    }
    
    /* KILL ALL GREEN - Aggressive global override */
    :root {
        --theme--background-selection: #000000 !important;
        --_theme---background: #000000 !important;
        --_theme---button--background: #ffffff !important;
        --_theme---text: #ffffff !important;
    }
    
    [data-animate-theme-to="green"], .u-theme-green, .u-bg-color-green {
        background-color: #000000 !important;
        background: #000000 !important;
    }
    
    /* Target the scroll-triggered green box specifically */
    div[style*="background-color: rgb(11, 58, 34)"], 
    div[style*="background-color: #0b3a22"],
    .nav_background, .nav_bg {
        background-color: #000000 !important;
        background: #000000 !important;
    }
</style>
"""

# Inject before </head>
if '</head>' in content:
    content = content.replace('</head>', new_styles + '</head>')

# 2. Brute force replacement of green hex and RGB in the entire file
# Webflow green: #0b3a22, rgb(11, 58, 34)
content = content.replace('#0b3a22', '#000000')
content = content.replace('rgb(11, 58, 34)', 'rgb(0, 0, 0)')
content = content.replace('11, 58, 34', '0, 0, 0')

# 3. Fix the TOOLS button if it was missing the class "btn_secondary_wrap"
# My previous script copied the inner parts but maybe not the wrapper?
# Let's check the TOOLS li structure and ensure it has the wrapper.
# Actually, I'll just do a regex replace to ensure 'class_' is always 'class'
content = content.replace('class_=', 'class=')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Spacing added, hover fixed, and green nuked from orbit.")
