import React, { useEffect } from 'react';
import { Mail, Phone, Camera, Linkedin, ArrowRight, Youtube, Instagram } from 'lucide-react';

const IMAGE_BG_COLOR = '#09090b'

// --- 1. DATA STRUCTURES ---

const statsData = [
    { value: "05+", label: "Years of experience" },
    { value: "50+", label: "Team members" },
    { value: "50+", label: "Clients worldwide" },
];

const philosophyBlocks = [
    {
        title: "OUR PHILOSOPHY",
        description: "Our philosophy on creativity has one simple purpose: We believe great ideas come from a mix of creativity, insight, and relentless execution. Everything we create is driven by the goal to make meaningful impact—not just brands, but to change the way people think, feel, and act.",
        bgColor: '#27272a',
        textColor: 'text-white',
        className: 'border border-zinc-700'
    },
    {
        imageSrc: 'New Project (3).png',
        isImageCard: true
    },
    {
        title: "OUR EXPERTISE",
        description: "We specialize in turning ideas into powerful digital experiences. From strategic and content creation to web development, performance marketing, and immersive visuals, our expertise spans the full spectrum of modern marketing. We combine creative technology and results to deliver solutions that elevate brands and drive growth.",
        bgColor: '#3f3f46',
        textColor: 'text-white',
        className: 'text-zinc-100'
    }
];

