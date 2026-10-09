import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/banquetData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Interiors & Ambience' },
    { id: 'stage', label: 'Stage & Ceremonies' },
    { id: 'dining', label: 'Dining & Table Decor' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') return item.category === 'interior';
    if (activeFilter === 'stage') return item.category === 'stage' || item.category === 'celebration';
    if (activeFilter === 'dining') return item.category === 'dining';
    return true;
  });

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#d8b46e]">
              Visual Showcase
            </span>
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-4 [text-wrap:balance]">
            Photo Gallery
          </h2>
          <p className="text-[#a9a296] text-sm sm:text-base font-light [text-wrap:balance]">
            Immerse yourself in the grand aesthetics, banquet settings, and celebratory atmosphere of Aurabella Banquet.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setShowAll(false);
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wider rounded-sm transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-[#d8b46e] text-[#0c0c0e] shadow-sm shadow-[#d8b46e]/25'
                    : 'bg-[#16161c] text-[#a9a296] hover:text-[#fbf2dc] border border-[#c8a96e]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative bg-[#141419] rounded-sm overflow-hidden border border-[#c8a96e]/20 hover:border-[#d8b46e]/60 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#d8b46e]/10 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[#e5c98d] bg-black/60 px-2.5 py-1 rounded-xs border border-[#c8a96e]/30">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-[#c8a96e]/40 flex items-center justify-center text-[#d8b46e] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif text-[#fbf2dc] group-hover:text-[#d8b46e] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a9a296] line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Photos Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm border border-[#c8a96e]/40 text-[#fbf2dc] hover:bg-[#c8a96e]/15 hover:border-[#d8b46e] transition-all duration-200"
          >
            <Eye className="w-4 h-4 text-[#d8b46e]" />
            {showAll ? 'Show Fewer Photos' : 'View All Photos'}
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && displayedItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 p-2 text-[#d5cfc5] hover:text-white bg-black/50 border border-white/10 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#d8b46e] hover:text-white bg-black/60 border border-[#c8a96e]/30 rounded-full transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#d8b46e] hover:text-white bg-black/60 border border-[#c8a96e]/30 rounded-full transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <div className="relative overflow-hidden rounded-sm border border-[#c8a96e]/30 shadow-2xl">
              <img
                src={displayedItems[lightboxIndex].image}
                alt={displayedItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-sm"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#d8b46e]">
                {displayedItems[lightboxIndex].categoryLabel}
              </span>
              <h3 className="text-xl font-serif text-[#fbf2dc] mt-1">
                {displayedItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#a9a296] mt-1 font-light">
                {displayedItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
