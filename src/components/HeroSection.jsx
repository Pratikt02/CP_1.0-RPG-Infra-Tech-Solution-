import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyData';

export const HeroSection = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=2070&auto=format&fit=crop"
          alt="RPG Construction and Infrastructure"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Adjusted overlay for better image visibility while maintaining text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/80 via-primary-navy/40 to-primary-navy/20"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl" data-reveal>

          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 bg-construction-orange/20 border border-construction-orange/40 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-construction-orange" />
            <span className="text-construction-orange font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {COMPANY_INFO.name} | MUMBAI, INDIA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            Building Dreams. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-orange to-accent-gold">
              Engineering the Future.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Reliable construction and infrastructure solutions built around uncompromising quality, safety, and long-term value in Mumbai and across Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#inquiry"
              onClick={(e) => scrollTo(e, '#inquiry')}
              className="btn-primary flex items-center justify-center gap-3 text-base shadow-xl group"
            >
              <span>Get a Project Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, '#services')}
              className="btn-outline flex items-center justify-center gap-2 text-base backdrop-blur-sm shadow-lg"
            >
              <span>Explore Our Services</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/30">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-5 h-5 text-construction-orange shrink-0" />
              <span className="text-sm font-bold drop-shadow-sm">Quality-Focused Execution</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-5 h-5 text-construction-orange shrink-0" />
              <span className="text-sm font-bold drop-shadow-sm">Safety-Conscious Practices</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-5 h-5 text-construction-orange shrink-0" />
              <span className="text-sm font-bold drop-shadow-sm">Residential, Commercial & Industrial</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
