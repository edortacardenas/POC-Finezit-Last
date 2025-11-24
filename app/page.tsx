import { HeroSection } from "@/components/blocks/hero-section"
import MarqueeLogo from "@/components/blocks/marquee-logo"
import TrustSection from "@/components/blocks/trust-section"
import { TestimonialSlider } from "@/components/blocks/testimonial-slider"
import { TrustStatsSection } from "@/components/blocks/trust-stats-section"
import FloatingAgent from "@/components/floating-agent"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Clock, MapPin, MessageSquareWarning, DollarSign } from "lucide-react"
import Link from "next/link"
import FeaturesSection from "@/components/blocks/FeaturesSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Logo Marquee */}
        <MarqueeLogo />

        {/* New Unified Trust & Stats Section */}
        <TrustStatsSection />

        {/* Features Grid - OneStepGPS Style */}
        <FeaturesSection />

        {/* Existing Trust/Rating Section (Stars & Laurels) - Keeping as it complements the layout */}
        <TrustSection />


        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">What our clients say</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Thousands of companies trust Finezit for their fiscal and accounting management
              </p>
            </div>
            <TestimonialSlider />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to simplify your accounting?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Join thousands of businesses that have already optimized their tax management with Finezit
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Start for Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <FloatingAgent />
      </main>
      <Footer />
    </>
  )
}