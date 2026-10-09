import React from 'react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/banquetData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080a] border-t border-[#c8a96e]/20 text-[#a9a296] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="text-2xl sm:text-3xl font-serif text-[#fbf2dc] tracking-wider block mb-3 hover:text-[#d8b46e] transition-colors"
            >
              AURABELLA BANQUET
            </a>
            <p className="text-[#e5c98d] font-serif italic text-base mb-4">
              “{BUSINESS_INFO.tagline}”
            </p>
            <p className="text-xs text-[#8f887c] leading-relaxed max-w-sm font-light">
              A luxury hospitality and event venue located at City Center, Gwalior. Designed for weddings, engagements, anniversaries, and family celebrations that create lasting memories.
            </p>

            {/* Social & WhatsApp Direct Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#16161c] border border-[#c8a96e]/25 flex items-center justify-center text-[#d8b46e] hover:text-white hover:border-[#d8b46e] transition-all"
                aria-label="Aurabella Banquet Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsapps[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#16161c] border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all"
                aria-label="Aurabella Banquet WhatsApp Chat"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.phones[0].tel}
                className="w-9 h-9 rounded-sm bg-[#16161c] border border-[#c8a96e]/25 flex items-center justify-center text-[#d8b46e] hover:text-white hover:border-[#d8b46e] transition-all"
                aria-label="Call Aurabella Banquet"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#fbf2dc] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d8b46e] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d8b46e] transition-colors">
                  About Our Venue
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#d8b46e] transition-colors">
                  Celebration Categories
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d8b46e] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#d8b46e] transition-colors">
                  Find Venue
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d8b46e] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Location */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#fbf2dc] font-semibold mb-4">
              Location & Address
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d8b46e] shrink-0 mt-0.5" />
                <p className="text-[#d5cfc5] font-light">
                  {BUSINESS_INFO.address}
                </p>
              </div>
              <p className="text-[#8f887c] text-[11px] pl-6.5">
                Landmark: Beside Gehna Jewellers, Millennium Tower
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#d8b46e] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contacts & Timings */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#fbf2dc] font-semibold mb-4">
              Direct Contact & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d8b46e] shrink-0" />
                <span className="text-[#d5cfc5]">
                  <a href={BUSINESS_INFO.phones[0].tel} className="hover:text-[#d8b46e]">
                    +91 {BUSINESS_INFO.phones[0].display}
                  </a>{' '}
                  /{' '}
                  <a href={BUSINESS_INFO.phones[1].tel} className="hover:text-[#d8b46e]">
                    {BUSINESS_INFO.phones[1].display}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#f43f5e] shrink-0" />
                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d5cfc5] hover:text-[#d8b46e] truncate"
                >
                  {BUSINESS_INFO.instagram.handle}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-[#d8b46e] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#fbf2dc] font-medium">Monday to Sunday</p>
                  <p className="text-[#8f887c] text-[11px]">{BUSINESS_INFO.openingHours.timing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <p>© 2026 Aurabella Banquet. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>City Center, Gwalior (M.P.), India</span>
            <span aria-hidden="true">·</span>
            <span>Hospitality & Celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
