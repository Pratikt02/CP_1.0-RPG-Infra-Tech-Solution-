import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-primary-navy/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-construction-orange flex items-center justify-center text-white shadow-md font-bold text-xl group-hover:scale-105 transition-transform">
              RPG
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-tight">
                RPG Infra Tech
              </span>
              <span className="text-construction-orange text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                Solutions Pvt. Ltd.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white/90 hover:text-construction-orange font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-white/10 px-3 py-2 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 text-construction-orange" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <a
              href="#inquiry"
              onClick={(e) => scrollToSection(e, '#inquiry')}
              className="btn-primary text-sm py-2 px-5 shadow-lg flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-construction-orange"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-navy/98 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-6 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white text-lg font-medium py-2 border-b border-white/5 hover:text-construction-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center justify-center gap-2 text-white bg-white/10 py-3 rounded-md font-medium"
              >
                <Phone className="w-4 h-4 text-construction-orange" />
                <span>Call: {COMPANY_INFO.phones[0]}</span>
              </a>
              <a
                href="#inquiry"
                onClick={(e) => scrollToSection(e, '#inquiry')}
                className="btn-primary text-center py-3 flex items-center justify-center gap-2"
              >
                <span>Get a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
