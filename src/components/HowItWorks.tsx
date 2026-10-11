import React from 'react';
import { businessConfig } from '@/src/businessConfig';
import { ArrowLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            خطوات بسيطة ومريحة
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            كيف تسير تجربة الحجز والتنفيذ معنا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ٣ خطوات ميسرة تفصلك عن الاستمتاع بمنزل نظيف، معقم، ومرتب بالكامل.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {businessConfig.howItWorks.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative bg-slate-50/80 rounded-2xl p-7 border border-slate-200/70 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Step Editorial Number (Clean typography, no mechanical code prefixes) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-[#0D5C53] tabular-nums">
                    {stepItem.step}
                  </span>
                  {index < businessConfig.howItWorks.length - 1 && (
                    <ArrowLeft className="w-5 h-5 text-slate-400 hidden md:block" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {stepItem.description}
                </p>
              </div>

              {/* Progress visual indicator at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5">
                {[0, 1, 2].map((dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIndex <= index
                        ? 'w-6 bg-[#0D5C53]'
                        : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
