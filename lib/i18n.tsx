"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Locale = "ar" | "en"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dir: "rtl" | "ltr"
}

const translations = {
  ar: {
    // Navigation
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.stats": "أرقامنا",
    "nav.works": "أعمالنا",
    "nav.solutions": "حلولنا",
    "nav.contact": "تواصل معنا",
    
    // Solutions
    "solutions.exhibition": "حلول نمو مبيعات المعارض",
    "solutions.salesGrowth": "نظام نمو المبيعات",
    
    // Hero
    "hero.title": "الظاهرية للتسويق",
    "hero.subtitle": "نبتكر الحلول، لنصنع الظهور المستحق لعلامتك التجارية",
    "hero.cta.services": "تصفح خدماتنا",
    "hero.cta.contact": "تواصل معنا",
    
    // Marquee
    "marquee.analytics": "تحليل البيانات",
    "marquee.automation": "أتمتة العمليات",
    "marquee.branding": "بناء الهوية",
    "marquee.digital": "التسويق الرقمي",
    "marquee.creative": "المحتوى الإبداعي",
    
    // Stats
    "stats.clients": "عميل",
    "stats.sales": "إجمالي مبيعات عملائنا",
    "stats.projects": "مشروع منجز",
    "stats.years": "سنوات خبرة",
    
    // About
    "about.tag": "من نحن",
    "about.title": "نبسّط الأعمال بالأتمتة الذكية، لتحقيق الكفاءة والنمو",
    "about.description": "مع سنوات من الخبرة في التسويق الرقمي، نساعد الشركات على تبسيط العمليات المعقدة وتقليل التكاليف وتسريع النمو. مهمتنا هي الجمع بين الابتكار والموثوقية، لضمان تحقيق نتائج قابلة للقياس ونجاح طويل الأمد.",
    
    // Services
    "services.tag": "خدماتنا",
    "services.title": "منظومة حلولنا الاستراتيجية",
    "services.subtitle": "حلول تسويقية مبتكرة لتحديث عملياتك الرقمية وتعزيز تواجدك",
    "services.cta": "تواصل معنا",
    
    "service.planning.title": "التخطيط التسويقي والاستشارات",
    "service.planning.desc": "صياغة استراتيجيات قائمة على تحليل البيانات لضمان التفوق التنافسي.",
    
    "service.development.title": "تطوير الأعمال",
    "service.development.desc": "استكشاف فرص النمو وبناء شراكات مستدامة تعزز القيمة السوقية.",
    
    "service.photography.title": "التصوير والإعلانات",
    "service.photography.desc": "إنتاج محتوى مرئي يخاطب الحواس ويجسد جوهر علامتك التجارية.",
    
    "service.media.title": "إدارة حسابات الميديا",
    "service.media.desc": "إدارة ذكية للمجتمعات الرقمية تعزز من تفاعل وولاء جمهورك.",
    
    "service.design.title": "خدمات التصميم",
    "service.design.desc": "إبداع فني يترجم الرؤية إلى هوية بصرية فريدة وراسخة.",
    
    "service.tech.title": "الخدمات التقنية",
    "service.tech.desc": "حلول برمجية متكاملة تدعم التحول الرقمي لمنشأتك بكفاءة.",
    
    "service.seo.title": "تحسين محركات البحث",
    "service.seo.desc": "تحسين الظهور الرقمي للسيطرة على نتائج البحث الأولى عالمياً.",
    
    "service.industrial.title": "التسويق الصناعي",
    "service.industrial.desc": "حلول متخصصة لتسويق المنتجات والخدمات في القطاع الصناعي.",
    
    "service.events.title": "تغطية المعارض والمؤتمرات",
    "service.events.desc": "حضور استراتيجي وتغطية شاملة تضمن نجاح فعالياتك الكبرى.",
    
    // Works
    "works.tag": "أعمالنا",
    "works.title": "بعض من أعمالنا",
    "works.subtitle": "مشاريع مبنية للسرعة والاحترافية، مصممة لدفع أعمالك للأمام",
    "works.cta": "تواصل معنا",
    "works.play": "تشغيل",
    "works.saudi": "المشاريع السعودية",
    "works.international": "الشركات العالمية",
    
    // Partners
    "partners.tag": "شركاؤنا",
    "partners.title": "نعتز بثقتهم",
    
    // Testimonials
    "testimonials.tag": "آراء العملاء",
    "testimonials.title": "قالوا عن الظاهرية للتسويق",
    
    // Contact
    "contact.tag": "تواصل معنا",
    "contact.title": "دعنا نبدأ رحلة النجاح",
    "contact.subtitle": "تقدر تتواصل معنا عبر الجوال أو البريد الإلكتروني، أو تحجز استشارة مباشرة",
    
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الجوال",
    "contact.form.service": "اختر الخدمة المطلوبة",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال الطلب الآن",
    
    "contact.service.planning": "التخطيط التسويقي والاستشارات",
    "contact.service.development": "تطوير الأعمال",
    "contact.service.photography": "التصوير والإعلانات",
    "contact.service.media": "إدارة حسابات الميديا",
    "contact.service.design": "خدمات التصميم",
    "contact.service.tech": "الخدمات التقنية",
    "contact.service.seo": "تحسين محركات البحث SEO",
    "contact.service.industrial": "التسويق الصناعي",
    "contact.service.events": "تغطية المعارض والمؤتمرات",
    
    "contact.info.address.label": "عنواننا",
    "contact.info.address": "الرياض، المملكة العربية السعودية",
    "contact.info.hours.label": "ساعات العمل",
    "contact.info.hours": "الأحد – الخميس: 9:00 صباحاً حتى 6:00 مساءً",
    "contact.info.phone.label": "رقم التواصل",
    "contact.info.email.label": "البريد الإلكتروني",
    
    "contact.cta.whatsapp": "تواصل واتساب",
    "contact.cta.booking": "احجز استشارة",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.company": "الظاهرية للتسويق",
  },
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.stats": "Our Numbers",
    "nav.works": "Our Works",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact Us",
    
    // Solutions
    "solutions.exhibition": "Exhibition Growth Engine",
    "solutions.salesGrowth": "Sales Growth System",
    
    // Hero
    "hero.title": "Al-Zaheria Marketing",
    "hero.subtitle": "We innovate solutions to create the deserved visibility for your brand",
    "hero.cta.services": "Browse Services",
    "hero.cta.contact": "Contact Us",
    
    // Marquee
    "marquee.analytics": "Data Analytics",
    "marquee.automation": "Process Automation",
    "marquee.branding": "Brand Building",
    "marquee.digital": "Digital Marketing",
    "marquee.creative": "Creative Content",
    
    // Stats
    "stats.clients": "Clients",
    "stats.sales": "Total Client Sales",
    "stats.projects": "Completed Projects",
    "stats.years": "Years of Experience",
    
    // About
    "about.tag": "About Us",
    "about.title": "We simplify business with intelligent automation, driving efficiency and growth",
    "about.description": "With years of expertise in digital marketing, we help companies simplify complex operations, reduce costs, and accelerate growth. Our mission is to combine innovation and reliability, ensuring every client experiences measurable results and long-term success.",
    
    // Services
    "services.tag": "Our Services",
    "services.title": "Our Strategic Solutions System",
    "services.subtitle": "Innovative marketing solutions to modernize your digital operations and enhance your presence",
    "services.cta": "Contact Us",
    
    "service.planning.title": "Marketing Planning & Consulting",
    "service.planning.desc": "Crafting data-driven strategies to ensure competitive excellence.",
    
    "service.development.title": "Business Development",
    "service.development.desc": "Exploring growth opportunities and building sustainable partnerships that enhance market value.",
    
    "service.photography.title": "Photography & Advertising",
    "service.photography.desc": "Producing visual content that speaks to the senses and embodies your brand essence.",
    
    "service.media.title": "Social Media Management",
    "service.media.desc": "Smart management of digital communities that enhances audience engagement and loyalty.",
    
    "service.design.title": "Design Services",
    "service.design.desc": "Artistic creativity that translates vision into a unique and lasting visual identity.",
    
    "service.tech.title": "Technical Services",
    "service.tech.desc": "Integrated software solutions that efficiently support your organization's digital transformation.",
    
    "service.seo.title": "Search Engine Optimization",
    "service.seo.desc": "Improving digital visibility to dominate top search results globally.",
    
    "service.industrial.title": "Industrial Marketing",
    "service.industrial.desc": "Specialized solutions for marketing products and services in the industrial sector.",
    
    "service.events.title": "Exhibition & Conference Coverage",
    "service.events.desc": "Strategic presence and comprehensive coverage ensuring the success of your major events.",
    
    // Works
    "works.tag": "Our Works",
    "works.title": "Some of Our Works",
    "works.subtitle": "Projects built for speed and professionalism, designed to move your business forward",
    "works.cta": "Contact Us",
    "works.play": "Play",
    "works.saudi": "Saudi Projects",
    "works.international": "International Companies",
    
    // Partners
    "partners.tag": "Our Partners",
    "partners.title": "Trusted By The Best",
    
    // Testimonials
    "testimonials.tag": "Testimonials",
    "testimonials.title": "What They Say About Al-Zaheria",
    
    // Contact
    "contact.tag": "Contact Us",
    "contact.title": "Let's Start Your Success Journey",
    "contact.subtitle": "You can reach us via phone or email, or book a consultation directly",
    
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.service": "Select Required Service",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Request Now",
    
    "contact.service.planning": "Marketing Planning & Consulting",
    "contact.service.development": "Business Development",
    "contact.service.photography": "Photography & Advertising",
    "contact.service.media": "Social Media Management",
    "contact.service.design": "Design Services",
    "contact.service.tech": "Technical Services",
    "contact.service.seo": "Search Engine Optimization SEO",
    "contact.service.industrial": "Industrial Marketing",
    "contact.service.events": "Exhibition & Conference Coverage",
    
    "contact.info.address.label": "Our Address",
    "contact.info.address": "Riyadh, Saudi Arabia",
    "contact.info.hours.label": "Working Hours",
    "contact.info.hours": "Sunday – Thursday: 9:00 AM to 6:00 PM",
    "contact.info.phone.label": "Phone Number",
    "contact.info.email.label": "Email Address",
    
    "contact.cta.whatsapp": "WhatsApp Chat",
    "contact.cta.booking": "Book Consultation",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.company": "Al-Zaheria Marketing",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale
    if (saved && (saved === "ar" || saved === "en")) {
      setLocaleState(saved)
    }
    setIsHydrated(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr"
  }

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    }
  }, [locale, isHydrated])

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations.ar] || key
  }

  const dir = locale === "ar" ? "rtl" : "ltr"

  // Wait for hydration to complete before rendering to avoid mismatch
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-black" suppressHydrationWarning>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#450a71] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
