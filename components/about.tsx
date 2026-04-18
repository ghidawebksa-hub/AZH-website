"use client"

import { useI18n } from "@/lib/i18n"
import { Target, Users, Zap, Award } from "lucide-react"

export function About() {
  const { t } = useI18n()

  const features = [
    { icon: Target, value: "10+", label: t("stats.years") },
    { icon: Users, value: "500+", label: t("stats.clients") },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#260768]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9c27b0]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              {t("about.title")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t("about.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#260768]/20 border border-[#260768]/30 rounded-2xl p-6 hover:border-[#9c27b0]/50 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-[#9c27b0] mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{feature.value}</div>
                  <div className="text-white/60 text-sm">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#260768] to-[#450a71] p-1">
              <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center relative overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-transparent via-[#9c27b0] to-transparent w-full"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px bg-gradient-to-b from-transparent via-[#9c27b0] to-transparent h-full"
                      style={{ left: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                </div>

                {/* Center logo/icon */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#260768] to-[#9c27b0] flex items-center justify-center">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <Award className="w-6 h-6 text-[#28a745]" />
                    <span className="text-white/80">Premium Quality</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-8 left-8 bg-[#260768]/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  +42% Growth
                </div>
                <div className="absolute bottom-8 right-8 bg-[#28a745]/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  ROI Optimized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
