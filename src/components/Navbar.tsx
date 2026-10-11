import React, { useState, useEffect } from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import { Phone, MessageCircle, Menu, X, Sparkles, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Simple active section detection
      const sections = ['hero', 'services', 'why-us', 'pricing', 'areas', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict 5 essential navigation links to maintain clean desktop spacing without crowding
  const primaryNavLinks = [
    { id: 'hero', label: 'الرئيسية', href: '#hero' },
    { id: 'services', label: 'خدماتنا', href: '#services' },
    { id: 'why-us', label: 'لماذا نحن', href: '#why-us' },
    { id: 'pricing', label: 'الباقات والأسعار', href: '#pricing' },
    { id: 'areas', label: 'مناطق التغطية', href: '#areas' },
    { id: 'faq', label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-slate-900/5 border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Zone 1: Single Clean Wordmark & Brand Tile */}
          <a
            href="#hero"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C53] rounded-xl"
            aria-label={businessConfig.companyName}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D5C53] to-[#083b35] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0D5C53] transition-colors font-['Cairo',sans-serif]">
              {businessConfig.companyName}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-Line, 5 Concise Links) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'text-[#0D5C53] bg-teal-50/70 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 High-Intent Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Call Link (Desktop subtle icon) */}
            <a
              href={`tel:${businessConfig.contact.phoneCall}`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0D5C53] bg-slate-50 hover:bg-teal-50/50 border border-slate-200/70 rounded-xl transition-all whitespace-nowrap shrink-0"
              title="اتصال هاتفي مباشر"
            >
              <Phone className="w-3.5 h-3.5 text-[#0D5C53]" />
              <span className="tabular-nums font-mono text-xs" dir="ltr">
                {businessConfig.contact.phoneDisplay}
              </span>
            </a>

            {/* Primary Action Button: WhatsApp Booking */}
            <a
              href={getWhatsAppUrl("السلام عليكم ورحمة الله، أود الاستفسار وحجز موعد تنظيف لمنزلي.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0D5C53] hover:bg-[#09433D] active:scale-95 rounded-xl shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0"
              title="تواصل فوري عبر واتساب"
            >
              <MessageCircle className="w-4 h-4 text-[#10B981]" />
              <span>احجز عبر واتساب</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D5C53]"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200/90 shadow-xl transition-all animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-4">
            
            {/* Nav list */}
            <div className="flex flex-col space-y-1">
              {primaryNavLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-teal-50 text-[#0D5C53]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowLeft className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center justify-between"
              >
                <span>تواصل معنا</span>
                <ArrowLeft className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl("السلام عليكم، أود حجز موعد تنظيف.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0D5C53] text-white text-sm font-bold shadow-sm active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>محادثة فورية عبر واتساب</span>
              </a>

              <a
                href={`tel:${businessConfig.contact.phoneCall}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0D5C53]" />
                <span dir="ltr" className="tabular-nums font-mono">{businessConfig.contact.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
