import React, { useState, useRef, useEffect } from 'react';
// Imports from Lucide React
import { ArrowRight, CheckCircle2 } from "lucide-react"; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTASection, Footer as ImportedFooter } from '@/components/layout/Footer'; 

// Register ScrollTrigger plugin outside the component
gsap.registerPlugin(ScrollTrigger);

// --- 1. DATA STRUCTURES ---

const footerData = {
    info: [
        { title: "INFO" }, 
        { title: "HOME", href: "/home" },
        { title: "ABOUT", href: "/about" },
        { title: "CLIENT SIDE", href: "/clients" },
        { title: "CONTACT", href: "/contact" },
    ],
    explore: [
        { title: "EXPLORE" }, 
        { title: "OUR PHOTOGRAPHY", href: "/photo" },
        { title: "OUR VIDEOGRAPHY", href: "/video" },
        { title: "SAMPLING OR DISPLAY", href: "/sampling" },
        { title: "2D ANIMATION AND VDO", href: "/animation" },
    ]
};

const comprehensiveSolutions = [
    "Brand Activations", "360° Digital Marketing", "Content Creation", 
    "3D Animation and CGI", "Performance Marketing", "Website Design and Development", 
    "Consulting", "Designing and Branding", "Social Media", "Hero Campaigns"
];

const accordionServices = [
    { 
        title: "Content Creation", 
        description: "We transform ideas into compelling narratives across all platforms. Our process includes strategic planning, scriptwriting, professional shooting, and post-production editing to deliver engaging copy, stunning photography, and high-impact video content tailored for your audience."
    },
    { 
        title: "360° Digital Marketing", 
        description: "Dive into a complete digital strategy that covers every customer touchpoint. We integrate SEO, paid advertising, content marketing, and email campaigns to ensure seamless brand messaging and maximize conversion rates across the entire digital ecosystem."
    },
    { 
        title: "3D Animation and CGI", 
        description: "Bring your products and concepts to life with stunning, photorealistic 3D rendering and computer-generated imagery. Ideal for complex product visualization, architectural walkthroughs, and attention-grabbing motion graphics that captivate and inform your viewers."
    },
    { 
        title: "Hero Campaign Ideation + Execution", 
        description: "Develop and launch impactful hero campaigns designed to dominate the market and achieve viral awareness. We handle everything from concept development and media planning to full execution and analytics reporting to ensure maximum reach and resonance."
    },
    { 
        title: "Performance Marketing", 
        description: "Maximize your Return on Investment (ROI) with data-driven paid campaigns. We focus on rigorous testing, audience segmentation, and continuous optimization across platforms like Google Ads and social media to ensure every dollar spent drives measurable revenue and growth."
    },
    { 
        title: "Website Design and Development", 
        description: "Create fast, engaging, and high-performing websites built for conversions. Our service includes custom UI/UX design, mobile responsiveness, seamless e-commerce integration, and robust back-end development to provide a superior user experience."
    },
    { 
        title: "Social Media Strategy", 
        description: "Craft tailored social media strategies focused on building community, increasing organic reach, and driving measurable sales. We manage content calendars, community engagement, and platform-specific campaigns to turn followers into loyal customers."
    },
    { 
        title: "Brand Consulting", 
        description: "Receive expert guidance on brand positioning, market identity, and messaging architecture. We work with your leadership team to define your core values, competitive advantage, and long-term brand roadmap, ensuring consistent and impactful communication."
    },
];


