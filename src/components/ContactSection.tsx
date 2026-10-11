import React, { useState } from 'react';
import { businessConfig, getWhatsAppUrl } from '@/src/businessConfig';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(businessConfig.services[0]?.title || '');
  const [neighborhood, setNeighborhood] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showMapNoticeModal, setShowMapNoticeModal] = useState(false);

  // Send directly via WhatsApp
  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('الرجاء إدخال الاسم ورقم الجوال للتواصل');
      return;
    }

    const message = `السلام عليكم ورحمة الله وبركاته،\nأود طلب حجز خدمة تنظيف:\n• الاسم: ${name}\n• الجوال: ${phone}\n• نوع الخدمة: ${selectedService}\n• الحي/المدينة: ${neighborhood || 'غير محدد'}\n• الموعد المفضل: ${date || 'في أقرب وقت'}\n• ملاحظات إضافية: ${notes || 'لا يوجد'}`;

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  // Submit on-site
  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('الرجاء إدخال الاسم ورقم الجوال للتواصل');
      return;
    }
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setNeighborhood('');
    setDate('');
    setNotes('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-semibold text-[#0D5C53] mb-2 tracking-wide">
            تواصل معنا واحجز موعدك
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            نحن هنا لخدمتكم ومساعدتكم في أي وقت
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            أرسل بيانات حجزك عبر النموذج أدناه أو تواصل مباشرة معنا عبر واتساب للحصول على استجابة فورية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Card (Left/Right depending on RTL) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-7 sm:p-9 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-white">
              معلومات الاتصال
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              يسعدنا الرد على جميع استفساراتكم وتحديد المواعيد المناسبة لكم على مدار الأسبوع.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">رقم الهاتف للاتصال</div>
                  <a
                    href={`tel:${businessConfig.contact.phoneCall}`}
                    className="text-base font-bold text-white hover:text-emerald-300 transition-colors tabular-nums"
                    dir="ltr"
                  >
                    {businessConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">المحادثة السريعة (واتساب)</div>
                  <a
                    href={getWhatsAppUrl("السلام عليكم، أود حجز موعد تنظيف.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-emerald-300 transition-colors tabular-nums"
                    dir="ltr"
                  >
                    +{businessConfig.contact.whatsappNumber}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">البريد الإلكتروني</div>
                  <a
                    href={`mailto:${businessConfig.contact.email}`}
                    className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                    dir="ltr"
                  >
                    {businessConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">الموقع الجغرافي</div>
                  <p className="text-sm text-slate-200 leading-snug">
                    {businessConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">ساعات العمل والخدمة</div>
                  <p className="text-sm text-slate-200">
                    {businessConfig.contact.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button (With Unverified Location Safeguard) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  if (businessConfig.contact.isVerifiedLocation) {
                    window.open(businessConfig.contact.googleMapsUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    setShowMapNoticeModal(true);
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all"
              >
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>عرض الموقع على خرائط جوجل</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Interactive Booking & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-[#10B981] rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  تم استلام طلبكم بنجاح!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلك مع {businessConfig.companyName}. سيقوم فريق خدمة العملاء بالتواصل معك هاتفياً أو عبر واتساب لتأكيد الموعد والتفاصيل.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    إرسال طلب حجز آخر
                  </button>
                  <a
                    href={getWhatsAppUrl(`السلام عليكم، أنا ${name} وأود تسريع تأكيد طلبي لخدمة ${selectedService}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0D5C53] hover:bg-[#09433D] transition-colors"
                  >
                    تأكيد سريع عبر واتساب
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendViaWhatsApp} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    طلب حجز موعد خدمة تنظيف
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    املأ البيانات التالية، ويمكنك إرسالها فوراً إلى محادثة واتساب الرسمية:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: عبد العزيز الشمري"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="مثال: 0550000000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      الخدمة المطلوبة
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                    >
                      {businessConfig.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.startingPrice} ريال)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Neighborhood / Area */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      الحي أو المنطقة
                    </label>
                    <input
                      type="text"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="مثال: حي الياسمين، الرياض"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    الموعد المفضل (اليوم والوقت)
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="مثال: غداً الساعة ٤ عصراً أو نهاية الأسبوع"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    ملاحظات أو مواصفات إضافية (اختياري)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="اذكر مثلاً: عدد الغرف، وجود بقع صعبة في الكنب، شقة مفروشة..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C53] focus:border-transparent transition-all"
                  />
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* Primary WhatsApp Action */}
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0D5C53] hover:bg-[#09433D] transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 text-[#10B981]" />
                    <span>إرسال الطلب عبر واتساب مباشرة</span>
                  </button>

                  {/* Secondary Direct Inquiry Submission */}
                  <button
                    type="button"
                    onClick={handleSubmitInquiry}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Send className="w-4 h-4 text-slate-500" />
                    <span>تأكيد بدون واتساب</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  نحترم خصوصية بياناتكم ولن يتم مشاركة رقم هاتفك مع أي جهة خارجية.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Google Maps Location Safeguard Modal */}
      {showMapNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              تنبيه الموقع الجغرافي للمصمم
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              لم يتم تعيين رابط موقع موثق للشركة حتى الآن في ملف <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">businessConfig.ts</code>.
              حفاظاً على مصداقية الموقع وتجنب توجيه العملاء إلى موقع خاطئ، يُرجى من المصمم وضع الرابط الحقيقي لفرع الشركة وتعيين <code className="text-emerald-700 font-mono text-xs">isVerifiedLocation: true</code>.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={businessConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                فتح خريطة الرياض التجريبية على أي حال
              </a>
              <button
                type="button"
                onClick={() => setShowMapNoticeModal(false)}
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-[#0D5C53] text-white hover:bg-[#09433D] transition-colors"
              >
                حسناً، فهمت ذلك
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
