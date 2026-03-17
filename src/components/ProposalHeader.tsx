import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'AMS System', href: '#ams-system' },
  { label: 'Web Design', href: '#web-design' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Pricing', href: '#pricing' },
];

const ProposalHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-background rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#overview" onClick={(e) => scrollTo(e, '#overview')} className="flex items-center">
          <img src={logo} alt="Seamless" className="h-10 w-auto" />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`font-medium text-sm transition-colors hover:text-primary ${
                  activeSection === id ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, '#pricing')}
            className="btn-cta !py-2.5 !px-5 text-sm"
          >
            View Pricing
          </a>
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
        <div className="md:hidden mt-2 bg-background rounded-2xl shadow-lg p-6">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`font-medium text-base transition-colors hover:text-primary ${
                    activeSection === id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, '#pricing')}
            className="btn-cta w-full !py-3 text-sm text-center block"
          >
            View Pricing
          </a>
        </div>
      )}
    </header>
  );
};

export default ProposalHeader;
