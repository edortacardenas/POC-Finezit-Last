// app/product/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react"; // Optional icons

// 1. Get a single product based on the URL slug
async function getProduct(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    description,
    image,
    buyUrl
  }`;

    return client.fetch(query, { slug });
}

// 2. Page component
export default async function ProductPage({ params }: { params: { slug: string } }) {
    // In Next.js 15 params is a promise, but in previous versions it is direct. 
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return notFound(); // Shows 404 page if slug does not exist
    }

    return (
        <div className="min-h-screen bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Back button */}
                <Link href="/store" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to store
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* --- LEFT COLUMN: IMAGE --- */}
                    <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg border">
                        {product.image ? (
                            <Image
                                src={urlFor(product.image).width(800).url()}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority // Load this image with priority because it's the main one
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-400">No image</div>
                        )}
                    </div>

                    {/* --- RIGHT COLUMN: INFO AND BUY --- */}
                    <div className="flex flex-col gap-6 pt-4">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <p className="text-3xl font-medium text-gray-900">${product.price}</p>
                        </div>

                        <div className="border-t border-b py-6">
                            <p className="text-gray-600 leading-relaxed">
                                {product.description || "No description available for this product."}
                            </p>
                        </div>

                        {/* BUY BUTTON - Here we use the buyUrl */}
                        <div className="flex flex-col gap-3">
                            {product.buyUrl ? (
                                <a
                                    href={product.buyUrl}
                                    target="_blank" // Opens in new tab (Stripe)
                                    rel="noopener noreferrer"
                                    className="w-full bg-black text-white text-center py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-transform active:scale-95"
                                >
                                    Buy Now
                                </a>
                            ) : (
                                <button disabled className="w-full bg-gray-300 text-gray-500 py-4 rounded-full font-bold cursor-not-allowed">
                                    Not available for purchase
                                </button>
                            )}

                        </div>

                        {/* Guarantees (Decorative) */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-blue-600" />
                                <span>Instant Delivery</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}