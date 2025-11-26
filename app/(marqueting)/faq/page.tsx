
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "What is Finezit?",
        a: "Finezit is a comprehensive cloud-based tax and accounting management platform designed for entrepreneurs and businesses. We offer tools for invoicing, accounting, tax compliance, and more.",
      },
      {
        q: "How do I start using Finezit?",
        a: "It's very simple. Sign up on our platform, choose the plan that best fits your needs, and start managing your accounting immediately. We offer tutorials and support to help you every step of the way.",
      },
      {
        q: "Can I try Finezit before subscribing?",
        a: "Yes, we offer a 14-day free trial with no credit card required. You will be able to explore all the platform's features.",
      },
    ],
  },
  {
    category: "Invoicing",
    questions: [
      {
        q: "How do I generate an invoice?",
        a: "From the invoicing dashboard, simply fill in the client details, add products or services, and click 'Generate'. The invoice is automatically stamped and sent to the client.",
      },
      {
        q: "Can I cancel an invoice?",
        a: "Yes, you can cancel invoices directly from the platform following the official tax authority process. The system handles everything automatically.",
      },
      {
        q: "Do the invoices comply with tax regulations?",
        a: "Absolutely. All invoices generated in Finezit comply 100% with SAT requirements and are correctly stamped.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as bank transfers for annual plans.",
      },
      {
        q: "Can I change my plan?",
        a: "Yes, you can upgrade or downgrade your plan at any time from your account. Changes are applied immediately, and billing is adjusted proportionally.",
      },
      {
        q: "Are there any hidden costs?",
        a: "No, all our prices are transparent. The price you see is the price you pay, with no surprise extra charges.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "What type of support do you offer?",
        a: "We offer support via email, live chat, and phone. Professional and Enterprise plans include 24/7 priority support.",
      },
      {
        q: "Do you have documentation or tutorials?",
        a: "Yes, we have a complete knowledge base with articles, video tutorials, and step-by-step guides for all features.",
      },
      {
        q: "Do you offer training?",
        a: "Enterprise plans include personalized training for your team. For other plans, we regularly offer group webinars.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Find answers to the most common questions about Finezit
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="General" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                {faqCategories.map((cat) => (
                  <TabsTrigger key={cat.category} value={cat.category}>
                    {cat.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {faqCategories.map((cat) => (
                <TabsContent key={cat.category} value={cat.category} className="mt-8">
                  <Accordion type="single" collapsible>
                    {cat.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
    </>
  )
}