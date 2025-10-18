import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      offers: "Offers",
      team: "The Team",
      faq: "FAQ",
      contact: "Contact Us",
    },
    top: {
      arabic: "Arabic",
      english: "English",
      email: "info@samsa.com",
    },
    hero: {
      pre: "SAM",
      title: "– The Network That Unites Us",
      desc: "From Damascus to Aleppo, from coast to desert — SAM brings fast, reliable internet to every home and business across the country.",
      cta: "Read more »",
    },
    contact1: {
      title: "Contact Us",
      send: "Send",
    },
    about: {
      title: "WHO WE ARE",
      desc: "Sam is a Syrian technology company founded in 2013, specializing in providing modern internet and communication services.",
      cards: [
        {
          title: "Our Mission",
          body: "To provide high-speed, stable, and innovative internet services that meet the growing digital needs of our customers.",
        },
        {
          title: "Our Vision",
          body: "To be a leading technology company in Syria, empowering communities with advanced and reliable internet connectivity.",
        },
        {
          title: "Our Goals",
          body: [
            "Expand nationwide connectivity",
            "Enhance customer support",
            "Promote digital growth",
          ],
        },
      ],
    },
    services: {
      title: "Services",
      desc: "We provide reliable and high-quality internet solutions for homes and businesses — services designed to enhance your online experience.",
      list: [
        {
          title: "Home Internet",
          description: "Enjoy fast and stable internet for your household with wide coverage and continuous technical support.",
          image: "https://i.pinimg.com/736x/88/06/16/880616900f6bd4c6287013832e8ebdaf.jpg",
        },
        {
          title: "Business Internet",
          description: "High-speed and secure connections tailored to meet the needs of companies and organizations.",
          image: "https://i.pinimg.com/1200x/ad/74/ff/ad74ff65f9fe91d0903030b96d0b0c9d.jpg",
        },
        {
          title: "IPTV Service",
          description: "Watch your favorite channels and programs online with high quality and uninterrupted streaming.",
          image: "https://i.pinimg.com/736x/41/c6/69/41c669ae5ea5e9fdf3a44cabec45b0d1.jpg",
        },
        {
          title: "Fiber & Coverage Check",
          description: "Check if your area is covered by our fiber or wireless network and enjoy modern, reliable connectivity.",
          image: "https://i.pinimg.com/1200x/95/be/85/95be853d110e6cf0624939d410cd53a8.jpg",
        },
      ],
      
    },
   "aboutPage": {
    "backHome": "Back to Home",
    "description": "Our company specializes in advanced networking solutions. We provide high-quality routers, switches, and accessories for businesses and homes across Syria.",
    "branchesTitle": "Branches:",
    "branches": [
      "Damascus - Main Office",
      "Aleppo - Northern Branch",
      "Lattakia - Coastal Branch"
    ],
    "mapTitle": "Damascus Map",
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26594.595905696384!2d36.38504965595966!3d33.57092329384799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518ef84a8e817bb%3A0xaffd77b97246862b!2sDuma%2C%20Syria!5e0!3m2!1sen!2sjp!4v1760824393916!5m2!1sen!2sjp"
  },
offers: {
  title: "Our Latest Offers",
  subtitle: "Choose the Plan That Fits You",
  billingMonthly: "Monthly",
  billingAnnually: "Annually",
  plans: [
    {
      name: "Starter",
      description: "Balanced performance for homes and small offices.",
      features: [
        "Up to 50 Mbps speed",
        "Free router on annual plans",
        "Stable wireless coverage",
      ],
      monthly: 15,
      annual: 150,
      cta: "Get Started",
    },
    {
      name: "Lite",
      description: "Simple, fast, and affordable internet for everyday users.",
      features: [
        "Up to 15 Mbps speed",
        "24/7 technical support",
        "No installation fee",
        "Easy online subscription",
      ],
      monthly: 10,
      annual: 100,
      cta: "Choose Lite",
    },
    {
      name: "Pro",
      description: "Powerful connectivity built for professionals and businesses.",
      features: [
        "Up to 100 Mbps speed",
        "Guaranteed uptime 99%",
        "Static IP option available",
      ],
      monthly: 25,
      annual: 250,
      cta: "Upgrade plan",
    },
  ],
},

