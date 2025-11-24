'use client'

import Marquee from "react-fast-marquee"
import Image from "next/image"

// High quality images URLs (Unsplash) related to logistics and tech
const fleetImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop&q=80", // Trucks
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&q=80", // Warehouse
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500&h=300&fit=crop&q=80", // GPS Map
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&q=80", // Dashboard Tech
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop&q=80", // Tech Team
]

// Simulated logos for "Trusted By" (Using stylized text placeholders)
const clientLogos = [
  "LOGISTICS PRO", "MX TRANSPORT", "SECURE FLEET", "TECH CARGO", "RAPID DELIVERY", "NORTH TRAVEL", "CARGO EXPRESS"
]

export default function MarqueeLogo() {
  return (
    <div className="py-16 bg-white space-y-20 overflow-hidden">

      {/* 1. LOGO SECTION ("Trusted By" style) */}
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Companies that trust Finezit for their tracking
        </p>

        {/* Container with Gradient Mask for fading edges */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <Marquee gradient={false} speed={40} pauseOnHover autoFill>
            {clientLogos.map((logo, index) => (
              <div key={index} className="mx-8 md:mx-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                {/* Real <Image /> tags with SVG logos would go here */}
                <span className="text-2xl font-black text-gray-800 font-sans tracking-tighter">{logo}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* 2. VISUAL GALLERY SECTION (Nice images) */}
      <div className="bg-brand-50 py-12 border-y border-brand-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-navy-900">Technology in motion</h3>
        </div>

        {/* Image Slider Effect */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <Marquee gradient={false} speed={50} direction="right" pauseOnHover>
            {fleetImages.map((src, index) => (
              <div key={index} className="mx-4 group">
                <div className="relative w-[300px] h-[180px] rounded-xl overflow-hidden shadow-md border-2 border-white group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={src}
                    alt="Finezit feature"
                    fill
                    className="object-cover"
                    sizes="300px"
                    unoptimized={true}
                  />
                  {/* Blue overlay on hover */}
                  <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/20 transition-colors"></div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </div>
  )
}