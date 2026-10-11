import React from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import {
  MessageCircle,
  Sparkles,
  Clock,
  ShieldCheck,
  Users,
  ArrowDown,
  CheckCircle2,
  MapPin,
  Star,
} from 'lucide-react';

interface HeroProps {
  onScrollToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBooking }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12 lg:pb-20 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/50 border-b border-slate-100 overflow-hidden">
      
      {/* Decorative ambient subtle background glows (no harsh dark filters) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Right Text (RTL) & Left Bright Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-6 sm:py-10">
          
          {/* Column 1: Crisp, Highly-Readable Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Top Subtitle / Trust Kicker (Clear, high-contrast) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-[#0D5C53] text-xs sm:text-sm font-bold mb-5 border border-teal-200/60">
              <Sparkles className="w-4 h-4 text-[#0D5C53]" />
              <span>خدمات تنظيف منازل احترافية في {businessConfig.coverage.mainCity}</span>
            </div>

            {/* Main Arabic Headline - High Contrast Dark & Teal */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.25] mb-5 text-balance font-['Cairo',sans-serif]">
              {businessConfig.hero.headline}
            </h1>

            {/* Supporting Value Proposition Description - Ultra Clear Legibility */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              {businessConfig.hero.subheadline}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary Booking Button */}
              <button
                type="button"
                onClick={onScrollToBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[#0D5C53] hover:bg-[#09433D] active:scale-95 rounded-2xl shadow-lg shadow-teal-950/15 hover:shadow-xl transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <span>{businessConfig.hero.primaryCtaText}</span>
                <ArrowDown className="w-4 h-4 text-emerald-300" />
              </button>

              {/* Secondary WhatsApp Button */}
              <a
                href={getWhatsAppUrl("السلام عليكم ورحمة الله، أرغب في الاستفسار وحجز موعد تنظيف لمنزلي.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] active:scale-95 rounded-2xl shadow-lg shadow-emerald-900/15 hover:shadow-xl transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{businessConfig.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Quick Trust Pillars Strip */}
            <div className="w-full pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>دقة في المواعيد</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>مواد تنظيف آمنة</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>عناية بأدق التفاصيل</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold">
                <Users className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>طاقم عمل مدرب</span>
              </div>
            </div>

          </div>

          {/* Column 2: Unobstructed, Bright High-Definition Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Vivid Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={businessConfig.hero.backgroundImage}
                  alt="منزل فاخر ونظيف في الرياض"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle soft bottom gradient purely for the corner badge */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Badge on Image */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D5C53] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5 text-[#0D5C53]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">نظافة وتعقيم فندقي</div>
                    <div className="text-[11px] text-slate-500">فلل، شقق، ومجالس</div>
                  </div>
                </div>
              </div>

              {/* Floating Top Floating Card */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900">حجز سريع ومباشر</div>
                  <div className="text-[11px] text-slate-500">تأكيد الموعد عبر واتساب</div>
                </div>
              </div>

              {/* Coverage Location Card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#0D5C53] text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                <span>تغطية شاملة لأحياء الرياض</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
