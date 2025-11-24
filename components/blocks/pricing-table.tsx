"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

const plans = [
  {
    name: "Entrepreneur",
    description: "Ideal for freelancers and small businesses",
    monthlyPrice: 499,
    annualPrice: 4990,
    popular: false,
    features: [
      "Up to 50 invoices/mo",
      "Basic client portal",
      "Email support",
      "Monthly reports",
      "1 user",
    ],
  },
  {
    name: "Professional",
    description: "For growing companies",
    monthlyPrice: 999,
    annualPrice: 9990,
    popular: true,
    features: [
      "Unlimited invoices",
      "Full client portal",
      "24/7 priority support",
      "Real-time reports",
      "Up to 5 users",
      "Monthly tax advisory",
      "Bank integration",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large enterprises",
    monthlyPrice: 2499,
    annualPrice: 24990,
    popular: false,
    features: [
      "Everything in Professional",
      "Unlimited users",
      "Dedicated account manager",
      "Weekly tax advisory",
      "Custom API",
      "Team training",
      "Guaranteed SLA",
    ],
  },
]

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={!isAnnual ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative h-7 w-14 rounded-full bg-muted transition-colors hover:bg-muted/80"
        >
          <div
            className={`absolute top-1 h-5 w-5 rounded-full bg-primary transition-transform ${isAnnual ? "translate-x-8" : "translate-x-1"
              }`}
          />
        </button>
        <span className={isAnnual ? "font-semibold" : "text-muted-foreground"}>
          Annual
          <Badge variant="secondary" className="ml-2" style={{ color: 'var(--primary-color)' }}>
            Save 17%
          </Badge>
        </span>
      </div>

      {/* Plans Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="secondary" style={{ color: 'var(--primary-color)' }} className="px-4 py-1">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {formatCurrency(isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Billed annually ({formatCurrency(plan.annualPrice)})
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}