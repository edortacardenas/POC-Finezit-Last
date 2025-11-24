"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function FloatingAgent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Injected CSS styles for full-screen animation */}
      <style jsx global>{`
        @keyframes patrol-screen {
          0% { transform: translateX(0); }
          50% { transform: translateX(calc(100vw - 450px)); } /* Goes to right edge */
          100% { transform: translateX(0); }
        }
        .animate-patrol {
          animation: patrol-screen 20s ease-in-out infinite; /* Trip lasts 20s */
        }
        /* CRITICAL CLASS: Pauses movement on hover */
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        /* On mobile, reduce movement due to lack of space */
        @media (max-width: 768px) {
          @keyframes patrol-screen {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }
        }
      `}</style>

      <div className="fixed bottom-4 left-4 z-50 md:bottom-8 md:left-8 font-sans hidden md:block">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              // Custom CSS class applied here
              className="relative animate-patrol pause-on-hover"
            >
              {/* Close Button (X) */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="absolute -top-3 -right-3 bg-white text-white rounded-full p-1 shadow-md hover:bg-gray-600 z-50 transition-colors cursor-pointer"
              >
                <X size={16} style={{ color: 'var(--primary-color)' }} />
              </button>

              {/* MAIN BOX */}
              <div className="rounded-2xl p-5 shadow-2xl w-[340px] md:w-[380px] relative mt-12 ml-6" style={{ backgroundColor: 'var(--primary-color)' }}>
                {/* AGENT IMAGE */}
                <div className="absolute -left-8 bottom-0 w-[140px] h-[190px] md:w-[160px] md:h-[210px] z-10 pointer-events-none">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=400"
                    alt="Finezit Support"
                    fill
                    className="object-cover object-top drop-shadow-xl"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="pl-24 md:pl-28">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">Any questions?</h3>
                      <div className="flex items-center gap-1 text-blue-100 text-xs mt-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Online • USA Based</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-sm p-3 shadow-sm mb-3 relative">
                    <div className="absolute bottom-0 -left-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[0px] border-r-transparent border-t-[10px] border-t-white"></div>

                    <p className="text-gray-700 text-sm mb-1">Hi, I&apos;m available to answer your questions at:</p>
                    <a href="tel:5551234567" className="font-bold text-lg hover:underline block mb-1" style={{ color: 'var(--primary-color)' }}>
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-xs">Or we can chat. What are you trying to track?</p>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide cursor-default mx-4">
                    {["Car", "Truck", "Trailer"].map((item) => (
                      <button
                        key={item}
                        className="bg-white/90 hover:bg-white text-xs font-bold py-1.5 px-3 rounded-full shadow-sm whitespace-nowrap transition-colors transform hover:scale-105 active:scale-95"
                        style={{ color: 'var(--primary-color)' }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated Arrow & Text */}
                <motion.div
                  animate={{ rotate: [-10, -20, -10], scale: [1, 1.05, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
                  className="absolute top-12 -left-4 md:-left-6 pointer-events-none z-20 hidden md:block origin-bottom-right"
                >
                  <span className="text-white font-handwriting text-sm font-bold shadow-black drop-shadow-md">
                    Talk to a <br /> real person!
                  </span>
                  <svg
                    className="w-6 h-6 text-white absolute -bottom-4 right-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* Small Button (Bubble) */
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(true)}
              className="text-white p-4 rounded-full shadow-xl flex items-center gap-2 group transition-colors animate-bounce"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--primary-color)' }}></span>
              </div>
              <span className="font-bold pr-2 hidden group-hover:block whitespace-nowrap">Help</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}