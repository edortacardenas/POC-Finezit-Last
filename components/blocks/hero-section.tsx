"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-x-hidden" style={{ backgroundColor: 'var(--light-background-color)' }}>
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="font-bold tracking-widest" style={{ color: 'var(--primary-color)' }}>RATED BEST IN CUSTOMER SERVICE</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                We track freight. <span className="font-bold italic" style={{ color: 'var(--primary-color)' }}>Not trucks.</span>
              </h1>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Once freight leaves the warehouse, visibility drops. Finezit follows the freight itself through every handoff.
              </h3>
              <div className="mt-4 flex flex-wrap items-baseline gap-2 text-xl md:text-2xl">
                <span className="font-bold italic" style={{ color: 'var(--primary-color)' }}>Protect My Freight</span>
                <span className="relative font-bold text-slate-900">
                  , $79/month
                  {/* Decorative underline */}
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full" style={{ color: 'var(--accent3-color)' }}
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {[
                  "Real-time GPS tracking for 30 days",
                  "100% disposable - no returns needed",
                  "98% recovery rate",
                  "Hidden design that thieves can't detect",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--primary-color)', opacity: 0.9 }}>
                      <Check className="h-3.5 w-3.5" style={{ color: 'var(--primary-color)' }} />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-2 text-base font-bold text-slate-900 hover:bg-slate-50 bg-transparent"
              >
                (888) 919-7536
              </Button>
              <Link href="/contact">
                <Button size="lg" className="h-12 text-base font-bold" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--primary-button-text-color)' }}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Video Embed & Floating Card */}
          <div className="relative"> {/* Relative container to position elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10 aspect-video w-full"
            >
              {/* Video container with overflow-hidden and rounded borders */}
              <div className="h-full w-full overflow-hidden rounded-xl shadow-2xl">

                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/E5IF4DMrbDI"
                  title="GPS Tracking Video"
                  // Modern permissions and referrer policy added
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* --- FLOATING CARD (System Active) --- */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-8 -left-4 z-20 md:-bottom-10 md:-left-10"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/70 p-4 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md">
                  {/* Icon with pulse effect */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--primary-color)', opacity: 0.9 }}>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-20"></span>
                    <Check className="relative h-5 w-5" style={{ color: 'var(--accent2-color)' }} strokeWidth={3} />
                  </div>

                  {/* Texts */}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">System Active</span>
                    <span className="text-xs font-medium text-slate-500">Updated 1s ago</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}