team: {
  title: "Meet the team behind SAM",
  desc: "Learn about the professionals who design, deploy and support our network — committed to delivering reliable internet and great customer service.",
  members: [
    { name: "Khaled Abdel Raouf", role: "Technical & IT Manager" },
    { name: "Hatem Al-Mahbani", role: "Project Manager" },
    { name: "Khaled Abdel Aziz", role: "CEO" },
  ],
},
contact: {
  title: "Contact Us",
  desc: "Feel free to contact us anytime. We’ll get back to you as soon as possible.",
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending...",
  },
  info: {
    title: "Info",
    email: "Email",
    phone: "Phone",
    contact: "Contact",
    hours: "Hours",
    emailValue: "info@samsa.com",
    phoneValue: "+9955442318",
    contactValue: "John",
    hoursValue: "08:30 — 17:30",
  },

},
  faq: {
  title1: "Any questions?",
  title2: "We got you.",
  desc: "Yet bed any indulgence unpleasing. Joy alteration boisterous attachment. Exercise blessing thoughts way everything.",
  more: "More FAQs →",
  list: [
    {
      q: "What makes Sam company's internet and communication services different from other providers in Syria?",
      a: "Sam offers fast, reliable internet with wide coverage, 24/7 support, modern solutions like IPTV, and flexible plans for homes and businesses.",
    },
    {
      q: "What types of internet services does Sam provide?",
      a: "We provide Home Internet, Business Internet, IPTV services, and fiber/coverage checks — with tailored packages and support levels for each use case.",
    },
    {
      q: "Which cities in Syria are covered by Sam's network?",
      a: "Coverage is expanding nationwide. Please contact support with your address to confirm current availability and nearest rollout plans.",
    },
    {
      q: "Who is the current CEO of Sam company?",
      a: "Khaled Abdel Aziz is the CEO of Sam company.",
    },
  ],
},
news: {
  title: "Latest News & Updates",
  posts: [
    {
      id: "sam-expands-fiber",
      title: "Sam Expands Fiber Network to New Cities",
      date: "Sep 17, 2024",
      time: "7 min read",
      content:
        "Sam is expanding its fiber backbone to reach new cities, improving capacity and reducing latency. Detailed rollout plans, timelines and expected customer benefits are provided in this article.",
      image: "https://i.pinimg.com/736x/7b/5f/0a/7b5f0a8cadef17cfe1108515bab582d4.jpg",
    },
    {
      id: "launch-new-plans",
      title: "Launch of New High-Speed Internet Plans",
      date: "Sep 20, 2024",
      time: "10 min read",
      content:
        "We introduced a set of new plans optimized for families and remote workers — includes details on speeds, pricing, and promotional offers.",
      image: "https://i.pinimg.com/736x/6e/11/2a/6e112add458c8282b9901af85e4a29f0.jpg",
    },
    {
      id: "iptv-services",
      title: "IPTV Services Now Available Across Syria",
      date: "Sep 24, 2024",
      time: "3 min read",
      content:
        "IPTV service is now available with a modern interface, content partnerships and low-latency streaming. This post explains packages and compatibility.",
      image: "https://i.pinimg.com/736x/91/60/61/9160610368326ee277e48fa711679026.jpg",
    },
  ],
},
footer: {
      description: "Sam Company — reliable internet & communication services across Syria.",
      email: "info@samsa.com",
      phone: "+995 544 2318",
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        about: "About",
        services: "Services",
        news: "News",
        contact: "Contact",
      },
      services: {
        title: "Services",
        homeInternet: "Home Internet",
        businessInternet: "Business Internet",
        iptv: "IPTV Service",
        coverage: "Fiber & Coverage Check",
      },
      newsletter: {
        title: "Stay Updated",
        description: "Subscribe for news, offers and updates.",
        placeholder: "Your email",
        button: "Subscribe",
      },
      privacy: "Privacy",
      terms: "Terms",
      rights: "© {{year}} Sam Company. All rights reserved.",
    },

 },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      offers: "العروض",
      team: "الفريق",
      faq: "الأسئلة",
      contact: "اتصل بنا",
    },
    top: {
      arabic: "العربية",
      english: "English",
      email: "info@samsa.com",
    },
    hero: {
      pre: "سام",
      title: "– الشبكة التي توحّدنا",
      desc: "من دمشق إلى حلب، من الساحل إلى الصحراء — تقدم SAM إنترنت سريع وموثوق لكل منزل ومؤسسة عبر البلاد.",
      cta: "اقرأ المزيد »",
    },
    contact1: {
      title: "اتصل بنا",
      send: "إرسال",
    },
    about: {
      title: "من نحن",
      desc: "سام هي شركة تكنولوجيا سورية تأسست في 2013، متخصصة في تقديم خدمات الإنترنت والاتصالات الحديثة.",
      cards: [
        {
          title: "مهمتنا",
          body: "تقديم خدمات إنترنت سريعة ومستقرة ومبتكرة تلبي الاحتياجات الرقمية المتزايدة لعملائنا.",
        },
        {
          title: "رؤيتنا",
          body: "أن نكون شركة تكنولوجية رائدة في سوريا، نمكّن المجتمعات باتصال إنترنت متقدّم وموثوق.",
        },
        {
          title: "أهدافنا",
          body: [
            "توسيع التغطية الوطنية",
            "تحسين دعم العملاء",
            "تعزيز النمو الرقمي",
          ],
        },
      ],
    },
    services: {
      title: "الخدمات",
      desc: "نقدم حلول إنترنت موثوقة وعالية الجودة للمنازل والشركات — خدمات مصممة لتعزيز تجربتك على الإنترنت.",
      list: [
        {
          title: "الإنترنت المنزلي",
          description: "استمتع بإنترنت سريع ومستقر لمنزلك مع تغطية واسعة ودعم فني مستمر.",
          image: "https://i.pinimg.com/736x/88/06/16/880616900f6bd4c6287013832e8ebdaf.jpg",
        },
        {
          title: "إنترنت الأعمال",
          description: "اتصالات عالية السرعة وآمنة مصممة لتلبية احتياجات الشركات والمؤسسات.",
          image: "https://i.pinimg.com/1200x/ad/74/ff/ad74ff65f9fe91d0903030b96d0b0c9d.jpg",
        },
        {
          title: "خدمة IPTV",
          description: "شاهد قنواتك وبرامجك المفضلة عبر الإنترنت بجودة عالية وبدون انقطاع.",
          image: "https://i.pinimg.com/736x/41/c6/69/41c669ae5ea5e9fdf3a44cabec45b0d1.jpg",
        },
        {
          title: "التحقق من الألياف والتغطية",
          description: "تحقق مما إذا كانت منطقتك مغطاة بشبكة الألياف أو اللاسلكية واستمتع باتصال حديث وموثوق.",
          image: "https://i.pinimg.com/1200x/95/be/85/95be853d110e6cf0624939d410cd53a8.jpg",
        },
      ],
    },

