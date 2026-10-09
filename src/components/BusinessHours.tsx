import React from 'react';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/banquetData';

export const BusinessHours: React.FC = () => {
  // Determine current day of week in Indian Standard Time or local
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[new Date().getDay()];

  return (
    <section className="py-20 bg-[#0e0e12] border-t border-[#c8a96e]/15 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141419] rounded-sm border border-[#c8a96e]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold decorative flourish */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d8b46e]/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Explanatory Header & Current Status */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#d8b46e]/15 border border-[#c8a96e]/30 text-xs text-[#e5c98d] font-medium tracking-wider mb-4 uppercase">
                <Clock className="w-3.5 h-3.5 text-[#d8b46e]" />
                Operating Hours
              </div>

              <h2 className="text-3xl font-serif text-[#fbf2dc] mb-3">
                Venue Visit & Consultation Timings
              </h2>

              <p className="text-xs sm:text-sm text-[#a9a296] font-light leading-relaxed mb-6">
                Our banquet desk is available all 7 days of the week for venue visits, walkthroughs, and celebration discussions.
              </p>

              <div className="p-4 rounded-sm bg-[#1a1a22] border border-[#c8a96e]/20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                <div>
                  <p className="text-xs font-semibold text-[#fbf2dc]">Every Day: 11:00 AM – 8:00 PM</p>
                  <p className="text-[11px] text-[#a9a296] mt-0.5">Walk-ins and scheduled appointments welcome</p>
                </div>
              </div>
            </div>

            {/* Right Col: Neat 7-Day Schedule Grid */}
            <div className="lg:col-span-7">
              <div className="bg-[#181820] rounded-sm border border-white/5 overflow-hidden divide-y divide-white/5">
                {BUSINESS_INFO.openingHours.schedule.map((item) => {
                  const isToday = item.day === todayName;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between px-5 py-3 transition-colors ${
                        isToday ? 'bg-[#d8b46e]/10 text-[#fbf2dc]' : 'text-[#a9a296] hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isToday && (
                          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#d8b46e] bg-[#d8b46e]/20 px-2 py-0.5 rounded-xs">
                            Today
                          </span>
                        )}
                        <span className={`text-sm ${isToday ? 'font-semibold text-[#fbf2dc]' : 'text-[#d5cfc5]'}`}>
                          {item.day}
                        </span>
                      </div>
                      <span className={`text-sm font-mono tracking-tight ${isToday ? 'text-[#d8b46e] font-semibold' : 'text-[#a9a296]'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
