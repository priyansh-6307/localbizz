import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

// Define navLinks
const navLinks = [
    { title: "HOME", href: "/" }, 
    { title: "OUR SERVICES", href: "/services" },
    { title: "ABOUT US", href: "/about" },
    { title: "OUR WORK", href: "/work" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Links for display, separated into central navigation and CTA
    const centralNavLinks = navLinks.filter(link => link.title !== "OUR WORK"); 
    const ctaLink = { title: "GET IN TOUCH", href: "/contact" };

    return (
        <div className="relative w-full"> 
            
            {/* Main Navigation Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    
                    {/* Parent container for main nav items */}
                    <div className="flex items-center justify-between h-20 relative"> 
                        
                        {/* Logo: AD.KO. (Always visible, left side) */}
                        <div className="flex items-center flex-shrink-0 relative z-50"> 
                            <a href="/" className="text-gray-900 font-bold text-6xl tracking-tight leading-none">
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded flex items-center justify-center text-2xl'>
                                    <img src="favicon.ico" alt="" />
                                </div>
                            </a>
                        </div>
                        
                        {/* Desktop Navigation Group (Visible from 'lg' breakpoint) */}
                        <div className="hidden lg:flex items-center w-full justify-end h-full">
                            
                            {/* Centered Link Group */}
                            <div className="flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
                                {centralNavLinks.map((link) => (
                                    <a 
                                        key={link.title}
                                        href={link.href} 
                                        className="font-bold text-lg xl:text-xl uppercase tracking-wider transition-colors text-gray-900 hover:text-yellow-600"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            
                            {/* CTA Button */}
                            <a 
                                href={ctaLink.href}
                                className="bg-yellow-400 border border-yellow-500 text-gray-900 font-bold 
                                            px-6 py-3 uppercase text-base tracking-wider transition-all rounded-lg 
                                            hover:bg-gray-900 hover:text-white flex items-center justify-center relative z-20"
                                style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                            >
                                {ctaLink.title}
                            </a>
                        </div>
                        
                        {/* Mobile Menu Button (Visible below 'lg' breakpoint, right side) */}
                        <div className="flex items-center space-x-4 relative z-50 lg:hidden">
                            <button 
                                className="text-gray-900"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Content - INSTANT APPEARANCE (no transition) */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white z-40 shadow-xl">
                    <div className="flex flex-col space-y-4 p-6 border-t border-gray-200">
                        {centralNavLinks.map((link) => (
                            <a 
                                key={link.title}
                                href={link.href}
                                className="text-xl text-gray-900 font-medium uppercase tracking-wider hover:text-yellow-600 py-2"
                                onClick={() => setIsMenuOpen(false)} 
                            >
                                {link.title}
                            </a>
                        ))}
                        
                        {/* GET IN TOUCH CTA (Mobile Menu) */}
                        <a 
                            href={ctaLink.href} 
                            className="bg-yellow-400 text-gray-900 px-6 py-3 uppercase text-base tracking-wider mt-4 hover:bg-gray-900 hover:text-white text-center rounded-md font-bold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {ctaLink.title}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;