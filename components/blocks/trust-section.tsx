'use client'

import { Star } from "lucide-react"

// Custom SVG component for Laurel Wreath
const LaurelWreath = ({ className, flip = false }: { className?: string, flip?: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    fill="currentColor"
  >
    <path d="M50 95 C 20 95, 10 50, 30 20 C 32 15, 35 15, 35 20 C 30 40, 40 70, 50 85 C 60 70, 70 40, 65 20 C 65 15, 68 15, 70 20 C 90 50, 80 95, 50 95 Z" opacity="0.2" />
    <path d="M45 80 C 30 70, 20 40, 35 25" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 25 C 30 28, 25 35, 22 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 45 C 20 50, 18 60, 20 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 35 L 15 30 M 22 45 L 10 42 M 20 58 L 8 60 M 25 70 L 15 75" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function TrustSection() {
  return (
    <section className="bg-[#1B2533] text-white py-24 mx-2 rounded-2xl relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* MAIN TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Trusted by over
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            20,000 companies
          </h2>

          {/* CENTER BLOCK: LAURELS AND STARS */}
          <div className="flex justify-center items-center gap-4 md:gap-8 opacity-90">

            {/* Left Branch */}
            <LaurelWreath className="w-16 h-16 md:w-24 md:h-24 text-gray-500 opacity-60" />

            <div className="flex flex-col items-center">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Rating Text */}
              <p className="text-lg md:text-xl font-medium italic text-gray-200">
                Overall Satisfaction Rating
              </p>
              <p className="text-sm text-gray-400 font-semibold mt-1">
                3,600+ ratings
              </p>
            </div>

            {/* Right Branch (Flipped) */}
            <LaurelWreath className="w-16 h-16 md:w-24 md:h-24 text-gray-500 opacity-60" flip={true} />

          </div>
        </div>

        {/* BRAND LOGOS (Blurred background) */}
        {/* Using stylized text to simulate logos as per your image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center mt-20 opacity-30 grayscale hover:opacity-50 transition-opacity duration-500">

          <div className="text-3xl font-black font-sans tracking-tighter text-gray-400">
            NAPA
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-4 border-gray-400"></div>
            <span className="text-2xl font-bold text-gray-400 font-serif">Hilton</span>
          </div>

          <div className="text-2xl font-bold italic text-gray-400">
            TERMINIX
          </div>

          <div className="text-2xl font-extrabold text-gray-400 font-mono tracking-widest">
            JACOBS
          </div>

          <div className="text-3xl font-bold text-gray-400 font-sans flex items-center">
            <span className="text-4xl mr-1">Mr.</span> Rooter
          </div>

          <div className="text-xl font-semibold text-gray-400 uppercase border-2 border-gray-400 px-2 py-1">
            U.S. XPRESS
          </div>

          <div className="text-2xl font-bold text-gray-400 flex flex-col items-center leading-none">
            <span>HABITAT</span>
            <span className="text-xs tracking-widest">FOR HUMANITY</span>
          </div>

          <div className="text-3xl font-black italic text-gray-400">
            DHL
          </div>

        </div>
      </div>

      {/* Subtle bottom gradient to connect with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1B2533] to-transparent pointer-events-none"></div>
    </section>
  )
}