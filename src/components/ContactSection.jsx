import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../constants/companyData';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">

          {/* Col 1: About Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded bg-construction-orange flex items-center justify-center font-bold text-white text-lg">
                RPG
              </div>
              <span className="font-bold text-lg text-white">RPG Infra Tech</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Delivering high-caliber civil construction and infrastructure engineering across Mumbai and Maharashtra with an unwavering focus on safety and precision.
            </p>
            <div className="text-xs text-construction-orange font-semibold tracking-wider uppercase pt-2">
              CIN: {COMPANY_INFO.cin}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 border-l-2 border-construction-orange pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#home" className="hover:text-construction-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-construction-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-construction-orange transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-construction-orange transition-colors">Project Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-construction-orange transition-colors">Why Choose Us</a></li>
              <li><a href="#inquiry" className="hover:text-construction-orange transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 border-l-2 border-construction-orange pl-3">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-construction-orange transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 border-l-2 border-construction-orange pl-3">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-construction-orange shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-construction-orange shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-construction-orange shrink-0 mt-0.5" />
                <div>
                  {COMPANY_INFO.phones.map(p => (
                    <a key={p} href={`tel:${p}`} className="block hover:text-white transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p>Designed for Quality & Engineering Performance</p>
        </div>
      </div>
    </section>
  );
};
