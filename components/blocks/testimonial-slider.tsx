"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Founder of TechStart",
    content: "Finezit completely transformed our accounting management. Now everything is faster and more transparent.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Financial Director, Retail MX",
    content: "The support is exceptional and the platform is very intuitive. 100% recommended.",
    rating: 5,
  },
  {
    name: "Laura Sánchez",
    role: "Independent Consultant",
    content: "Perfect for freelancers. It saves me hours of administrative work every month.",
    rating: 5,
  },
]

export function TestimonialSlider() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 " style={{ fill: 'var(--primary-color)' }} />
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed">{testimonial.content}</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-accent3-color text-primary-foreground">
                  {testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}