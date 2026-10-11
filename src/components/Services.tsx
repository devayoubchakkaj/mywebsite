import React, { useState } from 'react';
import { businessConfig, getServiceBookingWhatsAppUrl, ServiceItem } from '@/src/businessConfig';
import { MessageCircle, Check, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBooking?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            خدماتنا المتخصصة
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            حلول تنظيف شاملة تناسب كافة احتياجات منزلك
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نعتمد على معدات احترافية ومواد تنظيف معتمدة تضمن القضاء على الأوساخ والتعقيم الفائق مع الحفاظ على سلامة أثاثك.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-[#0D5C53]/40"
            >
              {/* Card Image Container */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback container in case image path has issues
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-teal-900', 'text-white');
                      target.parentElement.innerHTML = `<span class="font-bold text-sm text-emerald-200 p-4 text-center">${service.title}</span>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Starting Price Tag */}
                {service.startingPrice > 0 && (
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                    <span className="text-slate-500 font-normal">يبدأ من:</span>
                    <span className="text-[#0D5C53] text-sm tabular-nums">{service.startingPrice}</span>
                    <span>{service.currency}</span>
                  </div>
                )}

                {/* Optional Badge */}
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-[#0D5C53] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0D5C53] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button: WhatsApp Booking with Pre-filled Message */}
                <div className="pt-2">
                  <a
                    href={getServiceBookingWhatsAppUrl(service.title, service.startingPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D5C53] hover:bg-[#09433D] rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#10B981]" />
                    <span>طلب الخدمة عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Note for Web Designer */}
        <div className="mt-12 text-center text-xs text-slate-400">
          يمكنك بسهولة إضافة، تعديل أو حذف أي من هذه الخدمات من خلال ملف <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-mono">businessConfig.ts</code>.
        </div>

      </div>
    </section>
  );
};
