"use client"

import { useI18n } from "@/lib/i18n"
import { useEffect, useState, useRef } from "react"

interface StatItemProps {
  value: number
  suffix: string
  label: string
  prefix?: string
}

function StatItem({ value, suffix, label, prefix = "" }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {prefix}
          {count.toLocaleString()}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-[#9c27b0]">{suffix}</span>
      </div>
      <p className="text-white/70 mt-2 text-sm md:text-base">{label}</p>
    </div>
  )
}

export function Stats() {
  const { t } = useI18n()

  const stats = [
    { value: 500, suffix: "+", prefix: "", label: t("stats.clients") },
    { value: 50, suffix: "M+", prefix: "$", label: t("stats.sales") },
    { value: 1000, suffix: "+", prefix: "", label: t("stats.projects") },
    { value: 10, suffix: "+", prefix: "", label: t("stats.years") },
  ]

  return (
    <section id="stats" className="py-16 lg:py-24 bg-black border-y border-[#260768]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
