import React, { useState } from 'react';
import { businessConfig } from '@/src/businessConfig';
import { Clock, Info, CheckCircle2 } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(businessConfig.beforeAfterShowcase.items[0]?.id || 'living-room');

  const activeItem = businessConfig.beforeAfterShowcase.items.find((i) => i.id === activeTab) || businessConfig.beforeAfterShowcase.items[0];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            معرض نتائج التنظيف
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {businessConfig.beforeAfterShowcase.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {businessConfig.beforeAfterShowcase.description}
          </p>
        </div>

        {/* Clear Demonstration Sample Notice */}
        <div className="max-w-3xl mx-auto mb-10 bg-teal-50/70 border border-teal-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#0D5C53]">
          <Info className="w-5 h-5 text-[#0D5C53] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {businessConfig.beforeAfterShowcase.disclaimer}
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {businessConfig.beforeAfterShowcase.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-[#0D5C53] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Item Showcase Card */}
        {activeItem && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Preview Container */}
              <div className="relative min-h-[300px] sm:min-h-[360px] bg-slate-900 overflow-hidden">
                <img
                  src={activeItem.afterImage}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm">
                  النتيجة بعد التنظيف
                </div>
              </div>

              {/* Showcase Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {activeItem.description}
                  </p>

                  <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Clock className="w-4 h-4 text-[#0D5C53] shrink-0" />
                      <span>{activeItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{activeItem.beforeImageLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400 block">
                    يمكن للمصمم استبدال هذه الصورة بسهولة برابط أو مسار صورة العميل في ملف <code className="font-mono text-slate-600">businessConfig.ts</code>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
