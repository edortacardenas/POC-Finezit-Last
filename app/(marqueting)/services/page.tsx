
import { AnimatedCard } from "@/components/ui/animated-card"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, Shield, BarChart3, Users, Headphones } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "Electronic Invoicing",
    description: "Automatic invoice generation compliant with tax regulations.",
    benefits: [
      "Issued in seconds",
      "Customizable templates",
      "Automatic email delivery",
      "Client portal",
    ],
  },
  {
    icon: Calculator,
    title: "Cloud Accounting",
    description: "Automatic accounting records updated in real-time.",
    benefits: [
      "Bank synchronization",
      "Smart categorization",
      "Automatic reconciliation",
      "Instant balance sheets",
    ],
  },
  {
    icon: Shield,
    title: "Tax Compliance",
    description: "Stay up to date with all your tax obligations.",
    benefits: [
      "Monthly filings",
      "Automatic tax calculation",
      "Due date alerts",
      "Document backup",
    ],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Visualize your business financial status in real-time.",
    benefits: ["Interactive dashboards", "Custom reports", "Trend analysis", "Data export"],
  },
  {
    icon: Users,
    title: "Client Portal",
    description: "Give your clients access to consult their tax information.",
    benefits: ["24/7 Secure access", "Invoice download", "Complete history", "Automatic notifications"],
  },
  {
    icon: Headphones,
    title: "Specialized Support",
    description: "Team of tax experts available when you need them.",
    benefits: ["Live chat", "Phone support", "Knowledge base", "Personalized advisory"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Complete solutions for your company's tax and accounting management
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-slate-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to get started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Contact us to learn how we can help you optimize your tax management
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}