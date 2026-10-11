import React from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { Services } from '@/src/components/Services';
import { WhyChooseUs } from '@/src/components/WhyChooseUs';
import { HowItWorks } from '@/src/components/HowItWorks';
import { BeforeAfter } from '@/src/components/BeforeAfter';
import { Pricing } from '@/src/components/Pricing';
import { ServiceAreas } from '@/src/components/ServiceAreas';
import { Testimonials } from '@/src/components/Testimonials';
import { Faq } from '@/src/components/Faq';
import { ContactSection } from '@/src/components/ContactSection';
import { Footer } from '@/src/components/Footer';
import { DesignerGuideModal } from '@/src/components/DesignerGuideModal';
import { getWhatsAppUrl } from '@/src/businessConfig';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const handleScrollToBooking = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFDFD] text-slate-800 flex flex-col font-['IBM_Plex_Sans_Arabic',sans-serif] selection:bg-[#0D5C53] selection:text-white" dir="rtl">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBookingModal={handleScrollToBooking} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onScrollToBooking={handleScrollToBooking} />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Before & After Results Gallery */}
        <BeforeAfter />

        {/* 7. Pricing Packages */}
        <Pricing />

        {/* 8. Service Coverage Areas */}
        <ServiceAreas />

        {/* 9. Testimonials (Sample Reviews) */}
        <Testimonials />

        {/* 10. FAQ Section */}
        <Faq />

        {/* 11. Contact & Booking Inquiry Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Freelance Designer Quick Customization Guide (Toggleable helper) */}
      <DesignerGuideModal />

      {/* Floating WhatsApp Quick Action Button for Mobile / Desktop (Thumb-friendly) */}
      <a
        href={getWhatsAppUrl("السلام عليكم، أود حجز موعد خدمة تنظيف لمنزلي.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="تواصل فوري عبر واتساب"
        title="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">واتساب</span>
      </a>
    </div>
  );
}
