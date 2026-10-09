import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { BusinessHours } from './components/BusinessHours';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedEventForModal, setSelectedEventForModal] = useState('Weddings');

  const handleOpenEnquiry = (eventName: string = 'Weddings') => {
    setSelectedEventForModal(eventName);
    setIsEnquiryModalOpen(true);
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4efe6] selection:bg-[#c8a96e] selection:text-[#0c0c0e] font-sans">
      {/* 1. Header (Sticky navigation bar) */}
      <Header onOpenEnquiry={() => handleOpenEnquiry('General Enquiry')} />

      {/* 2. Hero Section */}
      <Hero
        onExploreClick={() => handleScrollTo('about')}
        onContactClick={() => handleScrollTo('contact')}
      />

      {/* 3. About Section */}
      <About onPlanEventClick={() => handleScrollTo('contact')} />

      {/* 4. Events Section (8 image-based categories) */}
      <Events onSelectEventForEnquiry={(ev) => handleOpenEnquiry(ev)} />

      {/* 5. Why Choose Us (4 feature blocks) */}
      <WhyChooseUs />

      {/* 6. Photo Gallery (Grid with lightbox & View All Photos) */}
      <Gallery />

      {/* 7. Location Section ("Find Aurabella Banquet" & Directions) */}
      <Location />

      {/* 8. Contact Section ("Let’s Plan Your Celebration" & channels) */}
      <Contact prefilledEvent={selectedEventForModal} />

      {/* 9. Business Hours (Neat opening hours card) */}
      <BusinessHours />

      {/* 10. Footer */}
      <Footer />

      {/* Mobile Quick Action Bar (Call / WhatsApp / Directions) */}
      <MobileQuickBar />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialEvent={selectedEventForModal}
      />
    </div>
  );
}
