

import FloatingAgent from "@/components/floating-agent"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// --- IMPORTS DE SANITY ---
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

// 1. Query para traer TODOS los productos (sin límite)
async function getAllProducts() {
    const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    price,
    description,
    image,
    "slug": slug.current
  }`;

    // Revalidamos cada 0 segundos (siempre fresco) o 60 si prefieres caché
    return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function StorePage() {
    const products = await getAllProducts();

    return (
        <>
            <main className="min-h-screen bg-background">

                {/* --- STORE HEADER (Estilo Hero simplificado) --- */}
                <section className="bg-muted/30 py-20 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
                            Our Complete Catalog
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
                            Explore all our accounting solutions, software licenses, and services tailored for your business growth.
                        </p>

                        {/* Buscador Visual (Decorativo por ahora) */}
                        <div className="mx-auto max-w-md relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-3 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                            />
                        </div>
                    </div>
                </section>

                {/* --- GRID DE PRODUCTOS --- */}
                <section className="py-16">
                    <div className="container mx-auto px-4">

                        {products.length > 0 ? (
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

                                            {/* Badge de Precio Flotante */}
                                            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm border">
                                                ${product.price}
                                            </div>

                                            {/* Overlay al hover */}
                                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                                        </div>

                                        {/* Contenido */}
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-2">
                                                <h3 className="font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                            </div>

                                            <p className="text-muted-foreground line-clamp-2 text-sm mb-6 flex-1">
                                                {product.description || "Professional solution designed for efficiency and compliance."}
                                            </p>

                                            <Button className="w-full gap-2 group-hover:bg-primary/90">
                                                View Details <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            // Estado Vacio
                            <div className="text-center py-20">
                                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                                <h3 className="text-2xl font-bold text-gray-800">No products found</h3>
                                <p className="text-muted-foreground mt-2">Check back later for new arrivals.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* --- CTA FINAL (Igual al Home para consistencia) --- */}
                <section className="bg-primary py-20 text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Can't find what you're looking for?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                            Contact our sales team for custom solutions or specific software requirements.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary">
                                    Contact Sales
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                                >
                                    Return Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}