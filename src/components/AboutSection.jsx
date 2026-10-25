import React from 'react';
import { Building2, Award, Users, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-[#0c1220] overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1a2438] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="RPG Infrastructure Engineering"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Orange Accent Card */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 z-20 bg-primary-navy text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[260px] border-l-4 border-construction-orange">
              <div className="text-3xl sm:text-4xl font-extrabold text-construction-orange mb-1">Mumbai</div>
              <p className="text-sm text-white/90 font-medium">Headquartered in Vile Parle East, delivering excellence across Maharashtra.</p>
            </div>

            {/* Background pattern element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-construction-orange/10 rounded-full blur-2xl z-0"></div>
          </div>

          {/* Right Column - Text & Details */}
          <div className="lg:col-span-6">
            <div className="section-subtitle">About RPG Infra Tech</div>
            <h2 className="section-title text-primary-navy dark:text-white">
              Engineering Reliability, Building Trust Across Maharashtra.
            </h2>

            <p className="text-secondary-text dark:text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              {COMPANY_INFO.description}
            </p>

            <p className="text-secondary-text dark:text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Operating from our headquarters in Vile Parle East, Mumbai, we bring meticulous planning, robust engineering practices, and transparent client communication to every engagement, ensuring structures that endure.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-light-gray dark:bg-[#182338] p-4 rounded-xl">
                <Building2 className="w-6 h-6 text-construction-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-base">Multi-Sector Expertise</h4>
                  <p className="text-xs text-secondary-text dark:text-white/75 mt-1">Residential, commercial, industrial & civic projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-light-gray dark:bg-[#182338] p-4 rounded-xl">
                <Users className="w-6 h-6 text-construction-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary-navy dark:text-white text-base">Leadership</h4>
                  <p className="text-xs text-secondary-text dark:text-white/75 mt-1">Guided by experienced directors Mr. Ravindra Jadhav & Mr. Pravin Jadhav.</p>
                </div>
              </div>
            </div>

            {/* Directors info banner */}
            <div className="bg-primary-navy/5 dark:bg-white/5 border border-primary-navy/10 dark:border-white/15 p-5 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-construction-orange uppercase tracking-wider block mb-1">Corporate Identity</span>
                <span className="text-sm font-semibold text-primary-navy dark:text-white">CIN: {COMPANY_INFO.cin}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-secondary-text dark:text-white/70 block">Location</span>
                <span className="text-sm font-bold text-primary-navy dark:text-white flex items-center gap-1 justify-end">
                  <MapPin className="w-3.5 h-3.5 text-construction-orange" />
                  Vile Parle East, Mumbai
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
