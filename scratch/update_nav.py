import re
from bs4 import BeautifulSoup

file_path = r"c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

# 1. Update Navbar Buttons
# Current links: Services (Exhibits), Contact, Blog, Tickets
# New links: Home, Work, Contact, Tools
# Let's find the nav links.
nav_links = soup.find_all("a", class_=lambda c: c and "nav_link" in c)

# Map of old text to new text and href
link_map = {
    "Services": {"text": "Work", "href": "/work"}, # or maybe home? The user said: Home, Work, Contact, Tools
    "Contact": {"text": "Contact", "href": "/contact"},
    "Blog": {"text": "Tools", "href": "/tools"},
    "Book Tickets": {"text": "Home", "href": "/"},
}

for link in soup.find_all("a", class_=lambda c: c and "nav" in c):
    text = link.get_text(strip=True).lower()
    if "services" in text or "exhibit" in text:
        # replace with Home
        link["href"] = "/"
        for t_span in link.find_all(string=re.compile(r"Services|Exhibits", re.I)):
            t_span.replace_with("Home")
    elif "contact" in text:
        link["href"] = "/contact"
    elif "blog" in text:
        # replace with Work
        link["href"] = "/work"
        for t_span in link.find_all(string=re.compile(r"Blog", re.I)):
            t_span.replace_with("Work")
    elif "tickets" in text or "book" in text:
        # replace with Tools
        link["href"] = "/tools"
        for t_span in link.find_all(string=re.compile(r"Book Tickets", re.I)):
            t_span.replace_with("Tools")

# 2. Fix the "fixed green color box" at the top.
# This is likely the navbar background. We can inject a CSS rule to force it to be transparent or black.
# We already have a style block at the end of head.
style_injection = """
        /* Force nav background to black or transparent and remove green */
        .nav_bg, .nav_background, .navbar, .nav_component, .nav_wrap {
            background-color: transparent !important;
            background: transparent !important;
        }
        /* If there's a specific green utility class used in the nav */
        .u-bg-color-green {
            background-color: transparent !important;
        }
        /* Override Webflow's default nav fill */
        .w-nav[data-animation] {
            background-color: transparent !important;
        }
"""
if "</style>" in html_content:
    # Just append it before the closing head tag to be safe, via soup
    head = soup.find("head")
    if head:
        new_style = soup.new_tag("style")
        new_style.string = style_injection
        head.append(new_style)

# Also check for inline styles on the nav component that might have a background color
nav_components = soup.find_all(class_=re.compile("nav", re.I))
for nav in nav_components:
    if "u-bg-color-green" in nav.get("class", []):
        nav["class"].remove("u-bg-color-green")
    if "data-animate-theme-to" in nav.attrs:
        nav["data-animate-theme-to"] = "black"

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Navbar updated and green box removed.")
