"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function ExhibitionGrowthPage() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("locale") as "ar" | "en"
    if (saved && (saved === "ar" || saved === "en")) {
      setCurrentLang(saved)
    }
    setIsHydrated(true)
  }, [])

  const toggleLang = () => {
    const newLang = currentLang === "ar" ? "en" : "ar"
    setCurrentLang(newLang)
    localStorage.setItem("locale", newLang)
  }

  const translations = {
    en: {
      langBtn: "العربية",
      heroTitle: "Turn your exhibition participation into...",
      heroHighlight: "60 Days of Sales",
      heroDesc: "At AlZahiriya Marketing, we transform your presence in exhibitions into 60 days of sales through integrated marketing strategies and digital solutions.",
      btnConsult: "Book Your Free Consultation",
      btnExplore: "Discover Our Solutions",
      stat1: "Exhibition Participations",
      stat2: "Conversions for Clients",
      stat3: "Trusted Clients",
      stat4: "Sales Achieved",
      roadmapTitle: "Phases of Transforming Your Participation",
      caseTitle: "Case Study: Exhibition Sales Transformation",
      whyUsTitle: "Why \"AlZahiriya Marketing\"?",
      whyUsDesc: "Based on our previous results, implementing this plan ensures a",
      whyUsGrowth: "Growth up to 40%",
      whyUsEnd: "in the quality and strength of potential deals.",
      contactTitle: "Contact Us",
      locationText: "Riyadh, Faisaliah Tower",
      formName: "Name",
      formPhone: "Phone Number",
      formEmail: "Email",
      formMsg: "Message",
      formSubmit: "Send Now",
      backHome: "Back to Home",
      phases: [
        {
          number: "Phase 01",
          title: "Pre-Exhibition",
          desc: "We build momentum before the event to attract target visitors to your booth.",
          items: [
            { bold: "Strategic Planning:", text: "Preparing a clear marketing plan identifying goals and target audience." },
            { bold: "Teaser Campaigns:", text: "Running pre-event ads to build awareness." },
            { bold: "Infrastructure Setup:", text: "Setting up ad accounts and tracking tools." },
            { bold: "Teaser Content:", text: "Professional video production including concepts and modeling." },
            { bold: "Landing Page:", text: "Creating dedicated pages to capture lead data." },
            { bold: "Automation:", text: "Setting up automated follow-up systems." },
            { bold: "Influencer Marketing:", text: "Collaborating with business and tech influencers." },
          ],
        },
        {
          number: "Phase 02",
          title: "During Exhibition",
          desc: "Converting visitors into real sales opportunities inside the booth.",
          items: [
            { bold: "Live Media Coverage:", text: "Professional photo and video documentation." },
            { bold: "Instant Content:", text: "Fast editing and daily social media posting." },
            { bold: "Data Collection:", text: "Smart system to register leads into the database." },
            { bold: "Booth Activation:", text: "Managing visitor experience to increase interaction." },
            { bold: "Influencer Coverage:", text: "Organizing influencer visits for maximum reach." },
          ],
        },
        {
          number: "Phase 03",
          title: "Data to Sales",
          desc: "Following up with leads to close actual deals after the event.",
          items: [
            { bold: "CRM Management:", text: "Organizing and categorizing visitor data." },
            { bold: "Retargeting Ads:", text: "Targeted campaigns for those who visited the booth." },
            { bold: "Tracking Campaigns:", text: "Following visitors across digital platforms." },
            { bold: "Marketing Outreach:", text: "Email and message campaigns to nurture leads." },
            { bold: "ROI Analysis:", text: "Comprehensive report showing total leads and ROI." },
          ],
        },
      ],
      caseBadge: "45% Increase in Sales",
      caseProjectTitle: "Project: Tech Company in International Expo",
      caseP1: "The company struggled to convert booth visitors into actual clients. We designed an integrated system before, during, and after the exhibition.",
      caseP2: "After the event, retargeting campaigns and email follow-ups contributed to converting a large number of visitors into real sales.",
      caseResultsTitle: "Results Achieved:",
      caseResults: [
        "Generated over <b>2,300 Leads</b>.",
        "<b>45% Increase</b> in sales within 60 days.",
        "Over <b>10.5 Million Views</b> for campaigns.",
        "Converted <b>18%</b> of visitors into sales.",
      ],
    },
    ar: {
      langBtn: "English",
      heroTitle: "حول مشاركتك في المعارض..",
      heroHighlight: " إلى 60 يوم من المبيعات ",
      heroDesc: "نحن في الظاهرية للتسويق نحول وجودكم في المعارض 60 يوماً من المبيعات عبر استراتيجيات تسويقية وحلول رقمية متكاملة.",
      btnConsult: "احجز استشارتك المجانية",
      btnExplore: "اكتشف حلولنا ",
      stat1: "مشاركة في معرض",
      stat2: "عملية تحويل لعملائنا ",
      stat3: "عميل وثق بخدماتنا",
      stat4: "مبيعات حققها عملاؤنا",
      roadmapTitle: "مراحل تحويل مشاركتك الى نمو مستدام ",
      caseTitle: "دراسة حالة: تحويل المشاركة في المعرض إلى مبيعات",
      whyUsTitle: "لماذا \"الظاهرية للتسويق\"؟",
      whyUsDesc: "بناءً على نتائجنا السابقة، تنفيذ هذه الخطة يضمن لك",
      whyUsGrowth: "نمواً يصل إلى 40%",
      whyUsEnd: "في جودة وقوة الصفقات المحتملة.",
      contactTitle: "تواصل معنا",
      locationText: "الرياض، برج الفيصلية",
      formName: "الاسم",
      formPhone: "رقم الهاتف",
      formEmail: "البريد الإلكتروني",
      formMsg: "الرسالة",
      formSubmit: "إرسال الآن",
      backHome: "العودة للرئيسية",
      phases: [
        {
          number: "المرحلة 01",
          title: "ما قبل المعرض",
          desc: "نبني الزخم قبل الحدث لجذب الزوار المستهدفين إلى جناحك.",
          items: [
            { bold: "التخطيط الاستراتيجي:", text: "إعداد خطة تسويقية واضحة تحدد الأهداف والجمهور المستهدف." },
            { bold: "إطلاق الحملات التشويقية:", text: "تشغيل حملات إعلانية مسبقة لبناء الوعي وجذب الزوار إلى جناحك قبل انطلاق المعرض." },
            { bold: "تجهيز البنية التسويقية:", text: "إعداد حسابات الإعلانات وربط أدوات التتبع والتحليلات." },
            { bold: "إنتاج المحتوى التشويقي:", text: "تصوير فيديوهات ترويجية احترافية تشمل الفكرة والمودل والمونتاج." },
            { bold: "تصميم صفحة الهبوط:", text: "إنشاء صفحة مخصصة لتسجيل الزوار وجمع بيانات العملاء المحتملين." },
            { bold: "بناء نظام الأتمتة:", text: "إعداد نظام متابعة تلقائي لإدارة بيانات العملاء والتواصل معهم." },
            { bold: "التسويق عبر المؤثرين:", text: "التعاون مع مؤثرين في مجالات الأعمال والتقنية لزيادة الوعي بالمعرض." },
          ],
        },
        {
          number: "المرحلة 02",
          title: "أثناء المعرض",
          desc: "تحويل الزوار إلى فرص بيع حقيقية داخل الجناح.",
          items: [
            { bold: "التغطية الإعلامية المباشرة:", text: "تصوير فوتوغرافي وفيديو احترافي لتوثيق المشاركة." },
            { bold: "المحتوى الفوري:", text: "مونتاج سريع ونشر يومي للمحتوى على المنصات لمواكبة الحدث." },
            { bold: "جمع بيانات الزوار:", text: "نظام ذكي لتسجيل بيانات العملاء المحتملين وربطها بقاعدة البيانات." },
            { bold: "تنشيط الجناح:", text: "إدارة تجربة الزوار داخل الجناح لزيادة التفاعل والاهتمام بالمنتج." },
            { bold: "التغطية عبر المؤثرين:", text: "تنظيم حضور المؤثرين لزيادة الانتشار والوصول للجمهور المستهدف." },
          ],
        },
        {
          number: "المرحلة 03",
          title: "تحويل البيانات إلى مبيعات",
          desc: "متابعة العملاء المحتملين وتحويلهم إلى صفقات فعلية بعد المعرض.",
          items: [
            { bold: "إدارة بيانات العملاء:", text: "تنظيم وتصنيف بيانات الزوار داخل نظام CRM حسب الاهتمام والفرص البيعية." },
            { bold: "حملات إعادة الاستهداف:", text: "إطلاق حملات إعلانية موجهة لكل من زار الجناح أو تفاعل مع المحتوى." },
            { bold: "حملات إعادة التتبع:", text: "متابعة الزوار عبر المنصات الرقمية لزيادة فرص التحويل وإتمام البيع." },
            { bold: "التواصل التسويقي:", text: "إرسال حملات بريد إلكتروني ورسائل متابعة لتعزيز العلاقة مع العملاء المحتملين." },
            { bold: "تحليل الأداء والعائد:", text: "إعداد تقرير شامل يوضح عدد العملاء المحتملين والعائد التسويقي من المشاركة." },
          ],
        },
      ],
      caseBadge: "زيادة في المبيعات بنسبة 45%",
      caseProjectTitle: "مشروع: شركة تقنية مشاركة في معرض دولي",
      caseP1: "واجهت الشركة تحديًا في تحويل زوار الجناح إلى عملاء فعليين. قمنا بتصميم منظومة تسويق متكاملة قبل المعرض وأثناءه وبعده تضمنت حملات إعلانية مستهدفة، نظام QR لتسجيل الزوار، وصفحة هبوط مخصصة لجمع بيانات العملاء المحتملين.",
      caseP2: "بعد انتهاء المعرض تم تشغيل حملات إعادة الاستهداف ومتابعة العملاء عبر البريد الإلكتروني والإعلانات الرقمية، مما ساهم في تحويل عدد كبير من الزوار إلى فرص بيع حقيقية.",
      caseResultsTitle: "النتائج المحققة:",
      caseResults: [
        "توليد أكثر من <b>2,300 عميل محتمل</b> خلال المعرض.",
        "زيادة بنسبة <b>45%</b> في المبيعات خلال 60 يوم بعد المعرض.",
        "وصول رقمي تجاوز <b>10.5 مليون مشاهدة</b> للحملات التسويقية.",
        "تحويل <b>18%</b> من الزوار إلى فرص بيع فعلية.",
      ],
    },
  }

  const t = translations[currentLang]
  const dir = currentLang === "ar" ? "rtl" : "ltr"

  const projects = [
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_C67FF936-334C-4970-8B77-30C0BA9DCE5E.mov", title: "LALIGA" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_0849BAD8-7D93-49C2-A0DB-B70FC416B2A8-1.mov", title: "المجلس الدولي للتمور" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_BB891147-FA20-4120-B2C1-A22A657BCB05.mov", title: "بنك التنمية الاجتماعية" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/A949F1AC-C516-4969-9F7A-F2C2B7D07CF2.mov", title: "روشن" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_F1696228-3A86-434A-95DE-1D669E97D75F.mov", title: "سليمان الحبيب" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_F42A7AD4-CCA4-42A7-9C63-5FDB629118EF.mov", title: "صندوق البيئة" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_AC399FBD-4121-404B-AE41-2CC8C459A766.mov", title: "مطار الملك سلمان الدولي" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_02098C29-24DF-42A5-AFB6-A52045FC408B.mov", title: "هيئة تطوير عسير" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_E94500EC-B423-4BE7-89AF-7E030661B885.mov", title: "واصل أثرك" },
    { video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_D762FF85-DBE9-4167-966D-A07A53583DA5.mov", title: "وزارة البيئة والمياه والزراعة" },
  ]

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#450a71] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&family=Cairo:wght@400;600;700;800;900&display=swap');
        
        :root {
          --primary-purple: #450a71;
          --primary-purple-bright: #450a71;
          --pure-white: #ffffff;
          --bg-dark: #260768;
          --bg-pure-black: #000000;
          --font-main: 'Tajawal', sans-serif;
          --font-secondary: 'Cairo', sans-serif;
          --bg-card-dark: rgba(255, 255, 255, 0.02);
          --text-pure-white: #ffffff;
          --text-muted: #cccccc;
          --accent-green: #28a745;
          --transition: all 0.3s ease;
          --bg-black: #000000;
          --text-white: #ffffff;
          --input-border: #333333;
        }

        .exhibition-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .exhibition-page {
          font-family: var(--font-main);
          background-color: var(--bg-pure-black);
          color: var(--pure-white);
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .exhibition-page .stat-item h2 {
          font-size: 3.5rem;
          color: var(--primary-purple-bright);
          margin: 0;
          font-weight: 800;
        }

        .exhibition-page .roadmap-card li::before {
          content: "✦";
          position: absolute;
          right: 0;
          color: var(--primary-purple-bright);
        }

        .exhibition-page[dir="ltr"] .roadmap-card li::before {
          right: auto;
          left: 0;
        }

        @media (max-width: 768px) {
          .exhibition-page .stat-item h2 { font-size: 2.5rem; }
        }

        @media (min-width: 992px) {
          .exhibition-page .projects-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>

      <div dir={dir} className="exhibition-page">
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', position: 'absolute', width: '100%', zIndex: 100 }}>
          <div className="logo">
            <Link href="/">
              <img
                src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/نسخة-من-بنرات-الموقع-منشور-Instagram-تصميم-45.svg"
                alt="الظاهرية للتسويق"
                style={{ height: '70px' }}
              />
            </Link>
          </div>
          <div className="lang-switcher">
            <button
              onClick={toggleLang}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid var(--primary-purple)',
                color: '#fff',
                padding: '8px 18px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: 'var(--font-main)',
              }}
            >
              {t.langBtn}
            </button>
          </div>
        </header>

        {/* Hero Banner */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px',
          overflow: 'hidden',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              zIndex: 1,
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
            }}
          >
            <source src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_617621C8-BF43-4221-B373-1F82470EBE03-1.mov" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 2,
          }} />
          <div style={{ maxWidth: '850px', zIndex: 3, position: 'relative' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.3,
              marginBottom: '20px',
              fontWeight: 800,
              color: 'var(--pure-white)',
              textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
            }}>
              {t.heroTitle}
              <span style={{ color: '#9c27b0', display: 'block' }}>{t.heroHighlight}</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#e0e0e0',
              marginBottom: '35px',
              lineHeight: 1.7,
            }}>
              {t.heroDesc}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/message/T5RXLUBRJK4DK1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--pure-white)',
                  color: 'var(--primary-purple)',
                  padding: '15px 35px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '16px',
                  border: '2px solid var(--pure-white)',
                }}
              >
                {t.btnConsult}
              </a>
              <a
                href="#services-section"
                style={{
                  background: 'transparent',
                  color: 'var(--pure-white)',
                  padding: '15px 35px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '16px',
                  border: '2px solid var(--pure-white)',
                }}
              >
                {t.btnExplore}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: '60px 5%',
          background: 'var(--bg-pure-black)',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          textAlign: 'center',
          borderTop: '2px solid var(--primary-purple-bright)',
          borderBottom: '2px solid var(--primary-purple-bright)',
        }}>
          <div className="stat-item" style={{ margin: '15px' }}>
            <h2>+50</h2>
            <p style={{ color: 'var(--text-pure-white)', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.stat1}</p>
          </div>
          <div className="stat-item" style={{ margin: '15px' }}>
            <h2>+100K</h2>
            <p style={{ color: 'var(--text-pure-white)', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.stat2}</p>
          </div>
          <div className="stat-item" style={{ margin: '15px' }}>
            <h2>+364</h2>
            <p style={{ color: 'var(--text-pure-white)', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.stat3}</p>
          </div>
          <div className="stat-item" style={{ margin: '15px' }}>
            <h2>$76M+</h2>
            <p style={{ color: 'var(--text-pure-white)', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.stat4}</p>
          </div>
        </section>

        {/* Projects Section */}
        <div style={{ padding: '80px 5%', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
          <div style={{ fontSize: '1rem', color: '#888', marginBottom: '50px', textTransform: 'lowercase', letterSpacing: '2px' }}>projects</div>
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: '4px',
                background: '#000',
              }}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6,
                    transition: '0.5s ease',
                  }}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  zIndex: 2,
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  lineHeight: 1.4,
                  textAlign: 'center',
                  color: '#fff',
                  pointerEvents: 'none',
                }}>
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Roadmap */}
        <section id="services-section" style={{ padding: '100px 5%', backgroundColor: 'var(--bg-pure-black)' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            color: 'var(--primary-purple-bright)',
            marginBottom: '60px',
            textTransform: 'uppercase',
          }}>
            {t.roadmapTitle}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {t.phases.map((phase, index) => (
              <div key={index} className="roadmap-card" style={{
                background: 'var(--bg-card-dark)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(69, 10, 113, 0.3)',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  [dir === 'rtl' ? 'right' : 'left']: '20px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: 'var(--text-pure-white)',
                  background: 'var(--primary-purple-bright)',
                  padding: '5px 15px',
                  borderRadius: '30px',
                }}>
                  {phase.number}
                </span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '50px', color: 'var(--primary-purple-bright)' }}>{phase.title}</h3>
                <p style={{ color: 'var(--text-pure-white)', fontWeight: 800, marginBottom: '25px', display: 'block', fontSize: '1.1rem' }}>{phase.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      marginBottom: '18px',
                      paddingRight: dir === 'rtl' ? '25px' : '0',
                      paddingLeft: dir === 'ltr' ? '25px' : '0',
                      position: 'relative',
                      color: 'var(--text-pure-white)',
                      lineHeight: 1.6,
                    }}>
                      <strong>{item.bold}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section style={{ padding: '80px 5%', backgroundColor: 'var(--bg-pure-black)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.8rem', color: 'var(--primary-purple-bright)', marginBottom: '50px' }}>
            {t.caseTitle}
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            background: 'var(--bg-card-dark)',
            padding: '50px',
            borderRadius: '30px',
            borderRight: dir === 'rtl' ? '8px solid var(--primary-purple-bright)' : 'none',
            borderLeft: dir === 'ltr' ? '8px solid var(--primary-purple-bright)' : 'none',
          }}>
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <div style={{ flex: 2 }}>
                <span style={{
                  display: 'inline-block',
                  background: 'var(--accent-green)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  marginBottom: '15px',
                  fontWeight: 'bold',
                }}>
                  {t.caseBadge}
                </span>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-purple-bright)', marginBottom: '20px' }}>{t.caseProjectTitle}</h3>
                <p style={{ color: 'var(--text-pure-white)', lineHeight: 1.9, fontSize: '1.1rem' }}>{t.caseP1}</p>
                <p style={{ color: 'var(--text-pure-white)', lineHeight: 1.9, fontSize: '1.1rem', marginTop: '15px' }}>{t.caseP2}</p>
              </div>
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '35px',
                borderRadius: '20px',
                border: '1px solid var(--primary-purple-bright)',
              }}>
                <h4 style={{ color: 'var(--primary-purple-bright)', marginTop: 0, fontSize: '1.4rem' }}>{t.caseResultsTitle}</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {t.caseResults.map((result, index) => (
                    <li key={index} style={{ color: 'var(--text-pure-white)', marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: result }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section style={{
          padding: '100px 5%',
          textAlign: 'center',
          background: 'var(--bg-pure-black)',
          borderTop: '1px solid var(--primary-purple-bright)',
        }}>
          <h3 style={{ color: 'var(--primary-purple-bright)', fontSize: '2.5rem', marginBottom: '25px' }}>{t.whyUsTitle}</h3>
          <p style={{ fontSize: '1.5rem', maxWidth: '950px', margin: '0 auto', color: 'var(--text-pure-white)' }}>
            {t.whyUsDesc} <span style={{ color: 'var(--accent-green)', fontWeight: 900, fontSize: '2.5rem' }}>{t.whyUsGrowth}</span> {t.whyUsEnd}
          </p>
        </section>

        {/* Contact Section */}
        <section style={{
          padding: '80px 5%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('http://alzaheriamarketing.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-14-at-11.38.06-PM.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1000px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '50px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '40px',
            borderRadius: '20px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: 'var(--text-white)',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: "'Cairo', sans-serif",
              }}>
                {t.contactTitle}
              </h2>
              <div style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column' }}>
                <a href="mailto:connect@zaheria.com" style={{
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginTop: '5px',
                  fontFamily: "'Cairo', sans-serif",
                }}>
                  connect@zaheria.com
                </a>
              </div>
              <div style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column' }}>
                <a href="tel:0558546585" dir="ltr" style={{
                  color: 'var(--text-white)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  marginTop: '5px',
                  fontFamily: "'Cairo', sans-serif",
                }}>
                  0558546585
                </a>
              </div>
              <div style={{ marginBottom: '25px', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  color: 'var(--text-white)',
                  fontSize: '1.2rem',
                  marginTop: '5px',
                  fontFamily: "'Cairo', sans-serif",
                }}>
                  {t.locationText}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <form action="https://script.google.com/macros/s/AKfycbznhJItdkyUS4wFj8JLWm4FnSEZmtdA4IVzF7klmO_YwKu6roFcPhvqx868mUew99LgWg/exec" method="POST">
                <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--input-border)' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.formName}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '15px 0',
                      color: 'white',
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--input-border)' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t.formPhone}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '15px 0',
                      color: 'white',
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--input-border)' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.formEmail}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '15px 0',
                      color: 'white',
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: '1rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--input-border)' }}>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t.formMsg}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '15px 0',
                      color: 'white',
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid var(--primary-purple-bright)',
                    padding: '15px 40px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    alignSelf: 'flex-start',
                    transition: '0.4s',
                    marginTop: '20px',
                    textTransform: 'uppercase',
                    fontFamily: "'Cairo', sans-serif",
                  }}
                >
                  {t.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div style={{
          background: 'var(--bg-pure-black)',
          padding: '30px',
          textAlign: 'center',
          borderTop: '1px solid rgba(69, 10, 113, 0.3)',
        }}>
          <Link
            href="/"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {t.backHome}
          </Link>
        </div>
      </div>
    </>
  )
}
