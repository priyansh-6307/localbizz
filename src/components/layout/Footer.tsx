import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import AboutUsPage from '@/pages/About';
// --- 1. CTA SECTION COMPONENT ---
export const CTASection = () => (
    <section className="py-32 px-6 bg-gray-200 relative overflow-hidden">
        {/* Person with Laptop Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
            <div className="relative h-full">
                <div className="absolute bottom-0 right-20 w-80 h-96 bg-gray-300 rounded-t-3xl"></div>
                {/* Person silhouette */}
                <div className="absolute bottom-32 right-32 w-48 h-64">
                    <div className="relative">
                        {/* Person figure */}
                        <div className="absolute bottom-0 w-full">
                            <div className="bg-green-200 rounded-t-full w-20 h-32 mx-auto mb-4"></div>
                            <div className="bg-teal-600 w-16 h-8 mx-auto rounded"></div>
                            <div className="bg-gray-800 w-24 h-16 mx-auto mt-2 rounded"></div>
                        </div>
                    </div>
                </div>
                {/* Red accent block */}
                <div className="absolute bottom-20 right-40 w-24 h-16 bg-red-500"></div>
            </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto md:mx-0">
            <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase text-black">
                    READY TO BRING YOUR VISION TO LIFE?<br/>
                    CONTACT LOCBIZZ TODAY!
                </h2>
            </div>
            
            {/* 🔥 FIX: Changed the <button> wrapper to an <a> tag pointing to the contact route */}
            <a 
                href="/contact" // Set the destination to your contact page route
                className="group bg-transparent border border-black text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300 flex items-center space-x-3 mb-8 w-fit"
            >
                <span>Get in touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
                We'd love to hear from you! Whether you have questions, feedback, or a project idea, feel free to reach out. Our team is committed to responding within 24 hours to assist you promptly.
            </p>
        </div>
    </section>
);

// --- 2. FOOTER COMPONENT (No changes needed here) ---
export const Footer = () => (
    <footer className="bg-green-600 text-white relative overflow-hidden">
        <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    <div>
                        <p className="text-green-100 mb-8 text-base leading-relaxed">
                            A creative agency specializing in branding, web development, motion graphics, and art direction to bring ideas to life.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.instagram.com/locbizzz/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            
                            <a 
                                href="https://x.com/DiskCuser" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors"
                                aria-label="Follow us on Twitter"
                            >
                                {/* X (formerly Twitter) SVG Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-xs font-bold tracking-wider text-green-200 mb-6 uppercase">Quick Links</h4>
                        <div className="space-y-3">
                            <a href="/" className="block text-white hover:text-green-200 transition-colors duration-200">HOME</a>
                            <a href="/About" className="block text-white hover:text-green-200 transition-colors duration-200">ABOUT</a>
                            <a href="/services" className="block text-white hover:text-green-200 transition-colors duration-200">OUR SERVICES</a>
                            <a href="/contact" className="block text-white hover:text-green-200 transition-colors duration-200">CONTACT</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-xs font-bold tracking-wider text-green-200 mb-6 uppercase">Explore</h4>
                        <div className="space-y-3">
                            <a href="#" className="block text-white hover:text-green-200 transition-colors duration-200">OUR PHOTOGRAPHY</a>
                            <a href="#" className="block text-white hover:text-green-200 transition-colors duration-200">OUR VIDEOGRAPHY</a>
                            <a href="#" className="block text-white hover:text-green-200 transition-colors duration-200">WEBSITE DEVELOPMENT</a>
                            <a href="#" className="block text-white hover:text-green-200 transition-colors duration-200">3D ANIMATION AND CGI</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);