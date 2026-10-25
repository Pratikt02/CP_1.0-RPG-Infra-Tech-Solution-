import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { InquirySection } from './components/InquirySection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppButton, ScrollToTopButton } from './components/FloatingWhatsAppButton';

export function App() {
  return (
    <div className="min-h-screen bg-warm-white text-primary-text font-body antialiased selection:bg-construction-orange selection:text-white dark:bg-[#070b14] dark:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsGallery />
        <WhyChooseUsSection />
        <InquirySection />
      </main>
      <ContactSection />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
