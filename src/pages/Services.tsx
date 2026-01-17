import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from "lucide-react"; 
import { CTASection, Footer as ImportedFooter } from '@/components/layout/Footer'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comprehensiveSolutions = [
     "Content Creation", 
    "3D Animation ",  "Website Design and Development", 
     "Designing and Branding", "Social Media"
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
        title: "3D Animation ", 
        description: "Bring your products and concepts to life with stunning, photorealistic 3D rendering and computer-generated imagery. Ideal for complex product visualization, architectural walkthroughs, and attention-grabbing motion graphics that captivate and inform your viewers."
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

export default function OurServicesPage() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null); 
    const collageSectionRef = useRef<HTMLElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        if (!collageSectionRef.current || imagesRef.current.length === 0) return;

        const images = imagesRef.current.filter(Boolean);

        const ctx = gsap.context(() => {
            // Initial setup
            images.forEach((img, i) => {
                const angle = (i / images.length) * Math.PI * 2;
                const radius = 250;
                gsap.set(img, {
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    rotation: angle * (180 / Math.PI) + 90,
                    scale: 0.7,
                    opacity: 0.5,
                    transformOrigin: 'center center',
                    zIndex: i === 0 ? 10 : 1
                });
            });

            // Rotation timeline
            gsap.timeline({
                scrollTrigger: {
                    trigger: collageSectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        images.forEach((img, i) => {
                            const baseAngle = (i / images.length) * Math.PI * 2;
                            const angle = baseAngle + (progress * Math.PI * 4);
                            const radius = 220 + Math.sin(progress * Math.PI * 2) * 30;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            const normalizedAngle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
                            const distanceFromFront = Math.abs(normalizedAngle - Math.PI);
                            const isFront = distanceFromFront < Math.PI / 3;

                            gsap.to(img, {
                                x,
                                y,
                                rotation: angle * (180 / Math.PI) + 90,
                                scale: isFront ? 1.1 : 0.7,
                                opacity: isFront ? 1 : 0.6,
                                zIndex: isFront ? 10 : 1,
                                duration: 0.3,
                                ease: 'power2.out'
                            });
                        });
                    }
                }
            });

            // Entrance animation
            gsap.from(containerRef.current, {
                scale: 0.5,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: collageSectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        }, collageSectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <main className="flex-grow">
                {/* BRANDING SOLUTIONS SECTION WITH CAROUSEL */}
                <section 
                    ref={collageSectionRef} 
                    className="bg-gray-50 py-32 px-8 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative min-h-screen"
                >
                    {/* Left side: Text */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-10">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-wider leading-tight uppercase">
                            BRANDING SOLUTIONS
                        </h1>
                    </div>
                    
                    {/* Right side: 3D Carousel */}
                    <div className="lg:w-1/2 flex justify-center items-center relative h-[600px] w-full">
                        <div 
                            ref={containerRef}
                            className="relative w-full h-full flex items-center justify-center"
                            style={{ perspective: '1000px' }}
                        >
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
                                    alt={`Brand ${index + 1}`} 
                                    className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl"
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Driven by Ideas Section */}
                <section className="bg-gray-900 text-white py-20 px-8 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-6 uppercase">
                            DRIVEN BY IDEAS, POWERED BY RESULTS
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            From creative storytelling to data-driven marketing, we offer a full spectrum of services designed to elevate your brand at every touchpoint.
                        </p>
                        
                        <a 
                            href="/contact"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 text-base uppercase transition-colors inline-flex items-center"
                        >
                            <span className="mr-2">Start a project</span>
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                    
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg h-96 bg-gray-700 rounded-lg shadow-xl overflow-hidden">
                            <video 
                                src="/uouoo.mp4" 
                                className="w-full h-full object-cover"
                                autoPlay        
                                loop
                                muted           
                                playsInline     
                            />
                        </div>
                    </div>
                </section>

                {/* Comprehensive Solutions */}
                <section className="bg-gray-50 py-20 px-8 sm:px-12 text-center">
                    <h2 className="text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-16 uppercase">
                        COMPREHENSIVE DIGITAL & CREATIVE SOLUTIONS
                    </h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {comprehensiveSolutions.map((solution, index) => (
                            <button 
                                key={index} 
                                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm uppercase py-4 px-3 rounded-md shadow-md transition-colors inline-flex items-center justify-center text-center"
                            >
                                <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                                {solution}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Services Accordion */}
                <section className="bg-gray-50 py-20 px-8 sm:px-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl sm:text-6xl font-black tracking-wider leading-tight mb-12 text-center uppercase">
                            SERVICES
                        </h2>
                        <div className="border-t border-b border-gray-300">
                            {accordionServices.map((service, index) => (
                                <div key={index} className="border-b border-gray-300 last:border-b-0">
                                    <button 
                                        onClick={() => toggleAccordion(index)} 
                                        className="flex justify-between items-center w-full py-6 px-4 text-left text-xl sm:text-2xl uppercase transition-colors duration-300 hover:bg-gray-100 font-bold"
                                    >
                                        {service.title}
                                        <span className="text-3xl font-light">
                                            {openAccordion === index ? '-' : '+'}
                                        </span>
                                    </button>
                                    {openAccordion === index && (
                                        <div className="bg-blue-100 text-gray-900 p-4 sm:p-6">
                                            <p className="text-base sm:text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            
            <CTASection />
            <ImportedFooter /> 
        </div>
    );
}
