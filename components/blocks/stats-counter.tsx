"use client"

import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"

const stats = [
  { value: 5000, suffix: "+", label: "Active Clients" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 50000, suffix: "+", label: "Invoices Processed" },
  { value: 24, suffix: "/7", label: "Support" },
]

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
            {isVisible ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
            {stat.suffix}
          </div>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}