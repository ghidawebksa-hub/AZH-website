"use client"

import { useState, useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Header() {
  const { t, locale, setLocale, dir } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const solutionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const solutions = [
    { href: "/solutions/exhibition-growth", label: t("solutions.exhibition") },
    { href: "/solutions/sales-growth", label: t("solutions.salesGrowth") },
  ]

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#stats", label: t("nav.stats") },
    { href: "#works", label: t("nav.works") },
  ]

  const toggleLocale = () => {
    setLocale(locale === "ar" ? "en" : "ar")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#260768]/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="http://alzaheriamarketing.com/wp-content/uploads/2026/03/نسخة-من-بنرات-الموقع-منشور-Instagram-تصميم-45.svg"
              alt="الظاهرية للتسويق"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" dir={dir}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9c27b0] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            {/* Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {t("nav.solutions")}
                <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen && "rotate-180")} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9c27b0] transition-all duration-300 group-hover:w-full" />
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full mt-2 start-0 min-w-[240px] bg-black/95 backdrop-blur-md border border-[#260768]/50 rounded-lg py-2 shadow-xl">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      onClick={() => setIsSolutionsOpen(false)}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-[#450a71]/20 transition-colors text-sm"
                    >
                      {solution.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "ar" ? "EN" : "عربي"}</span>
            </button>
            <a
              href="#contact"
              className="bg-[#450a71] hover:bg-[#260768] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9c27b0]/20"
            >
              {t("nav.contact")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-lg border-t border-[#260768]/30 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4" dir={dir}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-lg font-medium py-2 border-b border-[#260768]/20"
            >
              {item.label}
            </a>
          ))}
          {/* Mobile Solutions */}
          <div className="border-b border-[#260768]/20 pb-2">
            <div className="text-white/60 text-sm mb-2">{t("nav.solutions")}</div>
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors text-lg font-medium py-2 ps-4"
              >
                {solution.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-lg border border-[#260768]/30"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "ar" ? "English" : "عربي"}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#450a71] hover:bg-[#260768] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              {t("nav.contact")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
