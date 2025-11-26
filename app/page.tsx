import { HeroSection } from "@/components/blocks/hero-section"
import MarqueeLogo from "@/components/blocks/marquee-logo"
import TrustSection from "@/components/blocks/trust-section"
import { TestimonialSlider } from "@/components/blocks/testimonial-slider"
import { TrustStatsSection } from "@/components/blocks/trust-stats-section"
import FloatingAgent from "@/components/floating-agent"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
// import { AnimatedCard } from "@/components/ui/animated-card" // La tienes importada pero no la usabas, la puedes usar si gustas.
import { ArrowRight, ShoppingBag } from "lucide-react" // Agregué iconos para los productos
import Link from "next/link"
import FeaturesSection from "@/components/blocks/FeaturesSection"

// --- IMPORTS DE SANITY ---
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

// 1. Función para obtener productos (Server Side)
async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc)[0...3] { // Limitamos a 3 para no saturar el home
    _id,
    name,
    price,
    description,
    image,
    "slug": slug.current
  }`;

  // Cache de 60 segundos para mantener la web rápida
  return client.fetch(query, {}, { next: { revalidate: 60 } });
}

// 2. Convertimos el componente a async
export default async function HomePage() {
  const products = await getProducts();

  return (
    <>

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Logo Marquee */}
        <MarqueeLogo />

        {/* New Unified Trust & Stats Section */}
        <TrustStatsSection />

        {/* Features Grid - OneStepGPS Style */}
        <FeaturesSection />

        {/* --- NUEVA SECCIÓN: PRODUCTOS DESTACADOS --- */}
        {products.length > 0 && (
          <section className="py-20 bg-muted/30 border-t border-b">
            <div className="container mx-auto px-4">
              {/* Header de la sección */}
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  New Arrivals
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Featured Solutions</h2>
                <p className="text-lg text-muted-foreground">
                  Explore our exclusive products and services designed to streamline your workflow.
                </p>
              </div>

              {/* Grid de Productos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product: any) => (
                  <Link
                    key={product._id}
                    href={`/store/product/${product.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Imagen del Producto */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      {product.image ? (
                        <Image
                          src={urlFor(product.image).width(600).url()}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          <ShoppingBag className="h-12 w-12 opacity-20" />
                        </div>
                      )}

                      {/* Overlay al hacer hover (Efecto sutil) */}
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                    </div>

                    {/* Contenido del Card */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <span className="font-bold text-lg text-primary bg-primary/10 px-2 py-1 rounded-md">
                          ${product.price}
                        </span>
                      </div>

                      <p className="text-muted-foreground line-clamp-2 text-sm mb-6 flex-1">
                        {product.description || "High-quality solution for your business needs."}
                      </p>

                      <Button className="w-full gap-2 group-hover:bg-primary/90">
                        View Details <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Botón ver todo (Opcional) */}
              <div className="mt-12 text-center">
                <Link href="/store"> {/* Si creas una página con todos los productos */}
                  <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                    Browse all products <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Existing Trust/Rating Section */}
        <TrustSection />

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">What our clients say</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Thousands of companies trust Tailwind for their fiscal and accounting management
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
    </>
  )
}