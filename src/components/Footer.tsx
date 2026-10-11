import React from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import { Sparkles, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D5C53] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {businessConfig.companyName}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              {businessConfig.description}
            </p>

            <div className="pt-2 text-xs text-slate-500">
              {businessConfig.slogan} · خدمة موثوقة في {businessConfig.coverage.mainCity}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  لماذا نحن
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  باقات الأسعار
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-emerald-400 transition-colors">
                  مناطق التغطية
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wider">
              أبرز الخدمات
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {businessConfig.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-emerald-400 transition-colors truncate block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wider">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={`tel:${businessConfig.contact.phoneCall}`}
                  className="hover:text-emerald-400 tabular-nums"
                  dir="ltr"
                >
                  {businessConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  محادثة واتساب فورية
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="hover:text-emerald-400 truncate"
                  dir="ltr"
                >
                  {businessConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{businessConfig.contact.city}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Designer Guide Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة © {currentYear} {businessConfig.companyName}.
          </p>

          <p className="text-slate-500">
            قالب موقع تنظيف منازل مخصص للشركات السعودية · قابل للتخصيص والتطوير
          </p>
        </div>

      </div>
    </footer>
  );
};
