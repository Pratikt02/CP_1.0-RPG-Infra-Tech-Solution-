import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyData';

export const FloatingWhatsAppButton = () => {
  const whatsappNumber = COMPANY_INFO.whatsapp.replace(/\+/g, '');
  const message = encodeURIComponent("Hello RPG Infra Tech team, I would like to inquire about a construction project.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-semibold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
};

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 bg-primary-navy/80 hover:bg-primary-navy text-white p-3.5 rounded-full shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 border border-white/20"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
