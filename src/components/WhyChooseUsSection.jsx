import React from 'react';
import { ShieldCheck, HardHat, Clock, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants/companyData';

const iconMap = [
  ShieldCheck,
  HardHat,
  Clock,
  HeartHandshake
];

export const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-primary-navy relative overflow-hidden border-y border-transparent dark:border-white/10">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 L100,0 L100,100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-5" data-reveal>
            <div className="inline-block px-4 py-1.5 bg-construction-orange/20 border border-construction-orange/40 rounded-full mb-4">
              <span className="text-construction-orange font-bold text-xs uppercase tracking-widest">Our Principles</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Why RPG Infra Tech <br /> is the Right Partner <br /> for Your Project.
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              We understand that construction is more than just steel and concrete—it's an investment in the future. We align our processes with your business objectives to deliver value.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-construction-orange flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">ISO Standards</h4>
                  <p className="text-white/75 text-sm">Commitment to global quality benchmarks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Principles Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-reveal="group">
              {WHY_CHOOSE_US.map((item, index) => {
                const IconComponent = iconMap[index];
                return (
                  <div
                    key={item.title}
                    data-reveal-item
                    className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-construction-orange mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
