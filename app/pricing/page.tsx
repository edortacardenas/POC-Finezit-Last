
import { PricingTable } from "@/components/blocks/pricing-table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied immediately, and billing will be prorated accordingly.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, all our plans are contract-free. You can cancel at any time without penalties.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as bank transfers for annual plans.",
  },
  {
    question: "Is technical support included?",
    answer:
      "Yes, all plans include technical support. Professional and Enterprise plans feature 24/7 priority support.",
  },
]

export default function PricingPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Transparent Pricing</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the plan that best fits your business needs
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <PricingTable />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}