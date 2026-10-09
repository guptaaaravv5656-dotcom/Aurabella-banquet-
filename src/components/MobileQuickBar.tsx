import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/banquetData';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e0e12]/95 backdrop-blur-md border-t border-[#c8a96e]/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phones[0].tel}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xs bg-[#181820] border border-[#c8a96e]/25 text-[#fbf2dc] active:bg-[#c8a96e]/20 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#d8b46e] mb-0.5" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Call Venue</span>
        </a>

        {/* WhatsApp Button with proper WhatsApp Logo */}
        <a
          href={BUSINESS_INFO.whatsapps[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xs bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] active:bg-[#25D366]/30 transition-colors shadow-sm shadow-[#25D366]/10"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xs bg-[#181820] border border-[#c8a96e]/25 text-[#fbf2dc] active:bg-[#c8a96e]/20 transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#d8b46e] mb-0.5" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Directions</span>
        </a>
      </div>
    </aside>
  );
};
