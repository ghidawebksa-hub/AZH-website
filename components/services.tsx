"use client"

import { useI18n } from "@/lib/i18n"
import {
  LineChart,
  Briefcase,
  Camera,
  Share2,
  Palette,
  Code,
  Search,
  Factory,
  Calendar,
} from "lucide-react"

const serviceIcons = [
  LineChart,
  Briefcase,
  Camera,
  Share2,
  Palette,
  Code,
  Search,
  Factory,
  Calendar,
]

export function Services() {
  const { t, locale } = useI18n()

  const services = [
    {
      icon: serviceIcons[0],
      title: t("service.planning.title"),
      desc: t("service.planning.desc"),
    },
    {
      icon: serviceIcons[1],
      title: t("service.development.title"),
      desc: t("service.development.desc"),
    },
    {
      icon: serviceIcons[2],
      title: t("service.photography.title"),
      desc: t("service.photography.desc"),
    },
    {
      icon: serviceIcons[3],
      title: t("service.media.title"),
      desc: t("service.media.desc"),
    },
    {
      icon: serviceIcons[4],
      title: t("service.design.title"),
      desc: t("service.design.desc"),
    },
    {
      icon: serviceIcons[5],
      title: t("service.tech.title"),
      desc: t("service.tech.desc"),
    },
    {
      icon: serviceIcons[6],
      title: t("service.seo.title"),
      desc: t("service.seo.desc"),
    },
    {
      icon: serviceIcons[7],
      title: t("service.industrial.title"),
      desc: t("service.industrial.desc"),
    },
    {
      icon: serviceIcons[8],
      title: t("service.events.title"),
      desc: t("service.events.desc"),
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
            {t("services.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-white/70 text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-[#260768]/30 rounded-2xl p-6 lg:p-8 hover:border-[#9c27b0]/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#260768]/0 to-[#9c27b0]/0 group-hover:from-[#260768]/10 group-hover:to-[#9c27b0]/10 transition-all duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-[#260768]/30 flex items-center justify-center mb-5 group-hover:bg-[#260768] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#9c27b0] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-[#9c27b0] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-white/60 leading-relaxed">
                {service.desc}
              </p>

              {/* Number badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#260768]/20 flex items-center justify-center text-[#9c27b0] text-sm font-bold rtl:right-auto rtl:left-6">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#450a71] hover:bg-[#260768] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#9c27b0]/30"
          >
            {t("services.cta")}
          </a>
        </div>
      </div>
    </section>
  )
}
