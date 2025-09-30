import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CTASection, Footer } from '@/components/layout/Footer';

// Video Card Component - Optimized with proper video handling
const VideoCard = React.memo(({ src, width, height, fallback }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const playVideo = () => {
            video.play().catch(err => console.warn('Video autoplay failed:', err));
        };

        // Initial play attempt
        playVideo();

        // Replay on video end (backup for loop)
        video.addEventListener('ended', playVideo);

        return () => {
            video.removeEventListener('ended', playVideo);
        };
    }, []);

    return (
        <div className={`${width} ${height} rounded-2xl shadow-2xl overflow-hidden flex-shrink-0`}>
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
            >
                {fallback}
            </video>
        </div>
    );
});

const AdkoWebsite = () => {
    const videoCards = [
        { src: '/yoyo.mp4', width: 'w-48 md:w-56', height: 'h-64 md:h-72' },
        { src: '/uouoo.mp4', width: 'w-52 md:w-60', height: 'h-72 md:h-80' },
        { src: '/show.mp4', width: 'w-56 md:w-64', height: 'h-80 md:h-88' },
        { src: '/hnh.mp4', width: 'w-52 md:w-60', height: 'h-72 md:h-80' },
        { src: '/insta.mp4', width: 'w-48 md:w-56', height: 'h-64 md:h-72' }
    ];

    const services = [
        {
            id: 'videography',
            title: 'VIDEOGRAPHY',
            description: 'We create content that connects with your audience - built on strategy, guided by insight, and designed to deliver across platforms.',
            items: ['Commercial Video Production', 'Brand Storytelling', 'Social Media Content', 'Corporate Videos', 'Product Demonstrations']
        },
        {
            id: 'web-dev',
            title: 'WEBSITE DESIGN & DEVELOPMENT',
            description: 'We design user experiences that are intuitive, goal-driven, and built around real user behavior - turning complexity into clarity across web and product journeys.',
            items: ['Responsive Web Design', 'E-commerce Development', 'Custom Web Applications', 'UI/UX Design', 'Performance Optimization']
        },
        {
            id: 'cgi-animation',
            title: 'CGI AND ANIMATION',
            description: 'We create sharp, visual content through motion and 3D - built to explain, engage, and stand out across brand and product.',
            items: ['3D Product Visualization', 'Motion Graphics', 'Character Animation', 'Architectural Visualization', 'Visual Effects']
        },
        {
            id: 'photography',
            title: 'PHOTOGRAPHY',
            description: 'We create content that speaks to your audience and solves for their needs - rooted in strategy, shaped by insight, and built to perform across platforms.',
            items: ['Product Photography', 'Commercial Shoots', 'Brand Photography', 'Event Coverage', 'Portrait Sessions']
        }
    ];

    const logos = ['Royalinterior', 'Cafeophile', 'Green Onion'];

    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="min-h-screen  mb-10lg:flex-row mt-28">
                {/* Text Content */}
                <div className="flex-1 flex items-center justify-center px-6 py-20 lg:py-0">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6">
                            CREATIVITY.
                        </h1>
                        <p className="text-sm md:text-base font-medium tracking-wide uppercase text-gray-600">
                            WE LEAD WITH CONTENT. WE SCALE WITH DIGITAL.
                        </p>
                    </div>
                </div>

                {/* Video Cards */}
                <div className="flex-1 flex items-center justify-center px-6 py-12 mt-28 lg:py-0 overflow-hidden">
                    <div className="flex gap-4 items-end">
                        {videoCards.map((card, i) => (
                            <VideoCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-green-700 to-green-800 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                        WE GET THE<br/>JOB DONE
                    </h2>
                    
                    <p className="text-base md:text-lg leading-relaxed text-green-50 mb-12 max-w-4xl mx-auto">
                        We're a digital marketing team that specializes in providing end-to-end services to help businesses get the required task DONE. With a wide range of expertise, including content creation, brand development, performance marketing, website design and development, graphic design, photography, videography, and 3D animation, we offer a comprehensive suite of services to meet the diverse needs of it's clients under one roof.
                    </p>
                    
                    <a 
                        href="/services" 
                        className="inline-flex items-center justify-center w-36 h-36 md:w-40 md:h-40 bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
                    >
                        <span className="text-green-800 font-bold text-xs md:text-sm uppercase tracking-wider text-center leading-tight">
                            OUR<br/>BRAND<br/>SOLUTIONS
                        </span>
                    </a>
                </div>
            </section>

            {/* Logo Marquee */}
            <section className="py-12 md:py-16 bg-white border-y border-gray-200 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(4)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-12 md:gap-16 mr-12 md:mr-16">
                            {logos.map((logo, i) => (
                                <span key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                                    {logo}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 md:py-32 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16 md:mb-20 uppercase tracking-wider">
                        Our Expertise
                    </h2>
                    
                    <div className="max-w-5xl mx-auto space-y-px">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-zinc-800 text-white border-b border-white/10 transition-all duration-300 hover:bg-green-700 cursor-pointer"
                                onMouseEnter={() => setHoveredService(service.id)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div className="p-6 md:p-8 flex items-center justify-between">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-green-100 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <ArrowRight 
                                        className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
                                            hoveredService === service.id ? 'translate-x-2' : ''
                                        }`} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-16 md:mt-20">
                        <button className="bg-zinc-800 text-white px-8 md:px-12 py-3 md:py-4 uppercase text-xs md:text-sm tracking-wider hover:bg-green-700 transition-colors inline-flex items-center gap-3">
                            <span>CONTACT US</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <p className="text-xs md:text-sm text-gray-600 mt-4 uppercase tracking-wider">
                            Let's create something together
                        </p>
                    </div>
                </div>
            </section>

            {/* Hero Video Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.youtube.com/embed/MtuFBUN9SCY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=MtuFBUN9SCY&modestbranding=1&playsinline=1"
                        className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: '100vw',
                            height: '56.25vw',
                            minHeight: '100vh',
                            minWidth: '177.78vh',
                            pointerEvents: 'none'
                        }}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full px-6 py-20">
                    <div className="max-w-6xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-8 md:mb-12">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs font-bold tracking-wider uppercase">
                                WE GET THE JOB DONE
                            </span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-tight uppercase">
                            <span className="block">TRANSFORMING BRANDS WITH</span>
                            <span className="block text-gray-400">VISION AND CREATIVITY</span>
                        </h2>
                        
                        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                            A creative agency specializing in branding, web development, motion graphics, and art direction to bring ideas to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA and Footer */}
            <CTASection />
            <Footer />

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
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