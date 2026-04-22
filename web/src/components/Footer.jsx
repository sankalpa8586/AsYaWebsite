import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/public/images/logo/AsYa_logo3.png" 
              alt="ASYA Solutions logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Professional patent illustration services delivering precise, USPTO-compliant technical drawings with rapid turnaround.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick links</span>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-primary transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@asyasolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} ASYA Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm hover:text-primary transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;