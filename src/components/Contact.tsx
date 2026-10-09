import React, { useState } from 'react';
import { Phone, Instagram, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, EVENT_CATEGORIES } from '../data/banquetData';

interface ContactProps {
  prefilledEvent?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: prefilledEvent || 'Weddings',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }

    // Format a polite inquiry message for WhatsApp
    const textMsg = `Hello Aurabella Banquet! I would like to enquire about hosting an event.
Name: ${formData.name}
Phone: ${formData.phone}
Occasion: ${formData.eventType}
Preferred Date: ${formData.eventDate || 'To be decided'}
Estimated Guests: ${formData.guestCount || 'Not specified'}
Message: ${formData.message || 'Please contact me with more information.'}`;

    const encoded = encodeURIComponent(textMsg);
    // WhatsApp URL to first official number
    const waUrl = `https://wa.me/91${BUSINESS_INFO.whatsapps[0].raw}?text=${encoded}`;

    // Mark submitted and open WhatsApp window
    setIsSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#d8b46e]">
              Get in Touch
            </span>
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-4 [text-wrap:balance]">
            Let’s Plan Your Celebration
          </h2>
          <p className="text-[#a9a296] text-sm sm:text-base font-light [text-wrap:balance]">
            Have a special occasion coming up? Contact our team to discuss your event and enquiries.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-[#141419] p-6 sm:p-7 rounded-sm border border-[#c8a96e]/20 hover:border-[#d8b46e]/40 transition-colors shadow-lg">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#1b1b24] border border-[#c8a96e]/30 flex items-center justify-center text-[#d8b46e] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-[#fbf2dc]">Phone Enquiries</h3>
                  <p className="text-xs text-[#a9a296]">Call our front desk directly</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-sm bg-[#181820] border border-white/5">
                  <span className="text-sm font-medium text-[#fbf2dc]">+91 {BUSINESS_INFO.phones[0].display}</span>
                  <a
                    href={BUSINESS_INFO.phones[0].tel}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-xs bg-[#d8b46e] text-[#0c0c0e] hover:bg-[#e5c583] transition-colors whitespace-nowrap"
                  >
                    Call Now
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-sm bg-[#181820] border border-white/5">
                  <span className="text-sm font-medium text-[#fbf2dc]">+91 {BUSINESS_INFO.phones[1].display}</span>
                  <a
                    href={BUSINESS_INFO.phones[1].tel}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-xs bg-[#d8b46e] text-[#0c0c0e] hover:bg-[#e5c583] transition-colors whitespace-nowrap"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#141419] p-6 sm:p-7 rounded-sm border border-[#25D366]/30 hover:border-[#25D366]/60 transition-colors shadow-lg">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-[#fbf2dc]">WhatsApp Chat</h3>
                  <p className="text-xs text-[#a9a296]">Instant event discussion & details</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-sm bg-[#181820] border border-white/5">
                  <span className="text-sm font-medium text-[#fbf2dc]">+91 {BUSINESS_INFO.whatsapps[0].display}</span>
                  <a
                    href={BUSINESS_INFO.whatsapps[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-xs bg-[#25D366] text-black hover:bg-[#20bd5a] transition-colors whitespace-nowrap shadow-sm shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-black" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-sm bg-[#181820] border border-white/5">
                  <span className="text-sm font-medium text-[#fbf2dc]">+91 {BUSINESS_INFO.whatsapps[1].display}</span>
                  <a
                    href={BUSINESS_INFO.whatsapps[1].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-xs bg-[#25D366] text-black hover:bg-[#20bd5a] transition-colors whitespace-nowrap shadow-sm shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-black" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#141419] p-6 sm:p-7 rounded-sm border border-[#E1306C]/30 hover:border-[#E1306C]/60 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-[#E1306C]/15 border border-[#E1306C]/30 flex items-center justify-center text-[#f43f5e] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#fbf2dc]">Instagram</h3>
                    <p className="text-xs text-[#d5cfc5]">{BUSINESS_INFO.instagram.handle}</p>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xs bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Event Enquiry Form */}
          <div className="lg:col-span-7 bg-[#141419] p-8 sm:p-10 rounded-sm border border-[#c8a96e]/25 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#c8a96e]/15 mb-6">
              <div>
                <h3 className="text-2xl font-serif text-[#fbf2dc]">Send an Event Enquiry</h3>
                <p className="text-xs text-[#a9a296] mt-0.5 font-light">
                  Direct connection with Aurabella management
                </p>
              </div>
              <span className="text-xs text-[#d8b46e] uppercase tracking-widest font-mono">
                Prompt Response
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-[#d8b46e]/20 border border-[#d8b46e] rounded-full flex items-center justify-center mx-auto mb-4 text-[#d8b46e]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-[#fbf2dc] mb-2">Enquiry Initiated!</h4>
                <p className="text-sm text-[#d5cfc5] max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Thank you, <span className="text-[#d8b46e] font-medium">{formData.name}</span>. Your enquiry details have been forwarded to our WhatsApp desk. Our venue team will respond shortly to discuss your celebration.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#c8a96e]/40 text-[#fbf2dc] hover:bg-[#c8a96e]/10 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] placeholder-[#78716c] focus:outline-none focus:border-[#d8b46e] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] placeholder-[#78716c] focus:outline-none focus:border-[#d8b46e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                      Event Category
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e] transition-colors"
                    >
                      {EVENT_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.title} className="bg-[#181820] text-[#fbf2dc]">
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e] transition-colors"
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                    Estimated Guest Count (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 150 guests"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] placeholder-[#78716c] focus:outline-none focus:border-[#d8b46e] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-2 font-medium">
                    Notes or Specific Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the timing, stage decoration preferences, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] placeholder-[#78716c] focus:outline-none focus:border-[#d8b46e] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all duration-200 shadow-md shadow-[#d8b46e]/25 flex items-center justify-center gap-2.5 active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#0c0c0e]" />
                  Send Enquiry to WhatsApp Desk
                </button>

                <p className="text-[11px] text-[#78716c] text-center font-light">
                  * Connecting you directly with Aurabella Banquet management. No online payments or commitments required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
