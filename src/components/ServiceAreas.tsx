import React, { useState } from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import { MapPin, Search, MessageCircle, AlertCircle } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Flatten neighborhoods to search
  const allNeighborhoods = businessConfig.coverage.neighborhoods.flatMap((sector) =>
    sector.list.map((name) => ({ name, sector: sector.sector }))
  );

  const filtered = searchQuery.trim()
    ? allNeighborhoods.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : [];

  return (
    <section id="areas" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            نطاق التغطية الجغرافية
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            المناطق والأحياء المشمولة بالخدمة ({businessConfig.coverage.mainCity})
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {businessConfig.coverage.coverageNote}
          </p>
        </div>

        {/* Clear Scope Disclaimer Notice */}
        <div className="max-w-3xl mx-auto mb-10 bg-teal-50/70 border border-teal-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#0D5C53]">
          <AlertCircle className="w-5 h-5 text-[#0D5C53] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>ملاحظة للمصمم والعميل:</strong> مدينة الرياض والأحياء أدناه هي نموذج افتراضي قابل للتغيير فوراً لأي مدينة أخرى (مثل جدة، الدمام، مكة المكرمة) من ملف <code className="bg-teal-100/80 px-1 py-0.5 rounded font-mono">businessConfig.ts</code>. نرجو من صاحب العمل تأكيد الأحياء المغطاة فعلياً.
          </p>
        </div>

        {/* Quick Neighborhood Search Filter */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن اسم حيك للتأكد من التغطية..."
              className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all shadow-sm"
            />
            <Search className="w-5 h-5 text-slate-400 absolute top-3.5 right-3.5" />
          </div>

          {searchQuery.trim() && (
            <div className="mt-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm text-xs">
              {filtered.length > 0 ? (
                <div>
                  <span className="text-[#0D5C53] font-semibold">حي مشمول بالتغطية التجريبية:</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {filtered.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-50 text-[#0D5C53] px-2.5 py-1 rounded-md text-xs font-medium"
                      >
                        {item.name} ({item.sector})
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-slate-500 flex items-center justify-between">
                  <span>لم نجد الحي في القائمة السريعة، تواصل معنا للتحقق من إمكانية التغطية:</span>
                  <a
                    href={getWhatsAppUrl(`السلام عليكم، هل تغطون حي (${searchQuery}) في خدمات التنظيف؟`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D5C53] font-bold underline"
                  >
                    استفسر عبر واتساب
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessConfig.coverage.neighborhoods.map((sectorGroup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D5C53] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {sectorGroup.sector}
                  </h3>
                </div>

                <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                  {sectorGroup.list.map((neighborhood, nIdx) => (
                    <li key={nIdx} className="flex items-center gap-1.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                      <span className="truncate">{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-left">
                <a
                  href={getWhatsAppUrl(`السلام عليكم، أود حجز موعد تنظيف في منطقة (${sectorGroup.sector}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0D5C53] hover:text-[#09433D] inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>طلب خدمة في هذا القطاع</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
