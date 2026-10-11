/**
 * ============================================================================
 * BUSINESS CONFIGURATION FILE (ملف إعدادات الشركة)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR FREELANCERS & DESIGNERS:
 * This is the ONLY file you need to edit to customize this entire website
 * for a new cleaning company client in Saudi Arabia!
 * 
 * Simply update the values below (company name, phone number, WhatsApp,
 * prices, services, and neighborhood list), and the entire website will
 * reflect your client's brand automatically without touching HTML or React components.
 * 
 * NOTE ON PHONE & WHATSAPP NUMBERS:
 * - Format: Saudi international code without plus or leading zeros for WhatsApp (e.g. "966500000000")
 * - Replace the sample placeholder number "966500000000" with the client's verified WhatsApp.
 * ============================================================================
 */

import heroImage from '@/src/assets/images/hero_cleaning_saudi_1791584217639.jpg';
import sofaImage from '@/src/assets/images/service_sofa_cleaning_1791584228690.jpg';
import kitchenImage from '@/src/assets/images/service_kitchen_deepclean_1791584239210.jpg';
import villaImage from '@/src/assets/images/service_villa_cleaning_1791584249699.jpg';
import cleanLivingImage from '@/src/assets/images/before_after_clean_1791584259031.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number; // in SAR
  currency: string;
  image: string;
  badge?: string;
  features: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number; // sample demonstration starting price
  unit: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  serviceUsed: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
  isPlaceholderNotice: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessConfig {
  // 1. Brand & Identity
  companyName: string;
  companyNameEnglish: string;
  slogan: string;
  description: string;
  establishedYear: number;
  
  // 2. Colors & Aesthetic (Tailwind / CSS hex codes)
  theme: {
    primaryColor: string; // Deep Teal (الأخضر الزيتي الفاخر / التيل العميق)
    primaryHover: string;
    secondaryColor: string; // Soft Green (الأخضر النضر)
    accentColor: string; // Light Mint
    lightBackground: string;
  };

  // 3. Contact & Communication (MUST BE VERIFIED BEFORE PRODUCTION)
  contact: {
    phoneDisplay: string; // For display on screen e.g. "050 000 0000"
    phoneCall: string; // For tel: link e.g. "+966500000000"
    whatsappNumber: string; // Format: 966500000000 (digits only)
    email: string;
    city: string;
    address: string;
    workingHours: string;
    isVerifiedLocation: boolean;
    googleMapsUrl: string; // If not verified, leave placeholder
  };

  // 4. Hero Section
  hero: {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    backgroundImage: string;
    trustPillars: { iconName: string; label: string }[];
  };

  // 5. Why Choose Us (Selling points)
  whyChooseUs: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];

  // 6. How It Works (3 Steps)
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];

  // 7. Service Coverage Areas
  coverage: {
    mainCity: string;
    coverageNote: string;
    neighborhoods: {
      sector: string; // e.g. "شمال الرياض"
      list: string[];
    }[];
  };

  // 8. Services
  services: ServiceItem[];

  // 9. Pricing Packages
  pricingPackages: PricingPackage[];

  // 10. Before & After Sample Showcase
  beforeAfterShowcase: {
    title: string;
    description: string;
    disclaimer: string;
    items: {
      id: string;
      title: string;
      description: string;
      beforeImageLabel: string;
      afterImage: string;
      duration: string;
    }[];
  };

  // 11. Customer Testimonials (Placeholders)
  testimonials: TestimonialItem[];

  // 12. FAQ (الأسئلة الشائعة)
  faqs: FaqItem[];

  // 13. Social Links
  socialLinks: {
    platform: string;
    url: string;
    enabled: boolean;
  }[];
}

