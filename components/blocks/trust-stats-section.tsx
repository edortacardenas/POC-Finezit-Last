"use client"

import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"
import Image from "next/image"

const LOGOS = [
  "Bluegrass",
  "Chick-fil-A",
  "City of Stockton",
  "Coca-Cola",
  "Marriott",
  "Siemens",
  "Servpro",
  "Roto-Rooter",
]

const STATS = [
  { value: "5%", label: "of Fortune 100 companies trust us" },
  { value: "17M", label: "alerts generated annually" },
  { value: "20K", label: "fleets protect their drivers" },
  { value: "5.5B+", label: "miles tracked per year" },
]

export function TrustStatsSection() {
  return (
    <section className="flex flex-col pb-8">
      {/* Part 1: Top Bar */}
      <div className="bg-background pb-20 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="shrink-0 text-center lg:text-left">
              <p className="text-xl font-bold text-foreground">
                {/* CAMBIO: Color azul eliminado, ahora usa tu color primario (naranja/rojo) */}
                Over <span className="text-primary">20,000 fleets</span> trust
              </p>
              <div className="mt-1 text-2xl font-black text-foreground">Tailwind</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wrapper Principal */}
      <div className="relative">

        {/* Floating Marquee */}
        <div className="absolute left-0 right-0 top-0 z-30 flex -translate-y-1/2 justify-center px-4">
          {/* CAMBIO: bg-white -> bg-card para respetar temas oscuros/claros */}
          <div className="h-20 w-full max-w-6xl bg-card shadow-xl ring-1 ring-border">
            <Marquee gradient={true} gradientWidth={50} speed={40} className="h-full">
              {LOGOS.map((logo, idx) => (
                <div
                  key={idx}
                  className="mx-12 flex h-full items-center justify-center transition-transform hover:scale-105"
                >
                  <span className="text-lg font-bold text-foreground">{logo}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* 
          Sección de Fondo 
          CAMBIO: bg-blue-900 -> bg-neutral-950
          Se usa un fondo casi negro para que combine con el branding rojo/naranja.
        */}
        <div className="relative mx-2 overflow-hidden rounded-2xl bg-neutral-950 py-20 shadow-2xl lg:py-24">

          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/highway-traffic.jpg"
              alt="Highway Traffic"
              fill
              className="object-cover"
              priority
            />
            {/* CAMBIO: Overlay azul -> Overlay negro neutro para no chocar con el naranja */}
            <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
          </div>

          {/* Stats Content */}
          <div className="container relative z-10 mx-auto px-4 pt-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Why fleets choose us</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  // CAMBIO: bg-white -> bg-card
                  className="flex flex-col items-center justify-center rounded-xl bg-card p-8 text-center shadow-lg"
                >
                  {/* CAMBIO: text-[#209ee5] -> text-primary (Usa tu color de marca) */}
                  <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
                  <p className="text-balance font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}