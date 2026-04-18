"use client"

import { useI18n } from "@/lib/i18n"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function Hero() {
  const { t, locale } = useI18n()
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_617621C8-BF43-4221-B373-1F82470EBE03-1.mov"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#260768]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="group flex items-center gap-2 bg-[#450a71] hover:bg-[#260768] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#9c27b0]/30 hover-glow"
            >
              {t("hero.cta.services")}
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/10"
            >
              {t("hero.cta.contact")}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
