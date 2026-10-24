import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants/companyData';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Industrial", "Infrastructure", "Interiors"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-subtitle">Portfolio & Gallery</div>
          <h2 className="section-title text-primary-navy">
            Excellence in Structural Execution
          </h2>
          <p className="text-secondary-text text-base sm:text-lg">
            Explore our architectural showcase highlighting residential, commercial, industrial, and infrastructure undertakings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-navy text-white shadow-md scale-105'
                  : 'bg-light-gray text-secondary-text hover:bg-gray-200 hover:text-primary-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-primary-navy h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Lighter gradient overlay for crisp image clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-construction-orange text-white text-xs font-semibold rounded-full mb-2 shadow">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-sm">{item.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm line-clamp-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl mb-4"
            />
            <div className="text-center text-white">
              <span className="text-construction-orange text-xs font-bold uppercase tracking-wider mb-1 block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-2xl font-bold mb-2">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-white/80 text-sm max-w-xl">{filteredItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
