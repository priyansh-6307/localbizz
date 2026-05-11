import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    {/* Left Side Navigation */}
                    <div className="space-y-4 mb-12 md:mb-0">
                        <Link to="/" className="block text-5xl md:text-7xl font-bold hover:text-zinc-400 transition-colors tracking-tighter uppercase">HOME</Link>
                        <Link to="/contact" className="block text-5xl md:text-7xl font-bold hover:text-zinc-400 transition-colors tracking-tighter uppercase">CONTACT</Link>
                        <Link to="/work" className="block text-5xl md:text-7xl font-bold hover:text-zinc-400 transition-colors tracking-tighter uppercase">WORK</Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-zinc-900">
                    <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
                        © LOCBIZZ 2026
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
