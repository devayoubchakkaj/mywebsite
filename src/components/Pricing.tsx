import React from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import { Check, MessageCircle, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            باقات وعروض التنظيف
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            باقات مرنة تناسب مختلف المساحات والاحتياجات
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            اختر الباقة المناسبة لمنزلك، وتواصل معنا لتنسيق الموعد وتأكيد التفاصيل بسهولة.
          </p>
        </div>

        {/* Clear Demonstration Price Notice */}
        <div className="max-w-3xl mx-auto mb-12 bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>تنويه للعملاء والمصممين:</strong> الأسعار المعروضة أدناه هي أسعار استرشادية ونماذج تجريبية للباقات. يتحدد السعر النهائي بناءً على مساحة العقار وعدد الغرف وموقع الحي، ويمكن تعديلها أو إزالتها كلياً من ملف الإعدادات.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {businessConfig.pricingPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const whatsappMessage = `السلام عليكم ورحمة الله، أود الاستفسار عن تفاصيل وحجز (${pkg.name}) بسعر تقديري (${pkg.price} ريال).`;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-white to-teal-50/30 border-2 border-[#0D5C53] shadow-lg shadow-teal-900/5'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Popular Pill Label */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-[#0D5C53] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    الباقة الأكثر طلباً
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0D5C53] tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-sm font-bold text-slate-700">ريال</span>
                    <span className="text-xs text-slate-400 mr-1">{pkg.unit}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-700 tracking-wider">
                      تشمل هذه الباقة:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 shadow-sm ${
                      isPopular
                        ? 'bg-[#0D5C53] hover:bg-[#09433D] text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#10B981]" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