const teamData = [
    {
        name: "Anurag Singh",
        location: "Locbizz",
        image: "da.jfif",
        role: "Founder",
        social: [
            { platform: "Instagram", url: "https://www.instagram.com/localbizz.in/" }
        ]
    },
    {
        name: "Yash Saini",
        role: "Graphic Designer",
        location: "Locbizz",
        image: "yash.jfif",
        social: [
            { platform: "Instagram", url: "https://www.instagram.com/yash__editzz_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
        ]
    },
    {
        name: "Anas Khan",
        role: "Head of Operations",
        location: "Locbizz",
        image: "anas.jfif",
        social: [
            { platform: "Instagram", url: "https://www.instagram.com/itzz_me_annu_786?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
        ]
    }
];

// --- 2. HELPER FUNCTIONS ---

const groupByLocation = (data: any[]) => {
    return data.reduce((acc, curr) => {
        if (!acc[curr.location]) acc[curr.location] = [];
        acc[curr.location].push(curr);
        return acc;
    }, {});
};

// --- 3. MAIN COMPONENT ---

export default function About() {
    const groupedTeam = groupByLocation(teamData);

    useEffect(() => {
        const WEBFLOW_SRC = "https://cdn.prod.website-files.com/69a29e99440f456aa434d176/js/plutus-10493841xsiw9238jnfoi193hnadkja8.webflow.b296b0fca.js";

        const initAnimations = () => {
            if (typeof window === "undefined") return;
            if ((window as any).initMuseumAnimations) {
                (window as any).initMuseumAnimations();
            }
            if ((window as any).Webflow) {
                try {
                    (window as any).Webflow.destroy();
                    (window as any).Webflow.ready();
                    const ix2 = (window as any).Webflow.require('ix2');
                    if (ix2) ix2.init();
                } catch (e) {
                    console.warn('Webflow reinit error:', e);
                }
            }
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            if ((window as any).lenis) {
                (window as any).lenis.start();
            }
        };

        // Check if Webflow is already loaded
        if ((window as any).Webflow) {
            setTimeout(() => initAnimations(), 100);
            return;
        }

        const script = document.createElement('script');
        script.src = WEBFLOW_SRC;
        script.async = true;
        script.onload = () => initAnimations();
        document.body.appendChild(script);

        return () => {};
    }, []);

    return (
        <>
        {/* Force navbar visible over Webflow bundle CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
            .force-navbar-visible {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                pointer-events: auto !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                z-index: 2147483647 !important;
            }
            /* Prevent Webflow/Lenis from creating a stacking context that breaks fixed positioning */
            .museum-body,
            .museum-body .global,
            .museum-body .page_code_wrap {
                transform: none !important;
                filter: none !important;
                perspective: none !important;
                contain: none !important;
                will-change: auto !important;
            }
        ` }} />
        <div data-scrolling-started="true" data-scrolling-direction="up" data-barba="wrapper" className="museum-body min-h-screen flex flex-col bg-zinc-950 text-white font-sans">

            {/* Dummy elements to prevent Webflow IX2 errors */}
            <div data-menu="" className="nav_component"></div>
            <div className="cart_sidebar" style={{ display: 'none' }}></div>
            <div className="notif_wrap" style={{ display: 'none' }}></div>

            <div>
                <div className="global">
                    <div className="page_code_wrap u-theme-dark">
                        <div className="page_code_custom w-embed">
                            <link href="https://cdn.odyn.dev/p/rmxw@1/bundle.css" rel="stylesheet" />
                        </div>
                    </div>
                </div>
            </div>

            <main data-page-theme="black" data-barba="container" className="flex-grow">

                {/* -------------------------------------- */}
                {/* 1. MEET ADKO & STATS SECTION           */}
                {/* -------------------------------------- */}
                <section className="py-24 px-4 sm:px-8 text-center">
                    <h2 data-word-reveal="true" data-prevent-flicker="true" className="font-adko-heading text-4xl sm:text-5xl font-normal tracking-wider mb-6">
                        MEET LOCBIZZ
                    </h2>
                    <p className="max-w-3xl mx-auto text-sm sm:text-base mb-16 leading-relaxed text-zinc-300">
                        At Locbizz, we're creators, strategists, and storytellers all rolled into one. We believe great ideas come from a mix of
                        creativity, insight, and relentless execution. From digital marketing and content creation to immersive 3D visuals and
                        full-scale campaigns, we deliver solutions that make brands stand out and connect with their audience.
                    </p>

                    {/* WE STRONGLY FOLLOW THE WORDS - Section Header */}
                    <h3 className="font-adko-heading text-3xl sm:text-4xl font-normal tracking-wider mb-8">
                        WE STRONGLY FOLLOW THE WORDS
                    </h3>

                    {/* Collaborative Color Blocks */}
                    <div className="max-w-4xl mx-auto flex flex-col items-stretch">
                        <div
                            style={{ backgroundColor: '#ffffff', clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)' }}
                            className="relative h-24 flex items-center justify-center -rotate-2 transform translate-y-2"
                        >
                            <p className="font-normal uppercase tracking-wider text-base sm:text-lg relative z-10" style={{color:'#18181b'}}>
                                COLLABORATION IS AT THE HEART OF EVERYTHING WE DO
                            </p>
                        </div>
                        <div
                            style={{ backgroundColor: '#ffffff', clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)' }}
                            className="relative h-24 flex items-center justify-center transform translate-y-[-10px] rotate-1"
                        >
                            <p className="font-normal uppercase tracking-wider text-base sm:text-lg relative z-10" style={{color:'#18181b'}}>
                                STRATEGY GUIDES OUR CREATIVE PROCESS
                            </p>
                        </div>
                        <div
                            style={{ backgroundColor: '#ffffff', clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)' }}
                            className="relative h-24 flex items-center justify-center transform translate-y-[-22px] rotate-[-1deg]"
                        >
                            <p className="font-normal uppercase tracking-wider text-base sm:text-lg relative z-10" style={{color:'#18181b'}}>
                                RESULTS ARE THE MEASURE OF OUR SUCCESS
                            </p>
                        </div>
                    </div>

                    {/* 2. OUR FOUNDATIONS SECTION */}
                    <div className="mt-32">
                        <h2 data-word-reveal="true" data-prevent-flicker="true" className="font-adko-heading text-4xl sm:text-5xl font-normal tracking-wider mb-16 text-left max-w-7xl mx-auto">
                            OUR FOUNDATIONS
                        </h2>

                        {/* Philosophy Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto items-stretch">
                            {philosophyBlocks.map((block, idx) => (
                                <div key={idx} className="relative aspect-square overflow-hidden group">
                                    {block.isImageCard ? (
                                        <div className="w-full h-full">
                                            <img
                                                src={block.imageSrc}
                                                alt="Adko expertise"
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        </div>
                                    ) : (
                                        <div
                                            style={{ backgroundColor: block.bgColor }}
                                            className={`w-full h-full p-10 flex flex-col justify-between ${block.className || ''}`}
                                        >
                                            <h3 className="font-adko-heading text-center text-white text-xl sm:text-2xl font-normal tracking-wider relative z-10 p-10">
                                                {block.title}
                                            </h3>
                                            <p className={`text-sm sm:text-base leading-relaxed ${block.textColor || 'text-zinc-300'}`}>
                                                {block.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. WHO'S BEHIND LOCBIZZ SECTION */}
                <section className="py-32 px-4 sm:px-8 border-t border-zinc-900 bg-zinc-950">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="font-adko-heading text-2xl sm:text-3xl font-normal tracking-wider mb-4">
                            WHO'S BEHIND LOCBIZZ?
                        </h2>
                        <div className="w-16 h-0.5 bg-white mx-auto mb-16"></div>

                        <div className="max-w-4xl mx-auto">
                            <div className="mb-20 overflow-hidden">
                                <img
                                    src="/whobehindlocbizz.webp"
                                    alt="Locbizz Office"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                                <p className="text-lg font-light text-zinc-300 leading-relaxed italic">
                                    At LocBizz, we believe every business has a story worth sharing. Our mission is to transform local visions into powerful digital realities.
                                </p>
                                <p className="text-lg font-light text-zinc-300 leading-relaxed italic">
                                    Welcome to Locbizz. Let's create something meaningful together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. LET'S GROW YOUR BRAND MARQUEE */}
                <section className="py-16 overflow-hidden border-t border-zinc-900">
                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes aboutMarqueeScroll {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                        .about-marquee-track {
                            display: flex;
                            animation: aboutMarqueeScroll 20s linear infinite;
                            width: fit-content;
                        }
                    ` }} />
                    <div className="about-marquee-track">
                        {[...Array(8)].map((_, i) => (
                            <span key={i} className="text-5xl sm:text-7xl font-bold tracking-tighter text-white uppercase whitespace-nowrap px-8">
                                LET'S GROW YOUR BRAND •
                            </span>
                        ))}
                    </div>
                </section>
            </main>

            {/* Custom CSS for the slanted blocks */}
            <style dangerouslySetInnerHTML={{ __html: `
                .clip-path-polygon-top-right { clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%); }
                .clip-path-polygon-bottom-right { clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%); }
                .clip-path-polygon-top-left { clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%); }
                .bg-adko-blue-grey { background-color: #E8E8E3; }
            ` }} />

            <footer className="footer_wrap u-theme-dark">
              <div data-wf--global-section-space--section-space="large" className="g_section_space w-variant-8cc18b30-4618-8767-0111-f6abfe45aaa3" />
              <div className="footer_contain u-container">
                <div className="footer_layout u-grid-above">
                  <div className="footer_link_main_wrap u-column-custom">
                    <ul data-footer-link-list role="list" className="footer_link_main_list">
                      <li className="footer_link_main">
                        <div className="footer_link_main_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 18 18" fill="none" className="g_svg"><path d="M15.8867 9.52849C16.5735 9.18188 16.5735 8.2013 15.8867 7.85465L3.70591 1.70624C2.88419 1.29146 2.01917 2.18569 2.46104 2.99317L5.57902 8.69163L2.46105 14.39C2.01918 15.1975 2.88415 16.0917 3.70589 15.6769L15.8867 9.52849Z" fill="currentColor" /></svg></div>
                        <div aria-hidden="true" className="footer_link_main_text u-text-style-h2">About Us</div>
                        <div className="g_clickable_wrap"><a href="/about" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">About Us</span></a><button type="button" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">About Us</span></button></div>
                      </li>
                      <li className="footer_link_main">
                        <div className="footer_link_main_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 18 18" fill="none" className="g_svg"><path d="M15.8867 9.52849C16.5735 9.18188 16.5735 8.2013 15.8867 7.85465L3.70591 1.70624C2.88419 1.29146 2.01917 2.18569 2.46104 2.99317L5.57902 8.69163L2.46105 14.39C2.01918 15.1975 2.88415 16.0917 3.70589 15.6769L15.8867 9.52849Z" fill="currentColor" /></svg></div>
                        <div aria-hidden="true" className="footer_link_main_text u-text-style-h2">Contact</div>
                        <div className="g_clickable_wrap"><a href="/contact" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Contact</span></a><button type="button" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Contact</span></button></div>
                      </li>
                      <li className="footer_link_main">
                        <div className="footer_link_main_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 18 18" fill="none" className="g_svg"><path d="M15.8867 9.52849C16.5735 9.18188 16.5735 8.2013 15.8867 7.85465L3.70591 1.70624C2.88419 1.29146 2.01917 2.18569 2.46104 2.99317L5.57902 8.69163L2.46105 14.39C2.01918 15.1975 2.88415 16.0917 3.70589 15.6769L15.8867 9.52849Z" fill="currentColor" /></svg></div>
                        <div aria-hidden="true" className="footer_link_main_text u-text-style-h2">Work</div>
                        <div className="g_clickable_wrap"><a href="/work" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Work</span></a><button type="button" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Work</span></button></div>
                      </li>
                    </ul>
                    <a aria-label="Locbizz Digital Agency" href="/" className="footer_credit u-text-style-h5 u-color-faded">© 2026 Locbizz</a>
                  </div>
                  <div className="newsletter_wrap u-column-custom">
                    <p className="newsletter_text u-text-style-large">Ready to grow your brand? Let's build something great together.</p>
                    <div style={{marginTop:'1.5rem'}}>
                      <a href="/contact" style={{display:'inline-flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',padding:'0.85rem 2rem',background:'var(--_theme---button--background,#fff)',color:'var(--_theme---button--text,#000)',borderRadius:'100px',fontWeight:600,fontSize:'1rem',transition:'transform 0.3s ease'}}
                        onMouseEnter={e => (e.currentTarget.style.transform='scale(1.04)')}
                        onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}>
                        Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.8867 9.52849C16.5735 9.18188 16.5735 8.2013 15.8867 7.85465L3.70591 1.70624C2.88419 1.29146 2.01917 2.18569 2.46104 2.99317L5.57902 8.69163L2.46105 14.39C2.01918 15.1975 2.88415 16.0917 3.70589 15.6769L15.8867 9.52849Z" fill="currentColor"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-wf--global-section-space--section-space="page-top" className="g_section_space w-variant-e359d2da-de19-6775-b122-3e06f925f39e" />
            </footer>
        </div>
        </>
    );
}