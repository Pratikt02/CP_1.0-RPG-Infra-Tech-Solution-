import React from 'react';
import { Building2, HardHat, LayoutTemplate, ClipboardCheck, Factory, Wrench, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants/companyData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  Building2: Building2,
  HardHat: HardHat,
  LayoutTemplate: LayoutTemplate,
  ClipboardCheck: ClipboardCheck,
  Factory: Factory,
  Wrench: Wrench
};

export const ServicesSection = () => {
  const revealRef = useScrollReveal();

  const handleServiceSelect = (e, serviceTitle) => {
    e.preventDefault();
    const serviceSelectElement = document.getElementById('service-select');
    if (serviceSelectElement) {
      serviceSelectElement.value = serviceTitle;
    }
    const inquirySection = document.querySelector('#inquiry');
    if (inquirySection) {
      const offsetTop = inquirySection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-light-gray">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-subtitle">Our Core Expertise</div>
          <h2 className="section-title text-primary-navy">
            Comprehensive Construction & Infrastructure Solutions
          </h2>
          <p className="text-secondary-text text-base sm:text-lg">
            From ground-up civil construction to specialized industrial facilities and meticulous project management, we deliver precision and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
              >
                {/* Image Header with Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-construction-orange flex items-center justify-center text-white shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-construction-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href="#inquiry"
                      onClick={(e) => handleServiceSelect(e, service.title)}
                      className="inline-flex items-center gap-2 text-primary-navy font-semibold text-sm group-hover:text-construction-orange transition-colors"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