export const businessConfig: BusinessConfig = {
  // 1. BRAND & IDENTITY
  // Change this to the client's business name
  companyName: "صفوة النقاء لخدمات التنظيف",
  companyNameEnglish: "Safwat Al-Naqa Cleaning Services",
  slogan: "نظافة فاخرة تليق بجمال منزلك",
  description: "شركة متخصصة في خدمات تنظيف المنازل، الفلل، الشقق، المجالس، والمفروشات بأحدث التقنيات وأفضل معايير العناية والتفصيل في الرياض.",
  establishedYear: 2024,

  // 2. THEME COLORS
  theme: {
    primaryColor: "#0D5C53", // Deep Teal
    primaryHover: "#09433D",
    secondaryColor: "#10B981", // Soft Emerald
    accentColor: "#E6F4F1", // Very soft mint background
    lightBackground: "#FAFDFD",
  },

  // 3. CONTACT DETAILS (CHANGE FOR YOUR CLIENT)
  contact: {
    // Note: Use verified client contact information
    phoneDisplay: "050 000 0000",
    phoneCall: "+966500000000",
    whatsappNumber: "966500000000", // International format without '+' (e.g., 966500000000)
    email: "info@cleaning-demo.sa",
    city: "الرياض، المملكة العربية السعودية",
    address: "طريق الملك فهد، الرياض (نموذج تجريبي قابل للتعديل)",
    workingHours: "يومياً من ٨:٠٠ صباحاً وحتى ١٠:٠٠ مساءً",
    isVerifiedLocation: false, // Set to true when actual Google Maps URL is provided by client
    googleMapsUrl: "https://maps.google.com/?q=Riyadh",
  },

  // 4. HERO SECTION
  hero: {
    headline: "نظافة منزلك تبدأ من هنا",
    subheadline: "نقدم حلول تنظيف متكاملة للمنازل والفلل والمجالس بأيدي عمالة مدرّبة ومواد تنظيف معتمدة تضمن لك أعلى مستويات الراحة والانتعاش.",
    primaryCtaText: "اطلب الخدمة الآن",
    secondaryCtaText: "تواصل معنا عبر واتساب",
    backgroundImage: heroImage,
    trustPillars: [
      { iconName: "Sparkles", label: "اهتمام فائق بأدق التفاصيل" },
      { iconName: "Clock", label: "دقة والتزام تام بالمواعيد" },
      { iconName: "ShieldCheck", label: "مواد تنظيف آمنة وصديقة للبيئة" },
      { iconName: "Users", label: "طاقم عمل مدرب ومحترف" },
    ],
  },

  // 5. WHY CHOOSE US
  whyChooseUs: [
    {
      id: "booking-ease",
      title: "سهولة وسرعة حجز الخدمة",
      description: "يمكنك حجز موعدك خلال دقيقة واحدة عبر واتساب أو الهاتف دون أي تعقيدات.",
      icon: "CalendarCheck",
    },
    {
      id: "attention-detail",
      title: "الاهتمام بأدق التفاصيل",
      description: "نحرص على الوصول إلى الزوايا الصعبة والأسطح الدقيقة لضمان أعلى درجات النقاء.",
      icon: "Sparkles",
    },
    {
      id: "punctuality",
      title: "الالتزام التام بالمواعيد",
      description: "نصل إلى موقعك في الوقت المتفق عليه تماماً وننجز المهمة وفق الخطة المحددة.",
      icon: "Clock",
    },
    {
      id: "diverse-options",
      title: "خيارات وباقات تنظيف متنوعة",
      description: "من التنظيف اليومي السريع إلى التنظيف العميق الشامل بعد التشطيب والنقل.",
      icon: "Layers",
    },
    {
      id: "easy-support",
      title: "خدمة عملاء سهلة وسريعة",
      description: "فريق دعم متاح للإجابة على استفساراتكم ومتابعة رضاكم بعد اكتمال الخدمة.",
      icon: "Headset",
    },
    {
      id: "modern-equipment",
      title: "معدات ومواد حديثة ومأمونة",
      description: "نعتمد على ماكينات البخار ومواد تنظيف معتمدة تحافظ على أقمشة الأثاث والأرضيات.",
      icon: "CheckCircle",
    },
  ],

  // 6. HOW IT WORKS (3 Simple Steps)
  howItWorks: [
    {
      step: "01",
      title: "اختر الخدمة المناسبة",
      description: "تصفح خدماتنا وحدد احتياجك سواء كان تنظيف شقة، مجلس، فيلا، أو تنظيفاً عميقاً.",
    },
    {
      step: "02",
      title: "تواصل معنا لتحديد الموعد",
      description: "اضغط على زر واتساب وأرسل تفاصيل موقعك والوقت المفضل لك لتأكيد الحجز فوراً.",
    },
    {
      step: "03",
      title: "استمتع بمنزل نظيف ومرتب",
      description: "يصل فريقنا في الموعد المحدد لإنجاز العمل بأعلى معايير الإتقان والجودة.",
    },
  ],

  // 7. SERVICE AREAS (Demonstration for Riyadh)
  coverage: {
    mainCity: "الرياض",
    coverageNote: "نغطي حالياً معظم أحياء مدينة الرياض، ونسعد بتلبية طلباتكم في أي مكان داخل المدينة.",
    neighborhoods: [
      {
        sector: "شمال الرياض",
        list: ["حي الملقا", "حي الياسمين", "حي النرجس", "حي الصحافة", "حي حطين", "حي العقيق", "حي الربيع", "حي القيروان", "حي النفل"],
      },
      {
        sector: "شرق الرياض",
        list: ["حي اليرموك", "حي قرطبة", "حي الروضة", "حي الحمراء", "حي إشبيلية", "حي الخليج", "حي المونسية"],
      },
      {
        sector: "وسط وغرب الرياض",
        list: ["حي العليا", "حي السليمانية", "حي المعذر", "حي المحمدية", "حي الرحمانية", "حي السويدي", "حي ظهرة لبن"],
      },
    ],
  },

  // 8. SERVICES (Easily add/remove items here)
  services: [
    {
      id: "homes-apartments",
      title: "تنظيف المنازل والشقق",
      shortDescription: "تنظيف شامل ومتقن لجميع غرف المعيشة، الممرات، والنوافذ بعناية فائقة.",
      fullDescription: "خدمة متكاملة تشمل كنس ومسح الأرضيات، إزالة الغبار عن الأثاث، تنظيف النوافذ والأبواب، وترتيب المساحات لتنعم ببيئة هادئة ومريحة.",
      startingPrice: 250,
      currency: "ريال",
      image: cleanLivingImage,
      badge: "الأكثر طلباً",
      features: ["كنس ومسح الأرضيات", "تنظيف النوافذ والمرايا", "تلميع الأسطح الخشبية والزجاجية", "تعطير وتطهير شامل"],
    },
    {
      id: "majlis-sofas",
      title: "تنظيف المجالس والكنب",
      shortDescription: "غسيل بالبخار وإزالة البقع المستعصية عن الكنب والأقمشة والمجالس العربية.",
      fullDescription: "نستخدم أحدث أجهزة الغسيل والاستخلاص بالبخار الحار لإزالة الأوساخ والبقع والروائح الكريهة مع الحفاظ التام على ألوان وجودة الأقمشة.",
      startingPrice: 180,
      currency: "ريال",
      image: sofaImage,
      features: ["تنظيف بالبخار عالي الحرارة", "إزالة البقع والدهون السطحية", "تعقيم ضد عث الغبار", "تجفيف سريع ومثالي"],
    },
    {
      id: "carpets-rugs",
      title: "غسيل السجاد والموكيت",
      shortDescription: "عناية متقدمة بالسجاد الفاخر والموكيت مع المحافظة على النسيج والألوان.",
      fullDescription: "إزالة كاملة للغبار العالق والبقع العميقة بأجهزة متخصصة لا تسبب تلفاً للأنسجة الحساسة، مع تعقيم مخصص لضمان الانتعاش الدائم.",
      startingPrice: 150,
      currency: "ريال",
      image: sofaImage,
      features: ["شفط عميق للأتربة", "غسيل بمواد معتمدة للألياف", "تعطير برائحة زكية وثابتة", "مناسب للسجاد اليدوي والمصنع"],
    },
    {
      id: "kitchen-cleaning",
      title: "تنظيف وتعقيم المطابخ",
      shortDescription: "إزالة الدهون المتراكمة وتنظيف الشفاطات، الأفران، والخزائن الداخلية والخارجية.",
      fullDescription: "مطبخك يحتاج عناية استثنائية؛ نقوم بتفكيك الشحوم والزيوت عن الجدران والأفران وشفاط الهواء وتطهير المغاسل والأسطح بمواد غذائية آمنة.",
      startingPrice: 200,
      currency: "ريال",
      image: kitchenImage,
      badge: "عناية دقيقة",
      features: ["إزالة دهون الأفران والشفاطات", "تطهير أسطح التحضير", "تنظيف دواليب المطبخ", "جلي وتطهير حوض الجلي"],
    },
    {
      id: "bathroom-sanitizing",
      title: "تنظيف وتطهير الحمامات",
      shortDescription: "إزالة التكلسات، تلميع الإكسسوارات، وتعقيم كامل للأرضيات والجدران.",
      fullDescription: "تعقيم فندقي يقضي على الرواسب الكلسية واصفرار الفواصل ويمنح المغاسل والمراحيض لمعاناً ناصعاً مع روائح منعشة تدوم طويلاً.",
      startingPrice: 120,
      currency: "ريال",
      image: kitchenImage,
      features: ["إزالة التكلسات والأملاح", "تلميع خلاطات المياه والمرايا", "تطهير عميق ومضاد للبكتيريا", "تنظيف فواصل السيراميك"],
    },
    {
      id: "deep-cleaning",
      title: "التنظيف العميق (Deep Clean)",
      shortDescription: "تنظيف استثنائي شامل لكل ركن وزاوية في المنزل يشمل الأماكن المخفية.",
      fullDescription: "حل مثالي قبل المناسبات الكبرى أو بعد فترات السفر الطويلة، يشمل كل التفاصيل الدقيقة خلف الأجهزة والأثاث وأعلى الدواليب وجوانب الجدران.",
      startingPrice: 450,
      currency: "ريال",
      image: cleanLivingImage,
      badge: "شامل ومتكامل",
      features: ["تنظيف خلف وتحت الأثاث الثقيل", "تلميع الأفياش والمفاتيح والأبواب", "إزالة بقع الجدران الخفيفة", "تعقيم شامل لجميع المرافق"],
    },
    {
      id: "villa-cleaning",
      title: "تنظيف الفلل والقصور",
      shortDescription: "خدمة متخصصة للمساحات الكبيرة والفلل الجديدة أو بعد أعمال الترميم والتشطيب.",
      fullDescription: "فريق عمل متكامل مجهز بماكينات حديثة لإنجاز الفلل متعددة الأدوار والحدائق والملحقات الخارجية والأسطح في وقت قياسي وبإتقان تام.",
      startingPrice: 850,
      currency: "ريال",
      image: villaImage,
      features: ["طاقم عمل متعدد بإشراف مباشر", "تنظيف الدرج والدرابزين والزجاج المرتفع", "تنظيف الملاحق والأسطح", "جلي وتلميع المساحات الواسعة"],
    },
    {
      id: "floor-polishing",
      title: "جلي وتلميع الرخام والسيراميك",
      shortDescription: "استعادة بريق الرخام والأرضيات وإزالة الخدوش البسيطة بمعدات متطورة.",
      fullDescription: "نستخدم أقراص الألماس المخصصة ومواد الكريستال الإيطالية لإعادة اللمعان الفندقي الطبيعي لأرضيات الرخام والسيراميك والبورسلان.",
      startingPrice: 300,
      currency: "ريال",
      image: heroImage,
      features: ["تسوية الفواصل وإزالة الشوائب", "تلميع بالكريستال عالي الجودة", "حماية من امتصاص السوائل", "إعادة البريق الأصلي للحجر"],
    },
  ],

  // 9. PRICING PACKAGES (SAMPLE DEMO STARTING PRICES)
  pricingPackages: [
    {
      id: "basic",
      name: "باقة النظافة الأساسية",
      tagline: "مثالية للصيانة الأسبوعية والشقق السكنية",
      price: 249,
      unit: "تبدأ من / زيارة",
      popular: false,
      features: [
        "كنس ومسح كافة الأرضيات",
        "مسح الغبار عن الأسطح الظاهرة",
        "تنظيف وترتيب غرف النوم والمعيشة",
        "تنظيف سريع للمطبخ وحوض الغسيل",
        "تنظيف وتطهير دورات المياه",
        "إفراغ سلات المهملات وتغيير الأكياس",
      ],
      ctaText: "احجز الباقة الأساسية",
    },
    {
      id: "comprehensive",
      name: "باقة النظافة الشاملة",
      tagline: "الخيار الأفضل والمفضل لمعظم العائلات",
      price: 449,
      unit: "تبدأ من / زيارة",
      popular: true,
      features: [
        "كل ما تشمله الباقة الأساسية",
        "غسيل كنب مجلس واحد بالبخار",
        "تنظيف دقيق لدواليب المطبخ من الخارج",
        "إزالة دهون الفرن والشفاط",
        "تنظيف زجاج النوافذ والأبواب الداخلية",
        "إزالة تكلسات الحمامات وتلميع الخلاطات",
        "تعطير فندقي يدوم طويلاً",
      ],
      ctaText: "احجز الباقة الشاملة",
    },
    {
      id: "deep-vip",
      name: "باقة التنظيف العميق (VIP)",
      tagline: "للمنازل الكبيرة والفلل وقبل المناسبات المهمة",
      price: 799,
      unit: "تبدأ من / زيارة",
      popular: false,
      features: [
        "كل ما تشمله الباقة الشاملة",
        "تنظيف عميق خلف الأثاث وتحت الأسِرّة",
        "غسيل كنب المجلس والسجاد بالبخار الحار",
        "تنظيف دواليب المطبخ من الداخل والخارج",
        "جلي وتلميع خفيف للأرضيات",
        "تنظيف مسارات ومحيط النوافذ والمكيفات",
        "طاقم عمل مخصص بإشراف مشرف جودة",
      ],
      ctaText: "احجز باقة التنظيف العميق",
    },
  ],

  // 10. BEFORE & AFTER SHOWCASE (DEMONSTRATION PHOTOS)
  beforeAfterShowcase: {
    title: "شاهد نتائج التنظيف الفائقة",
    description: "نحرص على تحقيق أعلى معايير النظافة والترتيب ليعود منزلك كأنه جديد تماماً.",
    disclaimer: "ملاحظة: هذه الصور نماذج توضيحية تجريبية لإظهار جودة النتائج المتوقعة، وسيتم استبدالها بصور أعمالكم الفعلية بعد الاعتماد.",
    items: [
      {
        id: "living-room",
        title: "تنظيف وترتيب الصالة الرئيسية",
        description: "إزالة الغبار، تلميع الأرضيات، وتنظيم الأثاث لبيئة معيشية نقية ومريحة.",
        beforeImageLabel: "قبل: آثار استخدام وأتربة متراكمة",
        afterImage: cleanLivingImage,
        duration: "مدة العمل: ساعتان ونصف",
      },
      {
        id: "majlis-steam",
        title: "غسيل وتطهير كنب المجلس بالبخار",
        description: "التخلص من بقع المشروبات وتجديد حيوية القماش بأحدث ماكينات الاستخلاص.",
        beforeImageLabel: "قبل: بقع باهتة على قماش الكنب",
        afterImage: sofaImage,
        duration: "مدة العمل: ساعتان",
      },
      {
        id: "kitchen-gleam",
        title: "إزالة دهون المطبخ وتلميع الأسطح",
        description: "إذابة كاملة للشحوم العالقة وتطهير حوض الجلي والرخام بأعلى درجات السلامة.",
        beforeImageLabel: "قبل: دهون وتكلسات صعبة حول الموقد",
        afterImage: kitchenImage,
        duration: "مدة العمل: ٣ ساعات",
      },
    ],
  },

  // 11. TESTIMONIALS (SAMPLE PLACEHOLDERS - CLEARLY MARKED)
  // Freelancers should replace these with actual customer reviews when provided by the client
  testimonials: [
    {
      id: "review-1",
      clientName: "أبو فهد التميمي",
      location: "حي النرجس، الرياض",
      serviceUsed: "تنظيف الفلل والتنظيف العميق",
      rating: 5,
      comment: "ما شاء الله تبارك الله، التزام ممتاز بالوقت والعمالة محترفة جداً. تم تنظيف الفيلا بالكامل بأعلى مستوى خصوصاً النوافذ والمطابخ.",
      date: "قبل أسبوعين",
      isPlaceholderNotice: true,
    },
    {
      id: "review-2",
      clientName: "أم سارة الدوسري",
      location: "حي الملقا، الرياض",
      serviceUsed: "غسيل مجالس وكنب بالبخار",
      rating: 5,
      comment: "الكنب رجع كأنه جديد ورائحته تفتح النفس. تعامل راقي وسرعة استجابة على الواتساب وتحديد موعد في نفس اليوم.",
      date: "قبل شهر",
      isPlaceholderNotice: true,
    },
    {
      id: "review-3",
      clientName: "م. خالد العتيبي",
      location: "حي الياسمين، الرياض",
      serviceUsed: "باقة النظافة الشاملة",
      rating: 5,
      comment: "خدمة منظمة ومتقنة، دقة عالية في تنظيف الأرضيات والحمامات ومواد التنظيف نوعيتها ممتازة وبدون روائح خانقة.",
      date: "قبل شهرين",
      isPlaceholderNotice: true,
    },
  ],

  // 12. FAQ (الأسئلة الشائعة)
  faqs: [
    {
      id: "faq-1",
      question: "ما هي الخدمات التي تقدمونها بالتفصيل؟",
      answer: "نقدم باقة واسعة من خدمات التنظيف تشمل تنظيف المنازل والشقق، الفلل، غسيل الكنب والمجالس والسجاد بالبخار، تنظيف المطابخ وإزالة الدهون، تعقيم الحمامات، والتنظيف العميق للمباني الجديدة بعد التشطيب.",
    },
    {
      id: "faq-2",
      question: "كيف يمكنني حجز موعد لخدمة التنظيف؟",
      answer: "الحجز غاية في السهولة! كل ما عليك هو الضغط على زر الواتساب في الموقع أو الاتصال بنا مباشرة، وتحديد الخدمة المطلوبة وعنوان منزلك والوقت المناسب لك، وسيتم تأكيد حجزك فوراً.",
    },
    {
      id: "faq-3",
      question: "ما هي المناطق والأحياء التي تغطيها الخدمة؟",
      answer: "نغطي حالياً معظم أحياء مدينة الرياض (شمال وشرق ووسط وغرب الرياض)، ونحرص على الوصول إليكم في أي حي مع تأكيد الموعد مسبقاً.",
    },
    {
      id: "faq-4",
      question: "هل تختلف الأسعار حسب مساحة المنزل وعدد الغرف؟",
      answer: "نعم، الأسعار المعروضة هي أسعار بداية تقديرية (نماذج استرشادية). السعر النهائي يعتمد على مساحة المنزل، عدد الغرف ودورات المياه، ونوع التنظيف المطلوب (أساسي أو عميق).",
    },
    {
      id: "faq-5",
      question: "ما الفرق بين التنظيف العادي والتنظيف العميق؟",
      answer: "التنظيف العادي يركز على ترتيب المنزل ومسح الأسطح والأرضيات الظاهرة. أما التنظيف العميق فيشمل تحريك الأثاث والوصول للأماكن المخفية، إزالة الدهون المتراكمة في المطبخ، وفرك فواصل السيراميك، وتعقيم كامل للمنزل.",
    },
    {
      id: "faq-6",
      question: "هل يوفر فريق العمل جميع المعدات والمواد معه؟",
      answer: "نعم بالتأكيد، يحضر فريقنا مجهزاً بجميع المكانس ومكائن البخار ومواد التنظيف والتطهير المعتمدة، ولا تحتاج لتوفير أي شيء من طرفك.",
    },
  ],

  // 13. SOCIAL LINKS (ENABLE OR DISABLE PER CLIENT)
  socialLinks: [
    { platform: "twitter", url: "https://twitter.com", enabled: true },
    { platform: "instagram", url: "https://instagram.com", enabled: true },
    { platform: "snapchat", url: "https://snapchat.com", enabled: true },
    { platform: "tiktok", url: "https://tiktok.com", enabled: true },
  ],
};

/**
 * Helper function to generate clean WhatsApp URL with prefilled text
 * @param message Custom Arabic message
 * @returns WhatsApp web/mobile url
 */
export function getWhatsAppUrl(message?: string): string {
  const number = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const text = message 
    ? encodeURIComponent(message) 
    : encodeURIComponent(`السلام عليكم، أود الاستفسار عن خدمات التنظيف لدى ${businessConfig.companyName}.`);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Helper to generate booking WhatsApp message for a specific service
 */
export function getServiceBookingWhatsAppUrl(serviceTitle: string, startingPrice?: number): string {
  let text = `السلام عليكم ورحمة الله، أرغب في حجز خدمة (${serviceTitle}) لدى ${businessConfig.companyName}.`;
  if (startingPrice) {
    text += `\nالسعر الاسترشادي: ${startingPrice} ريال.`;
  }
  text += `\nالرجاء إفادتي بالمواعيد المتاحة للتنفيذ.`;
  return getWhatsAppUrl(text);
}
