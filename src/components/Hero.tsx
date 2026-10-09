import React from 'react';
import { ArrowDown, PhoneCall, Compass } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/banquetData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Banquet Hall Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/aurabella_venue_panoramic_1791557848838.jpg"
          alt="Aurabella Banquet Grand Venue Interior in Gwalior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
        />
        {/* Measured Luxury Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0e]/85 via-[#0c0c0e]/70 to-[#0c0c0e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,12,14,0.6)_100%)]" />
      </div>

      {/* Decorative Golden Hairline Frame */}
      <div className="absolute inset-x-6 inset-y-24 sm:inset-x-12 sm:inset-y-28 pointer-events-none border border-[#c8a96e]/15 rounded-sm hidden lg:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-14">
        {/* Tagline Kicker */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#e5c98d]">
            {BUSINESS_INFO.tagline}
          </span>
          <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#fbf2dc] leading-[1.12] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
          Where Beautiful Moments Become Lasting Memories
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#d5cfc5] max-w-2xl mx-auto font-light leading-relaxed mb-10 [text-wrap:balance]">
          Celebrate your special occasions in an elegant setting at the heart of Gwalior.
        </p>

        {/* Three CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Button 1: Explore Our Venue */}
          <button
            onClick={onExploreClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all duration-200 shadow-lg shadow-[#d8b46e]/20 hover:shadow-[#d8b46e]/35 active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <Compass className="w-4 h-4 text-[#0c0c0e]" />
            Explore Our Venue
          </button>

          {/* Button 2: Contact Us */}
          <button
            onClick={onContactClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-medium tracking-widest uppercase rounded-sm border border-[#c8a96e]/50 text-[#fbf2dc] hover:bg-[#c8a96e]/10 hover:border-[#d8b46e] transition-all duration-200 backdrop-blur-sm active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-[#d8b46e]" />
            Contact Us
          </button>

          {/* Button 3: WhatsApp Us with proper WhatsApp Logo */}
          <a
            href={BUSINESS_INFO.whatsapps[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-medium tracking-widest uppercase rounded-sm bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-200 backdrop-blur-sm active:scale-[0.98] whitespace-nowrap shrink-0 shadow-md shadow-[#25D366]/10"
          >
            <WhatsAppIcon className="w-4 h-4 text-current" />
            WhatsApp Us
          </a>
        </div>

        {/* Quiet Trust Bar */}
        <div className="pt-8 border-t border-[#c8a96e]/20 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#a9a296] tracking-wide">
          <span>Millennium Tower, City Center</span>
          <span aria-hidden="true" className="text-[#c8a96e]/50">·</span>
          <span>Beside Gehna Jewellers</span>
          <span aria-hidden="true" className="text-[#c8a96e]/50">·</span>
          <span>Gwalior, Madhya Pradesh</span>
          <span aria-hidden="true" className="text-[#c8a96e]/50">·</span>
          <span>11:00 AM – 8:00 PM Daily</span>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#a9a296]/70 hover:text-[#d8b46e] transition-colors cursor-pointer" onClick={onExploreClick}>
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#d8b46e]" />
      </div>
    </section>
  );
};
