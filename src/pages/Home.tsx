import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Facebook, Instagram, Camera, Users, Phone, Home, Info, Mail, Youtube, CheckCircle2 } from 'lucide-react';
import { CTASection, Footer } from '@/components/layout/Footer';

// --- Dedicated Video Card Component (Handles seamless video loop) ---
const VideoCard = ({ card, index }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Force play on mount to ensure seamless loop and immediate start
            videoElement.play().catch(error => {
                console.warn("Video playback failed on mount. Ensure the video is muted.", error);
            });
        }
    }, []);

    const cardClasses = `${card.bg || 'bg-gray-400'} ${card.width} ${card.height} rounded-2xl shadow-2xl relative overflow-hidden`;

    if (card.content === 'video' && card.youtubeId) {
        return (
            <div className={cardClasses} key={index}>
                <div className="w-full h-full relative">
                    <video
                        ref={videoRef}
                        src={card.youtubeId} // MUST be a correct path from your public folder (e.g., /yoyo.mp4)
                        className="w-full h-full object-cover rounded-2xl"
                        loop
                        autoPlay
                        muted      // CRITICAL: Enables reliable autoplay and hides OS controls
                        playsInline // Required for mobile devices
                        controls={false} // HIDES playback controls
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        );
    }
    
    // Fallback/Image logic for non-video cards
    return (
        <div className={cardClasses} key={index}>
            {card.fallbackContent}
        </div>
    );
};


const AdkoWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const videoCards = [
        // Increased size for visual impact and added 'bg' which was missing
        { bg: 'bg-teal-400', content: 'video', width: 'w-50', height: 'h-66', youtubeId: '/yoyo.mp4', fallbackContent: (<div className="p-4 h-full flex items-end"><div className="bg-white bg-opacity-90 text-black p-2 rounded text-xs"><div>Fear not,</div><div>I'm Gluten-free!</div></div></div>) },
        { bg: 'bg-gray-600', content: 'video', width: 'w-54', height: 'h-70', youtubeId: '/uouoo.mp4', fallbackContent: (<div className="p-4 h-full flex flex-col justify-between"><div className="text-xs uppercase tracking-wide text-white">BriTime</div><div className="text-center"><div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center"><div className="w-16 h-16 border-2 border-gray-800 rounded-full relative"><div className="absolute top-1 left-1/2 w-0.5 h-3 bg-gray-800 transform -translate-x-0.5"></div><div className="absolute top-1/2 right-1 w-3 h-0.5 bg-gray-800 transform -translate-y-0.5"></div></div></div></div></div>) },
        { bg: 'bg-green-400', content: 'video', width: 'w-58', height: 'h-74', youtubeId: '/show.mp4', fallbackContent: (<div className="flex items-center justify-center h-full text-white"><div className="text-center"><div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-lg font-bold text-white">50</span></div><p className="text-xs font-bold uppercase px-2">CELEBRATING<br/>STORES IN BENGALURU</p></div></div>) },
        { bg: 'bg-orange-400', content: 'video', width: 'w-54', height: 'h-70', youtubeId:"/hnh.mp4", fallbackContent: (<div className="h-full bg-gradient-to-t from-black/50 to-transparent"></div>) },
        { bg: 'bg-teal-300', content: 'video', width: 'w-50', height: 'h-66', youtubeId:"/insta.mp4", fallbackContent: (<div className="h-full bg-gradient-to-t from-green-900/50 to-transparent"></div>) }
    ];

    const HeroSection = () => (
        <section className="relative min-h-screen items-center justify-center bg-gray-200 overflow-hidden">
            {/* Left side - Text Content */}
            <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="text-center text-black max-w-4xl mx-auto px-6">
                    <div> 
                        <div className="mb-8">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mt-28 leading-none tracking-tighter">
                                CREATIVITY.
                            </h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-base md:text-lg font-medium tracking-wide uppercase text-gray-700">
                            WE LEAD WITH CONTENT. WE SCALE WITH DIGITAL.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - 3D Cards */}
            <div className="flex-1 relative h-screen flex items-center justify-center">
                <div className="static">
                    {/* 🔥 FIX: Changed to flex-col on mobile/medium, flex-row on large screens. 
                       Added space-y for vertical gap and adjusted the x-axis gap. */}
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        {videoCards.map((card, i) => (
                            <div key={i}>
                                <VideoCard card={card} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    const IntroSection = () => (
        <section className="py-32 px-6 bg-gradient-to-br from-green-700 to-green-800 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative">
                <div>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none tracking-tighter text-white">
                        WE GET THE<br/>JOB DONE
                    </h2>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div>
                        <p className="text-lg leading-relaxed font-light text-gray-200 mb-12">
                            We're a digital marketing team that specializes in providing end-to-end services to help businesses get the required task DONE. With a wide range of expertise, including content creation, brand development, performance marketing, website design and development, graphic design, photography, videography, and 3D animation, we offer a comprehensive suite of services to meet the diverse needs of it's clients under one roof.
                        </p>
                    </div>
                </div>
                
                {/* Circular Button FIX: Now links to /services */}
                <div className="flex justify-center">
                    <a 
                        href="/services" 
                        className="w-40 h-40 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        <span className="text-green-800 font-bold text-sm uppercase tracking-wider text-center leading-tight px-4">
                            OUR<br/>BRAND<br/>SOLUTIONS
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );

    const LogoMarquee = () => {
        const logos = [
            'Royalinterior', 'Cafeophile', 'Green Onion',
        ];

        return (
            <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-200">
                <div>
                    <div className="relative">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[...Array(4)].map((_, setIndex) => (
                                <div key={setIndex} className="flex items-center space-x-16 mr-16">
                                    {logos.map((logo, i) => (
                                        <div key={i} className="flex-shrink-0 group">
                                            <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                                                {logo}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ServicesSection = () => {
        // State for hover effect and accordion open/close logic
        const [hoveredService, setHoveredService] = useState(null); 
        const [openAccordion, setOpenAccordion] = useState(null); 
        const toggleAccordion = (index) => {setOpenAccordion(openAccordion === index ? null : index);};

        const services = [
            { id: 'videography', title: 'VIDEOGRAPHY', description: 'We create content that connects with your audience - built on strategy, guided by insight, and designed to deliver across platforms.', expandedContent: ['Commercial Video Production', 'Brand Storytelling', 'Social Media Content', 'Corporate Videos', 'Product Demonstrations'] },
            { id: 'web-dev', title: 'WEBSITE DESIGN & DEVELOPMENT', description: 'We design user experiences that are intuitive, goal-driven, and built around real user behavior - turning complexity into clarity across web and product journeys.', expandedContent: ['Responsive Web Design', 'E-commerce Development', 'Custom Web Applications', 'UI/UX Design', 'Performance Optimization'] },
            { id: 'cgi-animation', title: 'CGI AND ANIMATION', description: 'We create sharp, visual content through motion and 3D - built to explain, engage, and stand out across brand and product.', expandedContent: ['3D Product Visualization', 'Motion Graphics', 'Character Animation', 'Architectural Visualization', 'Visual Effects'] },
            { id: 'photography', title: 'PHOTOGRAPHY', description: 'We create content that speaks to your audience and solves for their needs - rooted in strategy, shaped by insight, and built to perform across platforms.', expandedContent: ['Product Photography', 'Commercial Shoots', 'Brand Photography', 'Event Coverage', 'Portrait Sessions'] }
        ];

        return (
            <section className="py-32 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 text-black uppercase tracking-wider">Our Expertise</h2>
                        </div>
                    </div>
                    
                    {/* Accordion Style Services with Hover Animation */}
                    <div className="pb-2 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div key={service.id}>
                                <div 
                                    className="relative border-b border-white bg-zinc-800 text-white overflow-hidden group cursor-pointer"
                                    onMouseEnter={() => setHoveredService(service.id)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    {/* Main Content */}
                                    <div className={`relative z-10 p-8 flex items-center justify-between transition-all duration-500 ${
                                        hoveredService === service.id ? 'bg-green-700' : 'hover:bg-green-700'
                                    }`}>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black uppercase tracking-wider mb-2">{service.title}</h3>
                                            <p className="text-green-100 text-sm leading-relaxed opacity-90">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="ml-8">
                                            <ArrowRight className={`w-6 h-6 transform transition-all duration-300 ${
                                                hoveredService === service.id ? 'translate-x-2 rotate-90' : 'group-hover:translate-x-2'
                                            }`} />
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {openAccordion === index && (
                                        <div className="absolute top-0 right-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black transform transition-all duration-500 ease-in-out overflow-hidden w-full translate-x-0">
                                            <div className="p-8 h-full flex items-center transition-all duration-500 delay-200 opacity-100">
                                                {/* Expanded content details */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div>
                        <div className="text-center mt-20">
                            <button className="bg-zinc-800 text-white px-12 py-4 uppercase text-sm tracking-wider hover:bg-green-700 transition-colors duration-300 flex items-center mx-auto space-x-3">
                                <span>CONTACT US</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <p className="text-sm text-gray-600 mt-4 font-light uppercase tracking-wider">Let's create something together</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const HeroVideoSection = () => (
        <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden min-h-screen flex items-center">
            {/* Video Background and Overlay (YouTube embed) */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.youtube.com/embed/MtuFBUN9SCY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=MtuFBUN9SCY&modestbranding=1&playsinline=1"
                    className="w-full h-full object-cover"
                    style={{
                        position: 'absolute', top: '50%', left: '50%', width: '100vw', height: '56.25vw', 
                        minHeight: '100vh', minWidth: '177.78vh', transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={false}
                ></iframe>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse z-20"></div>
            <div className="absolute bottom-20 left-10 w-3 h-3 bg-green-400 rounded-full animate-bounce z-20"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <div>
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                            <span className="text-xs font-bold tracking-wider uppercase">WE GET THE JOB DONE</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-3"></div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
                            <span className="block">TRANSFORMING BRANDS WITH</span>
                            <span className="block text-gray-400">VISION AND CREATIVITY</span>
                        </h2>
                    </div>
                </div>
                
                <div>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        A creative agency specializing in branding, web development, motion graphics, and art direction to bring ideas to life.
                    </p>
                </div>
            </div>
        </section>
    );

    const CTASectionWrapper = () => (
        <div>
            <CTASection />
        </div>
    );

    const FooterWrapper = () => (
        <div>
            <Footer />
        </div>
    );

    return (
        <div className="min-h-screen overflow-x-hidden">
            {/* ADD YOUR IMPORTED NAVBAR COMPONENT HERE */}

            <HeroSection />
            <IntroSection />
            <LogoMarquee />
            <ServicesSection />
            <HeroVideoSection />
            <CTASectionWrapper />
            <FooterWrapper />
            
            {/* GLOBAL CSS for Marquee and Scroll Behavior */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                
                /* Applying the same Marquee CSS to the Video Cards, but slower */
                .animate-card-marquee {
                    animation: marquee 60s linear infinite; 
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                /* Global scroll behavior rules for aesthetics */
                html {
                    scroll-behavior: smooth;
                }
                body::-webkit-scrollbar {
                    display: none;
                }
                body {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default AdkoWebsite;