"use client"

import { useI18n } from "@/lib/i18n"

export function Marquee() {
  const { t, locale } = useI18n()

  const items = [
    t("marquee.analytics"),
    t("marquee.automation"),
    t("marquee.branding"),
    t("marquee.digital"),
    t("marquee.creative"),
  ]

  return (
    <div className="bg-[#260768] py-4 overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${
          locale === "ar" ? "animate-marquee-rtl" : "animate-marquee"
        }`}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="w-2 h-2 bg-[#9c27b0] rounded-full" />
            <span className="text-white font-medium text-sm md:text-base mx-4">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
