import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, EVENT_CATEGORIES } from '../data/banquetData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEvent?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialEvent = 'Weddings',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(initialEvent);
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello Aurabella Banquet! I would like to enquire about:
Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Target Date: ${eventDate || 'Not specified'}
Notes: ${notes || 'Looking forward to hearing from you.'}`;

    const url = `https://wa.me/91${BUSINESS_INFO.whatsapps[0].raw}?text=${encodeURIComponent(message)}`;
    setIsSuccess(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#141419] border border-[#c8a96e]/40 rounded-sm shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a9a296] hover:text-[#fbf2dc] p-1.5 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-[#d8b46e]/20 border border-[#d8b46e] rounded-full flex items-center justify-center mx-auto mb-4 text-[#d8b46e]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-[#fbf2dc] mb-2">Thank You, {name}!</h3>
            <p className="text-xs sm:text-sm text-[#d5cfc5] mb-6 font-light leading-relaxed">
              Your event enquiry details have been prepared for WhatsApp chat. Our Aurabella Banquet representative will assist you with dates and venue details.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#d8b46e] text-[#0c0c0e] rounded-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[#d8b46e]">
                Direct Venue Enquiry
              </span>
              <h3 className="text-2xl font-serif text-[#fbf2dc] mt-1">
                Enquire with Aurabella Banquet
              </h3>
              <p className="text-xs text-[#a9a296] font-light mt-1">
                Fill in your details below or call our desk directly.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={BUSINESS_INFO.phones[0].tel}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#181820] border border-[#c8a96e]/30 text-xs text-[#d8b46e] font-medium hover:bg-[#c8a96e]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call {BUSINESS_INFO.phones[0].display}
              </a>
              <a
                href={BUSINESS_INFO.whatsapps[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#25D366]/20 border border-[#25D366]/50 text-xs text-[#25D366] font-medium hover:bg-[#25D366] hover:text-black transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Desk
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-1.5 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-1.5 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-1.5 font-medium">
                    Occasion
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e]"
                  >
                    {EVENT_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.title} className="bg-[#181820]">
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-1.5 font-medium">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d5cfc5] mb-1.5 font-medium">
                  Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Estimated guest count, preferred time, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#181820] border border-[#c8a96e]/25 rounded-sm text-sm text-[#fbf2dc] focus:outline-none focus:border-[#d8b46e] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase rounded-sm bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] hover:from-[#e5c583] hover:to-[#c89b47] transition-all shadow-md shadow-[#d8b46e]/20 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0c0c0e]" />
                Connect via WhatsApp
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