offers: {
  title: "أحدث عروضنا",
  subtitle: "اختر الخطة التي تناسبك",
  billingMonthly: "شهريًا",
  billingAnnually: "سنويًا",
  plans: [
    {
      name: "المبتدئ",
      description: "أداء متوازن للمنازل والمكاتب الصغيرة.",
      features: [
        "سرعة تصل إلى 50 ميجابت",
        "راوتر مجاني مع الخطط السنوية",
        "تغطية لاسلكية مستقرة",
      ],
      monthly: 15,
      annual: 150,
      cta: "ابدأ الآن",
    },
    {
      name: "الباقة الخفيفة",
      description: "إنترنت بسيط وسريع وبسعر مناسب للمستخدمين اليوميين.",
      features: [
        "سرعة تصل إلى 15 ميجابت",
        "دعم فني على مدار الساعة",
        "بدون رسوم تركيب",
        "اشتراك سهل عبر الإنترنت",
      ],
      monthly: 10,
      annual: 100,
      cta: "اختر الباقة الخفيفة",
    },
    {
      name: "المحترف",
      description: "اتصال قوي مصمم للمحترفين والشركات.",
      features: [
        "سرعة تصل إلى 100 ميجابت",
        "توافر مضمون بنسبة 99%",
        "خيار IP ثابت متاح",
      ],
      monthly: 25,
      annual: 250,
      cta: "ترقية الخطة",
    },
  ],
},

