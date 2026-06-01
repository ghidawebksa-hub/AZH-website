"use client"

import { useI18n } from "@/lib/i18n"
import { useState, useRef } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: string
  title: string
  titleEn: string
  video: string
  category: "saudi" | "international"
}

const projects: Project[] = [
  // Saudi Projects
  {
    id: "laliga",
    title: "LALIGA",
    titleEn: "LALIGA",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_C67FF936-334C-4970-8B77-30C0BA9DCE5E.mov",
    category: "saudi",
  },
  {
    id: "dates-council",
    title: "المجلس الدولي للتمور",
    titleEn: "International Dates Council",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_0849BAD8-7D93-49C2-A0DB-B70FC416B2A8-1.mov",
    category: "saudi",
  },
  {
    id: "sdb",
    title: "بنك التنمية الاجتماعية",
    titleEn: "Social Development Bank",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_BB891147-FA20-4120-B2C1-A22A657BCB05.mov",
    category: "saudi",
  },
  {
    id: "roshn",
    title: "روشن",
    titleEn: "ROSHN",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/A949F1AC-C516-4969-9F7A-F2C2B7D07CF2.mov",
    category: "saudi",
  },
  {
    id: "hmg",
    title: "سليمان الحبيب",
    titleEn: "Dr. Sulaiman Al Habib",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_F1696228-3A86-434A-95DE-1D669E97D75F.mov",
    category: "saudi",
  },
  {
    id: "nef",
    title: "صندوق البيئة",
    titleEn: "National Environment Fund",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_F42A7AD4-CCA4-42A7-9C63-5FDB629118EF.mov",
    category: "saudi",
  },
  {
    id: "ksia",
    title: "مطار الملك سلمان",
    titleEn: "King Salman Airport",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_AC399FBD-4121-404B-AE41-2CC8C459A766.mov",
    category: "saudi",
  },
  {
    id: "aseer",
    title: "هيئة تطوير عسير",
    titleEn: "Aseer Development Authority",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_02098C29-24DF-42A5-AFB6-A52045FC408B.mov",
    category: "saudi",
  },
  {
    id: "wasel",
    title: "واصل أثرك",
    titleEn: "Wasel Athrak",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_E94500EC-B423-4BE7-89AF-7E030661B885.mov",
    category: "saudi",
  },
  {
    id: "mewa",
    title: "وزارة البيئة",
    titleEn: "Ministry of Environment",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/copy_D762FF85-DBE9-4167-966D-A07A53583DA5.mov",
    category: "saudi",
  },
  // International Companies
  {
    id: "good",
    title: "GOOD",
    titleEn: "GOOD",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/3d-good.mp4",
    category: "international",
  },
  {
    id: "good2",
    title: "GOOD 2",
    titleEn: "GOOD 2",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/3d-good2.mp4",
    category: "international",
  },
  {
    id: "leez",
    title: "LEEZ",
    titleEn: "LEEZ",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/3d-lys.mp4",
    category: "international",
  },
  {
    id: "porsche",
    title: "PORSCHE",
    titleEn: "PORSCHE",
    video: "http://alzaheriamarketing.com/wp-content/uploads/2026/03/PORSCHE-CLUB.mp4",
    category: "international",
  },
]

export function Works() {
  const { t, locale } = useI18n()
  const [activeTab, setActiveTab] = useState<"saudi" | "international">("saudi")
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredProjects = projects.filter((p) => p.category === activeTab)

  const openVideo = (videoUrl: string) => {
    setPlayingVideo(videoUrl)
  }

  const closeVideo = () => {
    setPlayingVideo(null)
  }

  return (
    <section id="works" className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#9c27b0] text-sm font-medium tracking-wider uppercase mb-4 border border-[#9c27b0]/30 px-4 py-1.5 rounded-full">
            {t("works.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("works.title")}
          </h2>
          <p className="text-white/70 text-lg">
            {t("works.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("saudi")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "saudi"
                ? "bg-[#450a71] text-white"
                : "bg-[#260768]/20 text-white/70 hover:bg-[#260768]/40"
            }`}
          >
            {t("works.saudi")}
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "international"
                ? "bg-[#450a71] text-white"
                : "bg-[#260768]/20 text-white/70 hover:bg-[#260768]/40"
            }`}
          >
            {t("works.international")}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-video bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#260768]/30 hover:border-[#9c27b0]/50 transition-all duration-300 cursor-pointer"
              onClick={() => openVideo(project.video)}
            >
              {/* Video Thumbnail - First frame */}
              <video
                src={project.video}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                muted
                playsInline
                preload="metadata"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#9c27b0]/30 rounded-full play-button-ring" />
                  <div className="w-16 h-16 bg-[#450a71] rounded-full flex items-center justify-center group-hover:bg-[#9c27b0] transition-colors duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg">
                  {locale === "ar" ? project.title : project.titleEn}
                </h3>
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
            {t("works.cta")}
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={playingVideo}
              className="w-full h-full rounded-2xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
