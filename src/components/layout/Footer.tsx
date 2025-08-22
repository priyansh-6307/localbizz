import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             
              <span className="text-xl font-bold">Locbizz</span>
            </div>
           
            <div className="flex space-x-4">
            
              <a href="https://x.com/DiskCuser" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/locbizzz/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/service/restaurant" className="text-primary-foreground/80 hover:text-secondary transition-colors">Restaurants</Link></li>
              <li><Link to="/service/architect" className="text-primary-foreground/80 hover:text-secondary transition-colors">Architecture</Link></li>
              <li><Link to="/service/retail" className="text-primary-foreground/80 hover:text-secondary transition-colors">Retail</Link></li>
              <li><Link to="/service/real" className="text-primary-foreground/80 hover:text-secondary transition-colors">Real Estate</Link></li>
              <li><Link to="/service/other" className="text-primary-foreground/80 hover:text-secondary transition-colors">Other</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">Greater Noida, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:diskcuser@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  diskcuser@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/918126605193" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 8126605193
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Locbizz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}