team: {
  title: "تعرّف على الفريق وراء سام",
  desc: "تعرّف على الخبراء الذين يصممون ويديرون ويدعمون شبكتنا — ملتزمون بتقديم إنترنت موثوق وخدمة عملاء مميزة.",
  members: [
    { name: "خالد عبد الرؤوف", role: "مدير التقنية وتقنية المعلومات" },
    { name: "حاتم المحباني", role: "مدير المشاريع" },
    { name: "خالد عبد العزيز", role: "المدير التنفيذي" },
  ],
},
contact: {
  title: "اتصل بنا",
  desc: "لا تتردد في التواصل معنا في أي وقت، سنقوم بالرد عليك في أقرب وقت ممكن.",
  form: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال",
    sending: "جاري الإرسال...",
  },
  info: {
    title: "المعلومات",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    contact: "المسؤول",
    hours: "ساعات العمل",
    emailValue: "info@samsa.com",
    phoneValue: "+9955442318",
    contactValue: "جون",
    hoursValue: "08:30 — 17:30",
  },
},

  faq: {
  title1: "هل لديك أسئلة؟",
  title2: "لدينا الإجابة.",
  desc: "هل لديك أي استفسار؟ نحن هنا لمساعدتك في كل ما يتعلق بخدمات الإنترنت والاتصالات لدينا.",
  more: "المزيد من الأسئلة →",
  list: [
    {
      q: "ما الذي يجعل خدمات شركة سام للإنترنت والاتصالات مميزة عن غيرها في سوريا؟",
      a: "تقدم سام إنترنت سريع وموثوق بتغطية واسعة، دعم فني على مدار الساعة، حلول حديثة مثل IPTV، وخطط مرنة للمنازل والأعمال.",
    },
    {
      q: "ما هي أنواع خدمات الإنترنت التي تقدمها شركة سام؟",
      a: "نقدم إنترنت منزلي، إنترنت للأعمال، خدمة IPTV، وخدمة التحقق من الألياف والتغطية — مع باقات ودعم مصمم لكل استخدام.",
    },
    {
      q: "ما هي المدن السورية التي تغطيها شبكة سام؟",
      a: "التغطية تتوسع باستمرار على مستوى البلاد. يرجى التواصل مع الدعم للتحقق من توفر الخدمة في منطقتك.",
    },
    {
      q: "من هو المدير التنفيذي الحالي لشركة سام؟",
      a: "خالد عبد العزيز هو المدير التنفيذي لشركة سام.",
    },
  ],
},
news: {
  title: "آخر الأخبار والتحديثات",
  posts: [
    {
      id: "sam-expands-fiber",
      title: "سام توسّع شبكة الألياف إلى مدن جديدة",
      date: "17 أيلول 2024",
      time: "7 دقائق قراءة",
      content:
        "تقوم شركة سام بتوسيع شبكة الألياف الخاصة بها لتغطية مدن جديدة، مما يحسّن السعة ويقلّل من زمن التأخير. يحتوي هذا المقال على تفاصيل الخطط والفوائد المتوقعة للعملاء.",
      image: "https://i.pinimg.com/736x/7b/5f/0a/7b5f0a8cadef17cfe1108515bab582d4.jpg",
    },
    {
      id: "launch-new-plans",
      title: "إطلاق خطط إنترنت جديدة عالية السرعة",
      date: "20 أيلول 2024",
      time: "10 دقائق قراءة",
      content:
        "قدّمنا مجموعة جديدة من الخطط المصمّمة للعائلات والعاملين عن بُعد — تتضمن تفاصيل السرعات والأسعار والعروض الترويجية.",
      image: "https://i.pinimg.com/736x/6e/11/2a/6e112add458c8282b9901af85e4a29f0.jpg",
    },
    {
      id: "iptv-services",
      title: "خدمة IPTV أصبحت متوفرة الآن في سوريا",
      date: "24 أيلول 2024",
      time: "3 دقائق قراءة",
      content:
        "أصبحت خدمة IPTV متاحة الآن بواجهة حديثة وشراكات محتوى وبث منخفض التأخير. يشرح هذا المنشور الباقات والتوافق.",
      image: "https://i.pinimg.com/736x/91/60/61/9160610368326ee277e48fa711679026.jpg",
    },
  ],
},
 footer: {
      description: "شركة سام — خدمات إنترنت واتصالات موثوقة في جميع أنحاء سوريا.",
      email: "info@samsa.com",
      phone: "+995 544 2318",
      quickLinks: {
        title: "روابط سريعة",
        home: "الرئيسية",
        about: "حول الشركة",
        services: "الخدمات",
        news: "الأخبار",
        contact: "اتصل بنا",
      },
      services: {
        title: "الخدمات",
        homeInternet: "إنترنت منزلي",
        businessInternet: "إنترنت أعمال",
        iptv: "خدمة IPTV",
        coverage: "فحص الألياف والتغطية",
      },
      newsletter: {
        title: "ابقَ على اطلاع",
        description: "اشترك لتصلك الأخبار والعروض والتحديثات.",
        placeholder: "بريدك الإلكتروني",
        button: "اشترك",
      },
      privacy: "الخصوصية",
      terms: "الشروط",
      rights: "© {{year}} شركة سام. جميع الحقوق محفوظة.",
    },
     "aboutPage": {
    "backHome": "العودة إلى الصفحة الرئيسية",
    "description": "تختص شركتنا في حلول الشبكات المتقدمة. نقدم أجهزة توجيه ومفاتيح وإكسسوارات عالية الجودة للأعمال والمنازل في جميع أنحاء سوريا.",
    "branchesTitle": "الفروع:",
    "branches": [
      "دمشق - المكتب الرئيسي",
      "حلب - الفرع الشمالي",
      "اللاذقية - الفرع الساحلي"
    ],
    "mapTitle": "خريطة دمشق",
    "mapSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26594.595905696384!2d36.38504965595966!3d33.57092329384799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518ef84a8e817bb%3A0xaffd77b97246862b!2sDuma%2C%20Syria!5e0!3m2!1sen!2sjp!4v1760824393916!5m2!1sen!2sjp"
   }
}
};
const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children, defaultLang = "en" }) {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      if (!key) return "";
      const parts = key.split(".");
      let obj = translations[lang] || {};
      for (const p of parts) {
        obj = obj?.[p];
        if (obj === undefined) return key;
      }
      return obj ?? key;
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export default LanguageProvider;
