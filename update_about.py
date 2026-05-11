import sys

with open('src/pages/Home.tsx', 'r', encoding='utf-8') as f:
    home_content = f.read()

start_idx = home_content.find('<section data-animate-theme-to="green" className="marquee_cta_wrap">')
end_idx = home_content.find('</footer>', start_idx) + len('</footer>')
footer_jsx = home_content[start_idx:end_idx]

with open('src/pages/About.tsx', 'r', encoding='utf-8') as f:
    about_content = f.read()

# remove CTA and Footer
about_content = about_content.replace('<CTASection/>', '')
about_content = about_content.replace('<Footer/>', footer_jsx)
about_content = about_content.replace('import { CTASection,Footer } from \'@/components/layout/Footer\';', '')

# Update colors
about_content = about_content.replace('bg-adko-light-bg', 'bg-zinc-950')
about_content = about_content.replace('text-adko-dark-text', 'text-white')
about_content = about_content.replace('text-gray-700', 'text-zinc-300')
about_content = about_content.replace("IMAGE_BG_COLOR = 'white'", "IMAGE_BG_COLOR = '#09090b'")

# Remove the section 'ready to bring your vision to life'. 
# Wait, let's see if there's any section with text "ready to bring your vision to life" in About.tsx.
if 'ready to bring your vision to life' in about_content.lower():
    print("Found 'ready to bring your vision to life' section")
else:
    print("Did NOT find 'ready to bring your vision to life' section, maybe it was in CTASection")

# add animations imports and useEffect
if 'useEffect' not in about_content:
    about_content = about_content.replace("import React from 'react';", "import React, { useEffect } from 'react';")

use_effect_code = '''
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.prod.website-files.com/69a29e99440f456aa434d176/js/plutus-10493841xsiw9238jnfoi193hnadkja8.webflow.b296b0fca.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).initMuseumAnimations) {
        (window as any).initMuseumAnimations();
      }
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }, 1000);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
'''

if 'useEffect(() => {' not in about_content:
    about_content = about_content.replace('const groupedTeam = groupByLocation(teamData);\n\n    return (', 'const groupedTeam = groupByLocation(teamData);\n' + use_effect_code + '\n    return (')

# wrapper classes
about_content = about_content.replace('<div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans">', '<div data-scrolling-started="true" data-scrolling-direction="up" data-barba="wrapper" className="museum-body min-h-screen flex flex-col bg-zinc-950 text-white font-sans">')

# adding data attributes for animations on headings
about_content = about_content.replace('className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-6"', 'data-word-reveal="true" data-prevent-flicker="true" className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-6"')
about_content = about_content.replace('className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-16 text-left max-w-7xl mx-auto"', 'data-word-reveal="true" data-prevent-flicker="true" className="font-adko-heading text-4xl sm:text-5xl font-extrabold tracking-wider mb-16 text-left max-w-7xl mx-auto"')

# Fix potential issue with class name conflicts since we removed the original CTASection
with open('src/pages/About.tsx', 'w', encoding='utf-8') as f:
    f.write(about_content)
print("Updated About.tsx")
