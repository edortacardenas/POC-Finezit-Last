// app/dashboard/products/page.tsx
import { client } from "@/sanity/lib/client";
import { CreateForm } from "./CreateForm";
import { DeleteButton } from "./DeleteButton";
import { EditProduct } from "./EditProduct";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getProducts() {
    const query = `*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, image, description, buyUrl
  }`;
    return client.fetch(query, {}, { cache: 'no-store' });
}

export default async function ProductsDashboard() {
    const products = await getProducts();

    return (
        <>
            {/* 1. Header Responsive (px-4 en móvil, px-8 en escritorio) */}
            <div className="border-b bg-background px-4 py-6 md:px-8">
                <h1 className="text-2xl md:text-3xl font-bold">Products Management</h1>
                <p className="text-sm md:text-base text-muted-foreground">Manage your store inventory here</p>
            </div>

            {/* 2. Contenido Responsive */}
            <div className="p-4 md:p-8">

                <CreateForm />

                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Inventory ({products.length})</h2>

                    <div className="grid grid-cols-1 gap-4">
                        {products.map((product: any) => (
                            <div
                                key={product._id}
                                // CAMBIO CLAVE: flex-col en móvil, md:flex-row en escritorio
                                className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4"
                            >

                                {/* CONTENEDOR INFO (Imagen + Texto) */}
                                {/* Ocupa todo el ancho disponible y agrupa imagen y texto */}
                                <div className="flex flex-1 gap-4 items-start md:items-center w-full">

                                    {/* Imagen */}
                                    <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border">
                                        {product.image ? (
                                            <Image
                                                src={urlFor(product.image).width(200).url()}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-xs text-gray-400">No img</div>
                                        )}
                                    </div>

                                    {/* Info Texto */}
                                    <div className="flex-grow min-w-0">
                                        {/* break-words evita que nombres largos rompan el diseño */}
                                        <h3 className="font-bold text-lg text-gray-900 break-words leading-tight mb-1">{product.name}</h3>
                                        <p className="text-green-600 font-semibold text-base">${product.price}</p>
                                    </div>
                                </div>

                                {/* CONTENEDOR BOTONES (Abajo en móvil, Derecha en escritorio) */}
                                <div className="w-full md:w-auto border-t pt-3 mt-1 md:border-t-0 md:pt-0 md:mt-0">
                                    {/* 
                                       En móvil: Grid de 2 columnas para botones grandes y fáciles de tocar.
                                       En escritorio: Flex row normal al final de la línea.
                                    */}
                                    <div className="grid grid-cols-2 gap-3 md:flex md:flex-row">
                                        {/* Nota: Asegúrate que EditProduct y DeleteButton acepten className o envuélvelos en divs si es necesario */}
                                        <div className="w-full md:w-auto [&>button]:w-full">
                                            <EditProduct product={product} />
                                        </div>
                                        <div className="w-full md:w-auto [&>button]:w-full">
                                            <DeleteButton id={product._id} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}