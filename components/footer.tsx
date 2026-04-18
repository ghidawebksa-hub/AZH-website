"use client"

import { useI18n } from "@/lib/i18n"
import { MessageCircle, Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const { t, locale } = useI18n()

  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#stats", label: t("nav.stats") },
    { href: "#works", label: t("nav.works") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-black border-t border-[#260768]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img
                src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/نسخة-من-بنرات-الموقع-منشور-Instagram-تصميم-45.svg"
                alt="الظاهرية للتسويق"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              {locale === "ar"
                ? "مؤسسة سعودية متخصصة في تقديم حلول تسويق رقمي متكاملة، تشمل تصميم الهوية البصرية، إدارة الحملات الإعلانية، صناعة المحتوى الإبداعي."
                : "A Saudi institution specialized in providing integrated digital marketing solutions, including visual identity design, advertising campaign management, and creative content production."}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#260768]/30 flex items-center justify-center text-white/60 hover:bg-[#450a71] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#9c27b0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/message/T5RXLUBRJK4DK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#28a745] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0558546585"
                  className="flex items-center gap-3 text-white/60 hover:text-[#9c27b0] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">0558546585</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@zaheria.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#9c27b0] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>connect@zaheria.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-[#260768]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {t("footer.company")}. {t("footer.rights")}.
          </p>
          <p className="text-white/40 text-sm">
            {locale === "ar" ? "صنع بحب في السعودية" : "Made with love in Saudi Arabia"}
          </p>
        </div>
      </div>
    </footer>
  )
}
