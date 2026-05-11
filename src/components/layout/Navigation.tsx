import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

// Define navLinks
const navLinks = [
    { title: "HOME", href: "/" }, 
    { title: "WORK", href: "/work" },
    { title: "CONTACT", href: "/contact" },
    { title: "TOOLS", href: "https://autocut.in" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Links for display
    const centralNavLinks = navLinks; 
    const ctaLink = { title: "GET IN TOUCH", href: "/contact" };

    return (
        <>
        <style dangerouslySetInnerHTML={{ __html: `
            .force-navbar-visible {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                pointer-events: auto !important;
                top: 0 !important;
            }
        ` }} />
        <div className="fixed left-0 w-full force-navbar-visible" style={{ zIndex: 2147483647 }}> 
            
            {/* Main Navigation Bar */}
            <div className="bg-transparent pt-6">
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="flex items-center justify-between h-16 relative"> 
                        
                        {/* Mobile view Logo & Hamburger */}
                        <div className="flex lg:hidden items-center justify-between w-full">
                            <a href="/" className="flex-shrink-0 relative z-50"> 
                                <div className='w-32 h-12 flex items-center justify-start'>
                                    <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain object-left" />
                                </div>
                            </a>
                            <button 
                                className="text-white relative z-50"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                        
                        {/* Desktop Navigation Group (Visible from 'lg' breakpoint) */}
                        <div className="hidden lg:flex items-center w-full justify-between h-full">
                            
                            {/* Left Link Group (Pill shape) */}
                            <div className="flex items-center space-x-2">
                                {centralNavLinks.map((link) => (
                                    <a 
                                        key={link.title}
                                        href={link.href} 
                                        className="bg-zinc-900 text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-colors border border-zinc-800"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            
                            {/* Logo in the Middle */}
                            <a href="/" className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                                <div className='w-48 h-16 flex items-center justify-center'>
                                    <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                            </a>

                            <div className="flex-1"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-24 left-0 w-full bg-black z-40 shadow-xl rounded-b-2xl border-b border-zinc-800">
                    <div className="flex flex-col space-y-4 p-6">
                        {centralNavLinks.map((link) => (
                            <a 
                                key={link.title}
                                href={link.href}
                                className="text-xl text-white font-medium uppercase tracking-wider hover:text-zinc-400 py-2"
                                onClick={() => setIsMenuOpen(false)} 
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Navbar;
