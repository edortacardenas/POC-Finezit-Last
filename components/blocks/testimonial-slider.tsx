"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    role: "Founder of TechStart",
    content: "Finezit completely transformed our accounting management. Now everything is faster and more transparent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Carlos Ramírez",
    role: "Financial Director, Retail MX",
    content: "The support is exceptional and the platform is very intuitive. 100% recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Laura Sánchez",
    role: "Independent Consultant",
    content: "Perfect for freelancers. It saves me hours of administrative work every month.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
  },
]

export function TestimonialSlider() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/50"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent3-color/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardContent className="relative pt-8 pb-6 px-6">
            {/* Quote icon */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="h-12 w-12" style={{ color: 'var(--primary-color)' }} />
            </div>

            {/* Rating stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 transition-transform group-hover:scale-110"
                  style={{ fill: 'var(--primary-color)', color: 'var(--primary-color)' }}
                />
              ))}
            </div>

            {/* Testimonial content */}
            <p className="mb-6 text-sm md:text-base leading-relaxed text-foreground/90 min-h-[80px]">
              "{testimonial.content}"
            </p>

            {/* Author info with photo */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent3-color rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-background shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm md:text-base text-foreground truncate">
                  {testimonial.name}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}