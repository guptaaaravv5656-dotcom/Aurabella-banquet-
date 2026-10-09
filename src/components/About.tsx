import React from 'react';
import { MapPin, Clock, Award, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/banquetData';

interface AboutProps {
  onPlanEventClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onPlanEventClick }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0e0e12] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Image Showcase with Luxury Golden Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gold border offset */}
              <div className="absolute -inset-3 border border-[#c8a96e]/30 rounded-sm translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-sm bg-[#16161c] border border-[#c8a96e]/25 aspect-[4/3] shadow-2xl shadow-black/80">
                <img
                  src="/src/assets/images/aurabella_real_stage_1791557825927.jpg"
                  alt="Aurabella Banquet Grand Celebration Stage Setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#e5dfd4] flex items-center justify-between">
                  <span className="font-serif italic text-[#e5c98d]">Grand Celebration Stage</span>
                  <span className="text-[#a9a296]">Aurabella Banquet</span>
                </div>
              </div>

              {/* Location Badge Floating Card */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#16161c]/95 backdrop-blur-md border border-[#c8a96e]/40 p-4 rounded-sm shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#c8a96e]/15 text-[#d8b46e] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#fbf2dc] tracking-wide">Prime City Center</p>
                    <p className="text-[11px] text-[#a9a296] mt-0.5 leading-snug">
                      Millennium Tower, beside Gehna Jewellers, Gwalior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#d8b46e]">
                About Our Venue
              </span>
              <span className="h-[1px] w-12 bg-[#d8b46e]/40" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-6 [text-wrap:balance]">
              A Celebration Worth Remembering
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#d5cfc5] text-base sm:text-lg leading-relaxed mb-8 font-light">
              Aurabella Banquet is an elegant event venue located in City Center, Gwalior. Designed for special occasions and memorable gatherings, Aurabella offers a welcoming setting where family and friends can come together to celebrate life's beautiful moments.
            </p>

            {/* Key Venue Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-4 border-t border-[#c8a96e]/20">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-sm bg-[#1a1a22] border border-[#c8a96e]/30 text-[#d8b46e] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#fbf2dc]">Elegant Ambience</h3>
                  <p className="text-xs text-[#a9a296] mt-1 leading-relaxed">
                    Thoughtfully designed with refined lighting and sophisticated banquet interiors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-sm bg-[#1a1a22] border border-[#c8a96e]/30 text-[#d8b46e] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#fbf2dc]">Daily Availability</h3>
                  <p className="text-xs text-[#a9a296] mt-1 leading-relaxed">
                    Open Monday to Sunday, 11:00 AM to 8:00 PM for event consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onPlanEventClick}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all shadow-md shadow-[#d8b46e]/20"
              >
                Plan Your Event
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:+91${BUSINESS_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-wider uppercase text-[#d8b46e] hover:text-[#fbf2dc] transition-colors"
              >
                Call: {BUSINESS_INFO.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
