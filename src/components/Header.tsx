import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Pricing', href: '/pricing' },
    { label: "FAQ's", href: '/faq' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-background rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Seamless" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-body text-sm transition-colors hover:text-primary ${
                location.pathname === item.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/request-demo"
            className="px-5 py-2.5 rounded-full text-sm font-body border border-foreground text-foreground bg-transparent transition-all hover:bg-foreground hover:text-background"
          >
            Request a Demo
          </Link>
          <Link to="/contact" className="btn-cta !py-2.5 !px-5 text-sm">
            Contact Us
          </Link>
        </div>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-background rounded-2xl shadow-lg p-6 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-body text-base transition-colors hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link 
              to="/request-demo"
              className="w-full px-5 py-3 rounded-full text-sm font-body border border-foreground text-foreground bg-transparent transition-all hover:bg-foreground hover:text-background text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Demo
            </Link>
            <Link 
              to="/contact" 
              className="btn-cta w-full !py-3 text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
