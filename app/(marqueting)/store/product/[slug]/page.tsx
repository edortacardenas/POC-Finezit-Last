// app/product/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react"; // Iconos opcionales

// 1. Obtener un solo producto basado en el slug de la URL
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

// 2. Componente de la página
export default async function ProductPage({ params }: { params: { slug: string } }) {
    // En Next.js 15 params es una promesa, pero en versiones anteriores es directo. 
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return notFound(); // Muestra página 404 si el slug no existe
    }

    return (
        <div className="min-h-screen bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Botón volver */}
                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Volver a la tienda
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
                    <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg border">
                        {product.image ? (
                            <Image
                                src={urlFor(product.image).width(800).url()}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority // Carga esta imagen con prioridad por ser la principal
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-400">Sin imagen</div>
                        )}
                    </div>

                    {/* --- COLUMNA DERECHA: INFO Y COMPRA --- */}
                    <div className="flex flex-col gap-6 pt-4">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <p className="text-3xl font-medium text-gray-900">${product.price}</p>
                        </div>

                        <div className="border-t border-b py-6">
                            <p className="text-gray-600 leading-relaxed">
                                {product.description || "Sin descripción disponible para este producto."}
                            </p>
                        </div>

                        {/* BOTÓN DE COMPRA - Aquí usamos el buyUrl */}
                        <div className="flex flex-col gap-3">
                            {product.buyUrl ? (
                                <a
                                    href={product.buyUrl}
                                    target="_blank" // Abre en nueva pestaña (Stripe)
                                    rel="noopener noreferrer"
                                    className="w-full bg-black text-white text-center py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-transform active:scale-95"
                                >
                                    Comprar Ahora
                                </a>
                            ) : (
                                <button disabled className="w-full bg-gray-300 text-gray-500 py-4 rounded-full font-bold cursor-not-allowed">
                                    No disponible para compra
                                </button>
                            )}

                        </div>

                        {/* Garantías (Decorativo) */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span>Pago Seguro</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-blue-600" />
                                <span>Entrega Inmediata</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}