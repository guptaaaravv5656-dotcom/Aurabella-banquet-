import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { EVENT_CATEGORIES, EventCategory } from '../data/banquetData';

interface EventsProps {
  onSelectEventForEnquiry: (eventName: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEventForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedEventModal, setSelectedEventModal] = useState<EventCategory | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Occasions' },
    { id: 'weddings', label: 'Weddings & Pre-Weddings' },
    { id: 'milestones', label: 'Milestones & Birthdays' },
    { id: 'gatherings', label: 'Family & Corporate' },
  ];

  const filteredEvents = EVENT_CATEGORIES.filter((ev) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'weddings') return ev.id === 'weddings' || ev.id === 'engagements';
    if (activeCategory === 'milestones') return ev.id === 'birthdays' || ev.id === 'anniversaries' || ev.id === 'festive-celebrations';
    if (activeCategory === 'gatherings') return ev.id === 'family-functions' || ev.id === 'corporate-events' || ev.id === 'private-gatherings';
    return true;
  });

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#d8b46e]">
              Celebration Categories
            </span>
            <span className="w-8 h-[1px] bg-[#d8b46e]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbf2dc] font-normal leading-tight mb-4 [text-wrap:balance]">
            Events & Occasions
          </h2>
          <p className="text-[#a9a296] text-sm sm:text-base font-light max-w-xl mx-auto [text-wrap:balance]">
            Aurabella Banquet welcomes an array of milestone gatherings. Explore our popular celebration categories below.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider rounded-sm transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#d8b46e] text-[#0c0c0e] shadow-sm shadow-[#d8b46e]/30'
                    : 'bg-[#16161c] text-[#a9a296] hover:text-[#fbf2dc] border border-[#c8a96e]/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEventModal(event)}
              className="group relative bg-[#141419] rounded-sm overflow-hidden border border-[#c8a96e]/20 hover:border-[#d8b46e]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#d8b46e]/10 cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a22]">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Quiet unboxed metadata */}
                <div className="absolute top-3 left-3 text-[11px] font-medium tracking-wider text-[#e5c98d] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#c8a96e]/30">
                  {event.badge}
                </div>

                {/* Hover indicator arrow */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-[#c8a96e]/40 flex items-center justify-center text-[#d8b46e] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#fbf2dc] group-hover:text-[#d8b46e] transition-colors leading-snug mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-[#a9a296] leading-relaxed font-light line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[#c8a96e] group-hover:underline inline-flex items-center gap-1 font-medium">
                    View Details & Enquire
                  </span>
                  <span className="text-[11px] text-[#78716c]">Gwalior Venue</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice: Categories not guaranteed packages */}
        <p className="text-center text-xs text-[#78716c] mt-10 max-w-2xl mx-auto font-light">
          * Note: Events are presented as general category types suitable for our banquet hall. Specific arrangements, guest counts, and dates are finalized upon direct enquiry with our venue team.
        </p>
      </div>

      {/* Modal for Event Details */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#14141a] border border-[#c8a96e]/40 rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedEventModal(null)}
              className="absolute top-4 right-4 text-[#a9a296] hover:text-[#fbf2dc] text-sm p-1"
            >
              ✕
            </button>
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-5 border border-[#c8a96e]/20">
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs text-[#d8b46e] uppercase tracking-wider mb-1">
              {selectedEventModal.badge}
            </div>
            <h3 className="text-2xl font-serif text-[#fbf2dc] mb-3">
              {selectedEventModal.title}
            </h3>
            <p className="text-sm text-[#d5cfc5] leading-relaxed mb-6 font-light">
              {selectedEventModal.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const evName = selectedEventModal.title;
                  setSelectedEventModal(null);
                  onSelectEventForEnquiry(evName);
                }}
                className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#d8b46e] to-[#b88c3a] text-[#0c0c0e] rounded-sm text-center"
              >
                Enquire for {selectedEventModal.title}
              </button>
              <button
                onClick={() => setSelectedEventModal(null)}
                className="px-5 py-3 text-xs font-medium tracking-wider uppercase border border-white/10 text-[#d5cfc5] rounded-sm hover:bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
