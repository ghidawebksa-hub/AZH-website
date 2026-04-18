"use client"

import { I18nProvider, useI18n } from "@/lib/i18n"
import { Globe, ArrowRight, ArrowLeft, Users, Target, Calendar, Bot, TrendingUp, Zap, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function SalesGrowthContent() {
  const { locale, setLocale, dir } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = locale === "ar" ? {
    // Header
    backToHome: "العودة للرئيسية",
    langSwitch: "EN",
    
    // Hero
    heroTag: "نظام نمو المبيعات",
    heroTitle: "حوّل التسويق إلى مصدر مباشر للمبيعات",
    heroSubtitle: "نظام متكامل لمساعدة المصانع على تحقيق النمو من خلال جذب العملاء المحتملين، توليد الفرص، وأتمتة عملية حجز الاجتماعات",
    heroCta: "احجز استشارتك المجانية",
    heroWhatsapp: "تواصل واتساب",
    
    // Benefits
    benefitsTag: "المميزات",
    benefitsTitle: "ماذا يحقق لك هذا النظام؟",
    benefits: [
      { icon: "users", title: "جذب عملاء محتملين", desc: "من السوق المستهدف" },
      { icon: "target", title: "توليد فرص بيع", desc: "بشكل مستمر" },
      { icon: "calendar", title: "تحويل الاهتمام", desc: "إلى اجتماعات مجدولة" },
      { icon: "bot", title: "أتمتة المتابعة", desc: "جزء كبير من عملية المتابعة" },
      { icon: "zap", title: "تقليل الاعتماد", desc: "على الجهد اليدوي" },
      { icon: "trending", title: "رفع كفاءة الفريق", desc: "وزيادة فرص الإغلاق" },
    ],
    
    // How it works
    howTag: "كيف يعمل النظام؟",
    howTitle: "خمس خطوات لتحويل التسويق إلى مبيعات",
    howSubtitle: "نظام مصمم ليجعل فريق المبيعات يركز على ما يهم فعليًا: حضور الاجتماعات، متابعة العملاء، وإغلاق الصفقات",
    steps: [
      {
        step: "01",
        title: "جذب العملاء المحتملين",
        subtitle: "الاستهداف الذكي",
        desc: "نستهدف الشركات والعملاء المناسبين عبر قنوات متعددة، لضمان وصول المصنع للفئة التي لديها اهتمام فعلي."
      },
      {
        step: "02",
        title: "توليد الاهتمام",
        subtitle: "المحتوى الموجه",
        desc: "نقوم بتحويل هذا الوصول إلى اهتمام حقيقي من خلال رسائل واضحة ومحتوى موجه يعكس قيمة المصنع وقدرته."
      },
      {
        step: "03",
        title: "تحويل الاهتمام إلى اجتماعات",
        subtitle: "الحجز المباشر",
        desc: "كل عميل مهتم يتم توجيهه مباشرة إلى خطوة واضحة: تسجيل بياناته أو حجز اجتماع أونلاين بشكل مباشر، مع إرسال رسائل متابعة تلقائية."
      },
      {
        step: "04",
        title: "أتمتة المتابعة",
        subtitle: "النظام الذكي",
        desc: "يتم تنظيم العملاء المحتملين داخل نظام متابعة واضح: تسجيل كل عميل، إرسال ردود أولية تلقائيًا، متابعة منظمة، وتوجيههم نحو القرار."
      },
      {
        step: "05",
        title: "تمكين فريق المبيعات",
        subtitle: "التركيز على الإغلاق",
        desc: "بدلاً من إضاعة الوقت في البحث عن العملاء والمراسلات الأولية والمتابعة اليدوية، يركز فريقك على إغلاق الصفقات."
      },
    ],
    
    // Stats
    statsTag: "أرقامنا",
    statsTitle: "نتائج حقيقية مع عملائنا",
    stats: [
      { value: "85%", label: "زيادة في العملاء المحتملين" },
      { value: "3x", label: "نمو في الاجتماعات المجدولة" },
      { value: "60%", label: "توفير في وقت الفريق" },
      { value: "40%", label: "زيادة في معدل الإغلاق" },
    ],
    
    // Case Study
    caseTag: "دراسة حالة",
    caseTitle: "كيف ساعدنا مصنعًا على مضاعفة مبيعاته",
    caseChallenge: "التحدي",
    caseChallengeText: "مصنع متخصص يعاني من ضعف في توليد العملاء المحتملين وفريق مبيعات يقضي معظم وقته في البحث بدلاً من البيع.",
    caseSolution: "الحل",
    caseSolutionText: "تطبيق نظام نمو المبيعات المتكامل مع أتمتة كاملة للمتابعة وتوليد الاجتماعات.",
    caseResults: "النتائج",
    caseResultsList: [
      "زيادة 150% في العملاء المحتملين خلال 3 أشهر",
      "تحويل 40% من الاهتمام إلى اجتماعات فعلية",
      "توفير 20 ساعة أسبوعيًا لفريق المبيعات",
      "نمو 85% في إجمالي المبيعات"
    ],
    
    // Contact
    contactTag: "ابدأ الآن",
    contactTitle: "جاهز لتحويل تسويقك إلى مبيعات؟",
    contactSubtitle: "احجز استشارة مجانية لمعرفة كيف يمكننا مساعدتك",
    
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الجوال",
    formCompany: "اسم الشركة",
    formMessage: "كيف يمكننا مساعدتك؟",
    formSubmit: "أرسل طلبك",
    formSuccess: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً",
    formError: "حدث خطأ، يرجى المحاولة مرة أخرى",
    
    whatsappCta: "تواصل عبر واتساب",
    bookingCta: "احجز استشارة مباشرة",
    
    addressLabel: "العنوان",
    address: "الرياض، المملكة العربية السعودية",
    phoneLabel: "الهاتف",
    emailLabel: "البريد",
  } : {
    // Header
    backToHome: "Back to Home",
    langSwitch: "عربي",
    
    // Hero
    heroTag: "Sales Growth System",
    heroTitle: "Transform Marketing into a Direct Sales Source",
    heroSubtitle: "An integrated system to help factories achieve growth by attracting potential customers, generating opportunities, and automating meeting scheduling",
    heroCta: "Book Your Free Consultation",
    heroWhatsapp: "WhatsApp Chat",
    
    // Benefits
    benefitsTag: "Benefits",
    benefitsTitle: "What Does This System Achieve for You?",
    benefits: [
      { icon: "users", title: "Attract Potential Customers", desc: "From your target market" },
      { icon: "target", title: "Generate Sales Opportunities", desc: "Continuously" },
      { icon: "calendar", title: "Convert Interest", desc: "Into scheduled meetings" },
      { icon: "bot", title: "Automate Follow-up", desc: "A large part of the process" },
      { icon: "zap", title: "Reduce Dependency", desc: "On manual effort" },
      { icon: "trending", title: "Boost Team Efficiency", desc: "And increase closing rates" },
    ],
    
    // How it works
    howTag: "How It Works",
    howTitle: "Five Steps to Transform Marketing into Sales",
    howSubtitle: "A system designed to let your sales team focus on what truly matters: attending meetings, following up with clients, and closing deals",
    steps: [
      {
        step: "01",
        title: "Attract Potential Customers",
        subtitle: "Smart Targeting",
        desc: "We target the right companies and customers through multiple channels, ensuring your factory reaches those with genuine interest."
      },
      {
        step: "02",
        title: "Generate Interest",
        subtitle: "Targeted Content",
        desc: "We convert this reach into genuine interest through clear messages and targeted content that reflects your factory's value and capability."
      },
      {
        step: "03",
        title: "Convert Interest to Meetings",
        subtitle: "Direct Booking",
        desc: "Every interested customer is directed to a clear step: register their data or book an online meeting directly, with automatic follow-up messages."
      },
      {
        step: "04",
        title: "Automate Follow-up",
        subtitle: "Smart System",
        desc: "Potential customers are organized in a clear follow-up system: register every customer, send automatic initial responses, organized follow-up, and guide them to decision."
      },
      {
        step: "05",
        title: "Empower Sales Team",
        subtitle: "Focus on Closing",
        desc: "Instead of wasting time searching for customers, initial correspondence, and manual follow-up, your team focuses on closing deals."
      },
    ],
    
    // Stats
    statsTag: "Our Numbers",
    statsTitle: "Real Results with Our Clients",
    stats: [
      { value: "85%", label: "Increase in Potential Customers" },
      { value: "3x", label: "Growth in Scheduled Meetings" },
      { value: "60%", label: "Team Time Saved" },
      { value: "40%", label: "Increase in Closing Rate" },
    ],
    
    // Case Study
    caseTag: "Case Study",
    caseTitle: "How We Helped a Factory Double Its Sales",
    caseChallenge: "The Challenge",
    caseChallengeText: "A specialized factory struggling with weak lead generation and a sales team spending most of their time searching instead of selling.",
    caseSolution: "The Solution",
    caseSolutionText: "Implementing the integrated Sales Growth System with full automation of follow-up and meeting generation.",
    caseResults: "The Results",
    caseResultsList: [
      "150% increase in potential customers within 3 months",
      "40% conversion of interest into actual meetings",
      "20 hours saved weekly for the sales team",
      "85% growth in total sales"
    ],
    
    // Contact
    contactTag: "Start Now",
    contactTitle: "Ready to Transform Your Marketing into Sales?",
    contactSubtitle: "Book a free consultation to learn how we can help you",
    
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formCompany: "Company Name",
    formMessage: "How can we help you?",
    formSubmit: "Send Your Request",
    formSuccess: "Your request has been sent successfully! We will contact you soon",
    formError: "An error occurred, please try again",
    
    whatsappCta: "Chat on WhatsApp",
    bookingCta: "Book Direct Consultation",
    
    addressLabel: "Address",
    address: "Riyadh, Saudi Arabia",
    phoneLabel: "Phone",
    emailLabel: "Email",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyqLRSQhZhsV2SvBNV0q8sLKj8yNVmvl3xVHuCi_-qQ7GJwSJAbr5-UQpuSGjU1LXFX/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Sales Growth System Page",
          timestamp: new Date().toISOString()
        })
      })
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-6 h-6" />,
    target: <Target className="w-6 h-6" />,
    calendar: <Calendar className="w-6 h-6" />,
    bot: <Bot className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    trending: <TrendingUp className="w-6 h-6" />,
  }

  return (
    <div className="min-h-screen bg-black text-white" dir={dir}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-[#260768]/30" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <img
                src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/نسخة-من-بنرات-الموقع-منشور-Instagram-تصميم-45.svg"
                alt="الظاهرية للتسويق"
                className="h-12 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span>{t.langSwitch}</span>
              </button>
              <a
                href="#contact"
                className="hidden md:block bg-[#450a71] hover:bg-[#260768] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9c27b0]/20"
              >
                {t.heroCta}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#260768]/20 via-black to-black" />
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-[#450a71]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-[#9c27b0]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#450a71]/20 border border-[#450a71]/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[#9c27b0] rounded-full animate-pulse" />
              <span className="text-sm text-white/80">{t.heroTag}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-white via-white to-[#9c27b0] bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <a
                href="#contact"
                className="group bg-[#450a71] hover:bg-[#260768] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#9c27b0]/30 flex items-center gap-2"
              >
                {t.heroCta}
                <ArrowLeft className={`w-5 h-5 transition-transform group-hover:${dir === "rtl" ? "-translate-x-1" : "translate-x-1"}`} />
              </a>
              <a
                href="https://wa.me/966555725671"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#450a71] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#450a71]/10 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.heroWhatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#450a71]/20 border border-[#450a71]/30 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              {t.benefitsTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              {t.benefitsTitle}
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#260768]/20 to-transparent border border-[#450a71]/20 rounded-2xl p-6 hover:border-[#9c27b0]/50 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#450a71]/30 rounded-xl flex items-center justify-center text-[#9c27b0] mb-4 group-hover:bg-[#450a71]/50 transition-colors">
                  {iconMap[benefit.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Bombon Style Steps */}
      <section className="py-24 bg-gradient-to-b from-black via-[#260768]/10 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#450a71]/20 border border-[#450a71]/30 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              {t.howTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              {t.howTitle}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {t.howSubtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto space-y-8">
            {t.steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-6 items-start"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#450a71] to-[#260768] rounded-2xl flex flex-col items-center justify-center border border-[#9c27b0]/30 group-hover:border-[#9c27b0] transition-colors">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Step</span>
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-[#260768]/30 to-transparent border border-[#450a71]/20 rounded-2xl p-6 group-hover:border-[#9c27b0]/40 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <span className="text-sm text-[#9c27b0] bg-[#9c27b0]/10 px-3 py-1 rounded-full w-fit">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{step.desc}</p>
                </div>

                {/* Connector Line */}
                {index < t.steps.length - 1 && (
                  <div className="absolute start-10 top-20 w-0.5 h-8 bg-gradient-to-b from-[#450a71] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#260768]/20 via-[#450a71]/10 to-[#260768]/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#450a71]/20 border border-[#450a71]/30 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              {t.statsTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              {t.statsTitle}
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#260768]/40 to-black/40 border border-[#450a71]/30 rounded-2xl p-8 text-center hover:border-[#9c27b0]/50 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#9c27b0] to-white bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#450a71]/20 border border-[#450a71]/30 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              {t.caseTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              {t.caseTitle}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#260768]/30 to-transparent border border-[#450a71]/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[#9c27b0]">{t.caseChallenge}</h3>
                <p className="text-white/70 leading-relaxed">{t.caseChallengeText}</p>
              </div>
              <div className="bg-gradient-to-br from-[#260768]/30 to-transparent border border-[#450a71]/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[#9c27b0]">{t.caseSolution}</h3>
                <p className="text-white/70 leading-relaxed">{t.caseSolutionText}</p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-[#450a71]/30 to-[#260768]/20 border border-[#9c27b0]/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-[#9c27b0]">{t.caseResults}</h3>
              <ul className="space-y-4">
                {t.caseResultsList.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9c27b0] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black via-[#260768]/10 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#450a71]/20 border border-[#450a71]/30 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              {t.contactTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              {t.contactTitle}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#260768]/30 to-transparent border border-[#450a71]/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">{t.formName}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/50 border border-[#450a71]/30 rounded-xl px-4 py-3 text-white focus:border-[#9c27b0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">{t.formEmail}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-[#450a71]/30 rounded-xl px-4 py-3 text-white focus:border-[#9c27b0] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">{t.formPhone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/50 border border-[#450a71]/30 rounded-xl px-4 py-3 text-white focus:border-[#9c27b0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">{t.formCompany}</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black/50 border border-[#450a71]/30 rounded-xl px-4 py-3 text-white focus:border-[#9c27b0] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">{t.formMessage}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-[#450a71]/30 rounded-xl px-4 py-3 text-white focus:border-[#9c27b0] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-green-400 text-center">
                    {t.formSuccess}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-400 text-center">
                    {t.formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#450a71] hover:bg-[#260768] text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9c27b0]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </span>
                  ) : (
                    t.formSubmit
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/966555725671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-600/30 rounded-xl p-4 hover:border-green-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-600/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{t.whatsappCta}</span>
                </a>
                <a
                  href="https://calendly.com/alzaheriamarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gradient-to-r from-[#450a71]/20 to-[#450a71]/10 border border-[#450a71]/30 rounded-xl p-4 hover:border-[#9c27b0]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#450a71]/30 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#9c27b0]" />
                  </div>
                  <span className="font-medium">{t.bookingCta}</span>
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-[#260768]/30 to-transparent border border-[#450a71]/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#9c27b0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">{t.addressLabel}</p>
                    <p className="text-white/80">{t.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#9c27b0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">{t.phoneLabel}</p>
                    <p className="text-white/80" dir="ltr">+966 55 572 5671</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#9c27b0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">{t.emailLabel}</p>
                    <p className="text-white/80">info@alzaheriamarketing.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="bg-black py-8 text-center border-t border-[#450a71]/30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <Arrow className="w-5 h-5" />
          <span>{t.backToHome}</span>
        </Link>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}

export default function SalesGrowthPage() {
  return (
    <I18nProvider>
      <SalesGrowthContent />
    </I18nProvider>
  )
}
