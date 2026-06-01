"use client"

import { useI18n } from "@/lib/i18n"

const partners = [
  "STC",
  "PORSCHE",
  "NEOM",
  "LALIGA",
  "LAY'S",
  "د. سليمان الحبيب",
  "CITYSCAPE",
  "WONDER GARDEN",
  "صندوق البيئة",
  "مطارات الرياض",
  "MISFITS",
  "SEA EXPO",
  "ZAIN",
  "PLAY WITH US",
  "MONY STUDIO",
  "بيبرو",
  "مصانع المجد",
  "لورا سوفت",
  "NAHAL COFFEE",
  "هيئة تطوير عسير",
]

export function Partners() {
  const { t, locale } = useI18n()

  return (
    <section className="py-20 lg:py-24 bg-[#0a0a0a] border-y border-[#260768]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
            {t("partners.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            {t("partners.title")}
          </h2>
        </div>

        {/* Partners Marquee */}
        <div className="overflow-hidden">
          <div
            className={`flex ${
              locale === "ar" ? "animate-marquee-rtl" : "animate-marquee"
            }`}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 px-8 py-4 bg-[#260768]/10 border border-[#260768]/30 rounded-xl hover:border-[#9c27b0]/50 transition-all duration-300"
              >
                <span className="text-white/80 font-medium whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
