"use client"

import { useI18n } from "@/lib/i18n"
import { useState } from "react"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Send,
  Loader2,
} from "lucide-react"

export function Contact() {
  const { t, locale } = useI18n()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const services = [
    t("contact.service.planning"),
    t("contact.service.development"),
    t("contact.service.photography"),
    t("contact.service.media"),
    t("contact.service.design"),
    t("contact.service.tech"),
    t("contact.service.seo"),
    t("contact.service.industrial"),
    t("contact.service.events"),
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbznhJItdkyUS4wFj8JLWm4FnSEZmtdA4IVzF7klmO_YwKu6roFcPhvqx868mUew99LgWg/exec",
        {
          method: "POST",
          body: formData,
        }
      )
      setSubmitStatus("success")
      form.reset()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('http://alzaheriamarketing.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-14-at-11.38.06-PM.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#260768]/20 to-black/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
            {t("contact.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-white/70 text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-[#0a0a0a]/80 backdrop-blur-lg border border-[#260768]/30 rounded-3xl p-8 lg:p-10">
            <form
              action="https://script.google.com/macros/s/AKfycbznhJItdkyUS4wFj8JLWm4FnSEZmtdA4IVzF7klmO_YwKu6roFcPhvqx868mUew99LgWg/exec"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#1a1a1a] border border-[#260768]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#9c27b0] transition-colors"
                  placeholder={t("contact.form.name")}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#260768]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#9c27b0] transition-colors"
                    placeholder={t("contact.form.email")}
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#260768]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#9c27b0] transition-colors"
                    placeholder="05XXXXXXXX"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t("contact.form.service")}
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-[#1a1a1a] border border-[#260768]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#9c27b0] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    {t("contact.form.service")}
                  </option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#260768]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#9c27b0] transition-colors resize-none"
                  placeholder={t("contact.form.message")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#450a71] hover:bg-[#260768] disabled:bg-[#260768]/50 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t("contact.form.submit")}</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-[#28a745] text-center py-2">
                  {locale === "ar"
                    ? "تم إرسال رسالتك بنجاح!"
                    : "Your message has been sent successfully!"}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-500 text-center py-2">
                  {locale === "ar"
                    ? "حدث خطأ، يرجى المحاولة مرة أخرى"
                    : "An error occurred, please try again"}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/T5RXLUBRJK4DK1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#28a745] hover:bg-[#28a745]/90 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                {t("contact.cta.whatsapp")}
              </a>
              <a
                href="https://calendar.app.google/Hy3y9j4uM6rvS5EA9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#450a71] hover:bg-[#260768] text-white px-6 py-4 rounded-xl font-medium transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                {t("contact.cta.booking")}
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid gap-6">
              {/* Address */}
              <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#260768]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#260768]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#9c27b0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.info.address.label")}
                  </h4>
                  <p className="text-white/70">{t("contact.info.address")}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#260768]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#260768]/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#9c27b0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.info.hours.label")}
                  </h4>
                  <p className="text-white/70">{t("contact.info.hours")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#260768]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#260768]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#9c27b0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.info.phone.label")}
                  </h4>
                  <a
                    href="tel:0558546585"
                    className="text-white/70 hover:text-[#9c27b0] transition-colors"
                    dir="ltr"
                  >
                    0558546585
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#260768]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#260768]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#9c27b0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {t("contact.info.email.label")}
                  </h4>
                  <a
                    href="mailto:connect@zaheria.com"
                    className="text-white/70 hover:text-[#9c27b0] transition-colors"
                  >
                    connect@zaheria.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