// --- MAIN OurServicesPage COMPONENT ---
export default function OurServicesPage() {
    // 🔥 FIX: Initialize openAccordion to null so the accordion starts closed.
    const [openAccordion, setOpenAccordion] = useState(null); 
    const toggleAccordion = (index) => {setOpenAccordion(openAccordion === index ? null : index);};

    // --- GSAP REFERENCES ---
    const collageSectionRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            gsap.set(imagesRef.current, {
                yPercent: -100, 
                scale: 0.6,    
                opacity: 0     
            });
            
            gsap.set(imagesRef.current[4], {
                yPercent: 0,
                scale: 0.8266,
                opacity: 1
            });

            imagesRef.current.forEach((image, index) => {
                const isHiddenImage = index < 4;
                
                ScrollTrigger.create({
                    trigger: collageSectionRef.current, 
                    start: "top 80%", 
                    end: "bottom center", 
                    scrub: true, 
                    
                    animation: isHiddenImage ? 
                        gsap.to(image, {
                            yPercent: 0,    
                            scale: 1,      
                            opacity: 1,     
                            ease: "power1.inOut"
                        }) : 
                        gsap.to(image, {
                            scale: 0.9, 
                            opacity: 0.5,
                            ease: "power1.inOut"
                        }),
                });
            });

        }, collageSectionRef); 

        return () => ctx.revert(); 
    }, []);


    return (
        <div className="min-h-screen flex flex-col bg-adko-light-bg text-adko-dark-text font-adko-body">
            {/* PLACE YOUR IMPORTED NAVBAR COMPONENT HERE */}
            
            <main className="flex-grow">
                {/* -------------------------------------------------- */}
                {/* BRANDING SOLUTIONS SECTION WITH IMAGE COLLAGE */}
                {/* -------------------------------------------------- */}
                <section ref={collageSectionRef} className="bg-adko-light-bg py-20 px-8 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative min-h-[60vh]">
                    
                    {/* Left side: Text */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-10">
                        <h1 className="font-adko-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-wider leading-tight">
                            BRANDING SOLUTIONS
                        </h1>
                    </div>
                    
                    {/* Right side: Image Collage */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end relative h-[30rem] w-full max-w-lg lg:max-w-none">
                        <div className="home-header_imgs-wrap absolute inset-0 flex overflow-hidden">
                            
                            {/* Images 1 through 5 - Attach Ref to each image */}
                            {[...Array(5)].map((_, index) => (
                                <img 
                                    key={index}
                                    ref={el => imagesRef.current[index] = el}
                                    src={`https://cdn.prod.website-files.com/67baec8acda347f8a7b9e834/${
                                        index === 0 ? '68512970d5ad4a0e9af72cdf_1ASTE.avif' :
                                        index === 1 ? '68512ab4e6722649121c7c28_ADKO%20Print.avif' :
                                        index === 2 ? '68512b237818647a25aaa698_8271a701630e7745611322774febf93a.avif' :
                                        index === 3 ? '685288d5cbc516315e9b02bc_3733f912fde1737d840aa94bcfef7e10.avif' :
                                        '6852890ca0e39e4d973cfe6b_banner.avif'
                                    }`} 
                                    alt={`Collage Image ${index + 1}`} 
                                    className={`home-header_image absolute top-0 left-0 w-full h-full object-cover origin-center`}
                                />
                            ))}

                        </div>
                    </div>
                </section>
                {/* -------------------------------------------------- */}
                
                {/* Driven by Ideas Section (Image 2) */}
                <section className="bg-adko-dark-text text-white py-20 px-8 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="font-adko-heading text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-6">DRIVEN BY IDEAS, POWERED BY RESULTS</h2>
                        <p className="text-lg text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0">From creative storytelling to data-driven marketing, we offer a full spectrum of services designed to elevate your brand at every touchpoint. Whether it's building your online presence, crafting compelling content, or launching campaigns that resonate, we combine strategy and creativity to deliver real results</p>
                        
                        {/* 🔥 FIX: Changed <button> to <a> tag and added href="/contact" */}
                        <a 
                            href="/contact"
                            className="bg-adko-mustard hover:bg-adko-yellow-dark text-adko-dark-text font-adko-heading py-3 px-8 text-base uppercase font-bold transition-colors flex items-center mx-auto lg:mx-0 w-fit"
                            onClick={() => console.log('Start a project clicked')} 
                        >
                            <span className="mr-2">Start a project</span>
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        
                    </div>
                    
                    {/* RESTORED VIDEO ELEMENT */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg h-96 bg-gray-700 rounded-lg shadow-xl flex items-center justify-center text-sm font-semibold text-gray-300">
                            <video 
                                src="/uouoo.mp4" 
                                className="w-full h-full object-cover rounded-lg"
                                autoPlay        
                                loop
                                muted           
                                playsInline     
                                controls={false} 
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                {/* Comprehensive Digital & Creative Solutions (Image 2 - Yellow Buttons) */}
                <section className="bg-adko-light-bg py-20 px-8 sm:px-12 text-center">
                    <h2 className="font-adko-heading text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-16">COMPREHENSIVE DIGITAL & CREATIVE SOLUTIONS</h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {comprehensiveSolutions.map((solution, index) => (<button key={index} onClick={() => console.log(`${solution} clicked`)} className="bg-adko-mustard hover:bg-adko-yellow-dark text-adko-dark-text font-adko-heading text-sm font-bold uppercase py-4 px-3 rounded-md shadow-md transition-colors duration-200 flex items-center justify-center text-center"><CheckCircle2 className="h-4 w-4 mr-2" />{solution}</button>))}
                    </div>
                </section>

                {/* Services Accordion Section (Image 3) */}
                <section className="bg-adko-light-bg py-20 px-8 sm:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-adko-heading text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-12 text-center">SERVICES</h2>
                        <div className="border-t border-b border-gray-300">
                            {accordionServices.map((service, index) => (
                                <div key={index} className="border-b border-gray-300 last:border-b-0">
                                    <button 
                                        onClick={() => toggleAccordion(index)} 
                                        className="flex justify-between items-center w-full py-6 px-4 text-left font-adko-heading text-xl sm:text-2xl uppercase transition-colors duration-300 hover:bg-gray-100"
                                    >
                                        {service.title}
                                        {openAccordion === index ? (<span className="text-3xl font-light">-</span>) : (<span className="text-3xl font-light">+</span>)}
                                    </button>
                                    {openAccordion === index && (
                                        <div className="bg-blue-200 bg-opacity-70 text-adko-dark-text p-4 sm:p-6 transition-all duration-500 ease-in-out">
                                            <p className="text-base sm:text-lg leading-relaxed">{service.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            
            {/* FOOTER COMPONENTS */}
            <CTASection/>
            <ImportedFooter/> 
        </div>
    );
}