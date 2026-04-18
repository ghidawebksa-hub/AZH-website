"use client"

import { useI18n } from "@/lib/i18n"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "عبدالله الزهراني",
    nameEn: "Abdullah Al-Zahrani",
    text: "أفكارهم مبتكرة وتعاملهم سهل وسريع، أنصح فيهم لأي أحد يبي تسويق فعّال.",
    textEn: "Their ideas are innovative and their dealings are easy and fast. I recommend them to anyone who wants effective marketing.",
    rating: 5,
  },
  {
    name: "ريم العتيبي",
    nameEn: "Reem Al-Otaibi",
    text: "نفّذوا حملتي الدعائية بشكل ممتاز، ووصلت لنتائج أفضل من المتوقع. شكراً لفريق الظاهرية!",
    textEn: "They executed my advertising campaign excellently, and I achieved better results than expected. Thanks to the Al-Zaheria team!",
    rating: 5,
  },
  {
    name: "نواف المطيري",
    nameEn: "Nawaf Al-Mutairi",
    text: "تعامل راقٍ وسرعة في الإنجاز، حبيت شغلهم جداً. كل شيء واضح واحترافي.",
    textEn: "Elegant dealing and quick execution. I loved their work very much. Everything is clear and professional.",
    rating: 5,
  },
]

export function Testimonials() {
  const { t, locale } = useI18n()

  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
            {t("testimonials.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#260768]/20 to-[#0a0a0a] border border-[#260768]/30 rounded-2xl p-8 hover:border-[#9c27b0]/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#9c27b0]/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed mb-6">
                {locale === "ar" ? testimonial.text : testimonial.textEn}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#260768] to-[#9c27b0] flex items-center justify-center text-white font-bold">
                  {(locale === "ar" ? testimonial.name : testimonial.nameEn)
                    .charAt(0)
                    .toUpperCase()}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {locale === "ar" ? testimonial.name : testimonial.nameEn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
