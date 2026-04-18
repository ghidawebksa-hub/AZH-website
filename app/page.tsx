"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Works } from "@/components/works"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <About />
          <Services />
          <Works />
          <Partners />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
