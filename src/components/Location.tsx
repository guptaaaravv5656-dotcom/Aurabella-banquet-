import React from 'react';
import { MapPin, Navigation, Clock, Building2, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/banquetData';

export const Location: React.FC = () => {
  // Use official address encoding for Google Maps embed and directions
  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden border-t border-[#c8a96e]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#d8b46e]">
              Venue Address & Directions
            </span>
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-4 [text-wrap:balance]">
            Find Aurabella Banquet
          </h2>
          <p className="text-[#a9a296] text-sm sm:text-base font-light [text-wrap:balance]">
            Centrally situated in City Center, Gwalior with seamless connectivity and landmark prominence.
          </p>
        </div>

        {/* 2-Column Split: Details Card & Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Detailed Location Card */}
          <div className="lg:col-span-5 bg-[#141419] p-8 sm:p-10 rounded-sm border border-[#c8a96e]/25 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-[#1b1b24] border border-[#c8a96e]/30 flex items-center justify-center text-[#d8b46e]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#fbf2dc]">Aurabella Banquet</h3>
                  <p className="text-xs text-[#d8b46e] tracking-wider uppercase">City Center, Gwalior</p>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="space-y-6 pt-4 border-t border-white/5">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a9a296] mb-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#d8b46e]" />
                    Full Address
                  </div>
                  <p className="text-sm sm:text-base text-[#fbf2dc] font-light leading-relaxed pl-5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a9a296] mb-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-[#d8b46e]" />
                    Key Landmark
                  </div>
                  <p className="text-sm text-[#d5cfc5] font-light pl-5">
                    Beside Gehna Jewellers, Millennium Tower
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a9a296] mb-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#d8b46e]" />
                    Opening Hours
                  </div>
                  <p className="text-sm text-[#d5cfc5] font-light pl-5">
                    Monday to Sunday: 11:00 AM – 8:00 PM
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a9a296] mb-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#d8b46e]" />
                    Direct Inquiries
                  </div>
                  <div className="pl-5 flex flex-wrap gap-4 pt-1">
                    <a
                      href={BUSINESS_INFO.phones[0].tel}
                      className="text-xs text-[#d8b46e] hover:underline"
                    >
                      +91 {BUSINESS_INFO.phones[0].display}
                    </a>
                    <a
                      href={BUSINESS_INFO.phones[1].tel}
                      className="text-xs text-[#d8b46e] hover:underline"
                    >
                      +91 {BUSINESS_INFO.phones[1].display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* "Get Directions" Primary Button */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all shadow-md shadow-[#d8b46e]/20"
              >
                <Navigation className="w-4 h-4 text-[#0c0c0e]" />
                Get Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Column 2: Google Maps Frame */}
          <div className="lg:col-span-7 bg-[#141419] rounded-sm overflow-hidden border border-[#c8a96e]/25 relative min-h-[360px] lg:min-h-full flex flex-col shadow-xl">
            {/* Top Bar Header for Map */}
            <div className="bg-[#181820] px-4 py-3 border-b border-[#c8a96e]/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d8b46e]" />
                <span className="text-xs text-[#e5dfd4] font-medium tracking-wide">
                  Gwalior, Madhya Pradesh (City Center)
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#d8b46e] hover:underline flex items-center gap-1"
              >
                Open in Full Map ↗
              </a>
            </div>

            {/* Interactive Embed */}
            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Aurabella Banquet Map Location"
                src={mapsEmbedUrl}
                className="w-full h-full min-h-[380px] border-0 filter contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
