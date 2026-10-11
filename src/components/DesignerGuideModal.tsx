import React, { useState } from 'react';
import { SlidersHorizontal, X, Code, CheckCircle2, Rocket, Globe } from 'lucide-react';
import { businessConfig } from '@/src/businessConfig';

export const DesignerGuideModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Discreet floating button in bottom-left corner */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-xl hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 transition-all hover:scale-105 active:scale-95"
        title="دليل تخصيص القالب لمصمم المواقع"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
        <span>دليل التخصيص للمصمم</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D5C53] flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  دليل المصمم: كيف تخصص هذا الموقع لعميل جديد؟
                </h3>
                <p className="text-xs text-slate-500">
                  قالب جاهز وقابل لإعادة الاستخدام بدون الحاجة لإعادة كتابة الأكواد
                </p>
              </div>
            </div>

            {/* Instructions Steps */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#0D5C53] text-white flex items-center justify-center text-xs">1</span>
                  <span>تعديل ملف الإعدادات الرئيسي (src/businessConfig.ts)</span>
                </div>
                <p className="leading-relaxed mb-2 text-slate-600">
                  تم جمع كل نصوص الموقع، اسم الشركة، رقم الهاتف، رقم الواتساب، باقات الأسعار، والأحياء في ملف واحد فقط.
                </p>
                <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto text-left" dir="ltr">
                  companyName: "اسم شركة العميل",<br />
                  whatsappNumber: "9665XXXXXXXX",<br />
                  phoneDisplay: "05X XXX XXXX",<br />
                  city: "الرياض أو جدة أو الدمام"
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#0D5C53] text-white flex items-center justify-center text-xs">2</span>
                  <span>استبدال الصور التجريبية بصور العميل</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  ضع صور العميل المعتمدة في مجلد <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">src/assets/images/</code> أو استخدم روابط مباشرة في ملف <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">businessConfig.ts</code>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#0D5C53] text-white flex items-center justify-center text-xs">3</span>
                  <span>البناء والنشر على Netlify (خطوة واحدة)</span>
                </div>
                <p className="leading-relaxed mb-2 text-slate-600">
                  المشروع مهيأ بالكامل للنشر على Netlify عبر ملف <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">netlify.toml</code>.
                </p>
                <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto text-left" dir="ltr">
                  npm run build<br />
                  # يتم إنشاء مجلد dist/ الجاهز للسحب والإفلات أو ربط Git على Netlify!
                </div>
              </div>

            </div>

            {/* Footer action */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                يمكنك إخفاء هذا الزر تماماً قبل تسليم الموقع للعميل عبر حذف استدعائه من App.tsx.
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#0D5C53] text-white text-xs font-bold hover:bg-[#09433D] transition-colors"
              >
                إغلاق الدليل
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
