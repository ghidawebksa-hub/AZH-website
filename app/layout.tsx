import type { Metadata, Viewport } from "next"
import { Tajawal, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "الظاهرية للتسويق | Al-Zaheria Marketing",
  description:
    "مؤسسة سعودية متخصصة في تقديم حلول تسويق رقمي متكاملة، تشمل تصميم الهوية البصرية، إدارة الحملات الإعلانية، صناعة المحتوى الإبداعي، وتحسين محركات البحث SEO",
  keywords: [
    "تسويق رقمي",
    "الظاهرية للتسويق",
    "تصميم هوية بصرية",
    "إدارة حملات إعلانية",
    "محتوى إبداعي",
    "SEO",
    "digital marketing",
    "Saudi Arabia",
  ],
  authors: [{ name: "Al-Zaheria Marketing" }],
  openGraph: {
    title: "الظاهرية للتسويق | Al-Zaheria Marketing",
    description: "نبتكر الحلول، لنصنع الظهور المستحق لعلامتك التجارية",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#260768",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${geist.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
