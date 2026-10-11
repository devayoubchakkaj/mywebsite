import React from 'react';
import { businessConfig } from '@/src/businessConfig';
import {
  CalendarCheck,
  Sparkles,
  Clock,
  Layers,
  Headset,
  CheckCircle,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#0D5C53]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#0D5C53]" />,
    Clock: <Clock className="w-6 h-6 text-[#0D5C53]" />,
    Layers: <Layers className="w-6 h-6 text-[#0D5C53]" />,
    Headset: <Headset className="w-6 h-6 text-[#0D5C53]" />,
    CheckCircle: <CheckCircle className="w-6 h-6 text-[#0D5C53]" />,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            مميزاتنا واهتمامنا
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            لماذا يفضل العملاء خدماتنا في تنظيف منازلهم؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نركز على الجودة العملية، والدقة المتناهية، والتواصل السلس لنمنحك تجربة خالية من القلق والجهد.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessConfig.whyChooseUs.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5 shrink-0">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#0D5C53]" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
