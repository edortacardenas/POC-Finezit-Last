import { AnimatedCard } from "@/components/ui/animated-card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Finezit</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Transforming tax and accounting management for Mexican businesses
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedCard delay={0}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="leading-relaxed text-slate-600">
                  To democratize access to professional tax and accounting tools, allowing companies of all sizes to
                  focus on what they do best: growing their business.
                </p>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
                <p className="leading-relaxed text-slate-600">
                  To be the leading cloud-based tax and accounting platform in Mexico, recognized for its innovation,
                  ease of use, and commitment to our clients&apos; success.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Finezit was born from the need to simplify tax and accounting management for entrepreneurs and small
                  businesses in Mexico. We saw that many businesses spent hours on administrative tasks that could be
                  automated.
                </p>
                <p>
                  In 2020, we launched our first version with the goal of making accounting accessible to everyone. Since
                  then, we have helped thousands of companies optimize their tax management and comply with their
                  obligations simply and effectively.
                </p>
                <p>
                  Today, Finezit is a complete platform that combines cutting-edge technology with specialized human
                  support, backing the growth of businesses across Mexico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <AnimatedCard delay={0}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                  <p className="text-sm text-slate-600">
                    We strive for perfection in every detail of our platform and service
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Transparency</h3>
                  <p className="text-sm text-slate-600">
                    Clear and honest communication with our clients and collaborators
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Innovation</h3>
                  <p className="text-sm text-slate-600">
                    Constant improvement and adoption of new technologies to serve better
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}