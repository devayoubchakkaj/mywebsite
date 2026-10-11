import React from 'react';
import { businessConfig } from '@/src/businessConfig';
import { Star, MessageSquareQuote, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            تجارب وانطباعات
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            ماذا يقول عملاؤنا بعد تجربة خدماتنا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            رضا العملاء وراحتهم في منازلهم هي غايتنا الأولى ومحور اهتمامنا الدائم.
          </p>
        </div>

        {/* Developer / Freelancer & User Honest Notice */}
        <div className="max-w-3xl mx-auto mb-10 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>ملاحظة شفافة:</strong> هذه التقييمات المعروضة هي نماذج توضيحية أولية مخصصة للمعاينة التجريبية. يُرجى من المصمم استبدالها بتقييمات حقيقية موثقة من عملاء شركتكم الفعلية من خلال مصفوفة <code className="bg-slate-200/70 px-1 py-0.5 rounded font-mono">testimonials</code> في ملف الإعدادات.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Comment body */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Info footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.clientName}
                  </h4>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0D5C53] font-medium">{item.serviceUsed}</span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
