import React from 'react';
import { Sparkles, MapPin, CalendarCheck, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/banquetData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#d8b46e]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#d8b46e]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#d8b46e]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#d8b46e]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden border-y border-[#c8a96e]/15">
      {/* Subtle background ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d8b46e]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#d8b46e]">
              Venue Highlights
            </span>
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-4 [text-wrap:balance]">
            Why Choose Aurabella
          </h2>
          <p className="text-[#a9a296] text-sm sm:text-base font-light [text-wrap:balance]">
            We provide an atmosphere where every detail aligns to make your event seamless and unforgettable.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#141419] p-8 rounded-sm border border-[#c8a96e]/20 hover:border-[#d8b46e]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#d8b46e]/5 flex flex-col justify-between"
            >
              <div>
                {/* Refined Icon Block */}
                <div className="w-12 h-12 rounded-sm bg-[#1b1b24] border border-[#c8a96e]/25 flex items-center justify-center mb-6 group-hover:border-[#d8b46e]/60 group-hover:bg-[#20202c] transition-colors">
                  {iconMap[item.iconName]}
                </div>

                <div className="text-xs text-[#a9a296]/60 font-mono mb-2">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[#fbf2dc] mb-3 group-hover:text-[#d8b46e] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#a9a296] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Hairline */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#78716c]">
                <span>Aurabella Banquet</span>
                <span className="text-[#d8b46e] font-serif italic">Gwalior</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
