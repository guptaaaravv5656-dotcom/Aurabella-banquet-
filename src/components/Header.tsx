import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/banquetData';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#c8a96e]/20 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#home"
            className="text-2xl sm:text-3xl font-serif tracking-wider text-[#fbf2dc] hover:text-[#d8b46e] transition-colors whitespace-nowrap shrink-0"
          >
            AURABELLA BANQUET
          </a>

          {/* Zone 2: Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#d5cfc5] hover:text-[#fbf2dc] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d8b46e] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenEnquiry}
              type="button"
              className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all duration-200 shadow-md shadow-[#d8b46e]/20 hover:shadow-[#d8b46e]/35 whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 text-[#d8b46e] hover:text-[#fbf2dc] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#111115]/98 border-b border-[#c8a96e]/25 backdrop-blur-xl px-6 pt-4 pb-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-[#e5dfd4] hover:text-[#d8b46e] font-serif tracking-wider py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e]"
              >
                Enquire Now
              </button>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={BUSINESS_INFO.phones[0].tel}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm border border-[#c8a96e]/40 text-[#d8b46e] text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5" /> Call {BUSINESS_INFO.phones[0].display}
                </a>
                <a
                  href={BUSINESS_INFO.whatsapps[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
