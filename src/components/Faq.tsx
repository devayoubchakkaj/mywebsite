import React, { useState } from 'react';
import { businessConfig } from '@/src/businessConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(businessConfig.faqs[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            إجابات واضحة
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            الأسئلة الشائعة حول خدمات التنظيف
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            جمعنا لكم أهم الاستفسارات المتكررة لمساعدتكم في اختيار الخدمة الأنسب بكل وضوح.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {businessConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0D5C53] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C53]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-50 text-[#0D5C53]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-3">
            هل لديك سؤال آخر لم تجد إجابته هنا؟
          </p>
          <a
            href={`#contact`}
            className="text-sm font-bold text-[#0D5C53] hover:underline inline-flex items-center gap-1"
          >
            <HelpCircle className="w-4 h-4" />
            <span>تواصل مع فريق الدعم الفني مباشرة</span>
          </a>
        </div>

      </div>
    </section>
  );
};
