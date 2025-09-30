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
        // The main container is no longer sticky
        <div className="relative w-full"> 
            
            {/* 🔥 NEW FIX: This separate Gold/CTA element is likely what you want hidden on mobile.
               I will wrap this logic in a conditional rendering block.
               
               ***IF THIS GOLD BAR IS DEFINED IN LAYOUT.TSX, YOU NEED TO HIDE IT THERE.
               Assuming it's meant to be managed by the Navbar for now:
            */}
            
            {/* Main Navigation Bar */}
            <nav className="bg-adko-light-bg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    
                    {/* Parent container for main nav items */}
                    <div className="flex items-center justify-between h-20 relative"> 
                        
                        {/* Logo: AD.KO. (Always visible, left side) */}
                        <div className="flex items-center flex-shrink-0 relative z-50"> 
                            <a href="/" className="logo text-adko-dark-text font-adko-heading text-6xl tracking-tight leading-none">
                                <img className='w-16 h-16 md:w-20 md:h-20' src="favicon.ico" alt="ADKO Logo" />
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
                                        className="font-adko-heading text-lg xl:text-xl uppercase tracking-wider transition-colors text-adko-dark-text hover:text-adko-mustard"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            
                            {/* GET IN TOUCH CTA (Desktop - Right side, visible from lg) */}
                            <a 
                                href={ctaLink.href}
                                className="bg-adko-button-bg border border-adko-button-border text-adko-dark-text font-adko-heading 
                                            px-6 py-3 uppercase text-base tracking-wider transition-all rounded-lg 
                                            hover:bg-adko-black hover:text-white flex items-center justify-center relative z-20"
                                style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                            >
                                {ctaLink.title}
                            </a>
                        </div>
                        
                        {/* Mobile Menu Button (Visible below 'lg' breakpoint, right side) */}
                        <div className="flex items-center space-x-4 relative z-50 lg:hidden">
                            
                            {/* Removed the overlapping mobile CTA entirely, 
                                as it belongs inside the dropdown or not at all on this primary bar. */}
                            
                            <button 
                                className="text-adko-dark-text"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Content (Appears under header) */}
            <div 
                className={`lg:hidden absolute top-20 left-0 w-full bg-adko-light-bg z-40 transition-transform duration-300 ease-in-out shadow-xl ${
                    isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
            >
                <div className="flex flex-col space-y-4 p-6 border-t border-gray-200">
                    {centralNavLinks.map((link) => (
                        <a 
                            key={link.title}
                            href={link.href}
                            className="text-xl text-adko-dark-text font-medium uppercase tracking-wider hover:text-adko-mustard py-2"
                            onClick={() => setIsMenuOpen(false)} 
                        >
                            {link.title}
                        </a>
                    ))}
                    
                    {/* GET IN TOUCH CTA (Mobile Menu - Should be visible inside the dropdown) */}
                    <a 
                        href={ctaLink.href} 
                        className="bg-adko-mustard text-adko-dark-text px-6 py-3 uppercase text-base tracking-wider mt-4 hover:bg-adko-dark-text hover:text-white text-center rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {ctaLink.title}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;