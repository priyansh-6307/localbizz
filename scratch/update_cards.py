import os
from bs4 import BeautifulSoup

file_path = r"c:\Users\priya\OneDrive\Desktop\vibecoding\www.museumofmoney.com\localbizz\public\webflow-home.html"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

# 1. Replace "Dive into the vault of money magic" with "WHAT WE OFFER"
title_div = soup.find(string="Dive into the vault of money magic")
if title_div:
    title_div.replace_with("WHAT WE OFFER")
else:
    # It might be split or altered. Let's find by class or containing text
    titles = soup.find_all("div", class_="ft_Services_title")
    for t in titles:
        if "Dive into" in t.text or "vault" in t.text or "money magic" in t.text:
            t.string = "WHAT WE OFFER"

# Services list
services = [
    "strategic ad campaigns",
    "cinematic 3D ad production",
    "website development",
    "brand consultancy"
]

# There are two lists: desktop and mobile. Let's process both.
lists = soup.find_all("div", role="list", class_=lambda c: c and "ft_exhibit_list" in c)

for lst in lists:
    items = lst.find_all("div", role="listitem")
    
    # We only need 4 items, remove the rest
    for i, item in enumerate(items):
        if i >= len(services):
            item.decompose()
            continue
            
        service_name = services[i]
        
        # Make the card white and center text
        visual_div = item.find("div", class_=lambda c: c and "exhibit_card_visual" in c)
        if visual_div:
            # Remove u-theme-dark to prevent forced white text if any
            if "u-theme-dark" in visual_div["class"]:
                visual_div["class"].remove("u-theme-dark")
            
            visual_div["style"] = "background-color: white; color: black; display: flex; align-items: center; justify-content: center; text-align: center;"
            
            # Remove the image wrap
            img_wrap = visual_div.find("div", class_=lambda c: c and "g_visual_wrap" in c)
            if img_wrap:
                img_wrap.decompose()
                
            # Remove overlay
            overlay = visual_div.find("div", class_=lambda c: c and "exhibit_card_visual_overlay" in c)
            if overlay:
                overlay.decompose()
                
            # Update title
            title = visual_div.find("div", class_=lambda c: c and "exhibit_card_title" in c)
            if title:
                title.string = service_name
                title["style"] = "position: relative; z-index: 2; margin: 0; padding: 20px; font-weight: bold; text-transform: uppercase;"
                
        # Remove the extra text description at the bottom
        text_wrap = item.find("div", class_=lambda c: c and "exhibit_card_text_wrap" in c)
        if text_wrap:
            text_wrap.decompose()

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Modifications done successfully.")
