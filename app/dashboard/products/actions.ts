// app/dashboard/products/actions.ts
'use server'

import { adminClient } from "@/sanity/lib/sanity.admin";
import { revalidatePath } from "next/cache";

// Definimos la estructura de la respuesta
export type State = {
    success: boolean;
    message: string | null;
};

// --- CREAR PRODUCTO ---
export async function createProduct(prevState: State, formData: FormData): Promise<State> {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const buyUrl = formData.get("buyUrl") as string;
    const imageFile = formData.get("image") as File;
    const altText = formData.get("alt") as string;

    if (!name || !price) {
        return { success: false, message: "El nombre y el precio son obligatorios." };
    }

    const slugCurrent = name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

    try {
        let imageAssetId = null;

        if (imageFile && imageFile.size > 0) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const asset = await adminClient.assets.upload('image', buffer, {
                filename: imageFile.name,
                contentType: imageFile.type
            });
            imageAssetId = asset._id;
        }

        await adminClient.create({
            _type: "product",
            name,
            slug: { _type: "slug", current: slugCurrent },
            price,
            description,
            buyUrl,
            ...(imageAssetId && {
                image: {
                    _type: "image",
                    asset: { _type: "reference", _ref: imageAssetId },
                    alt: altText || name
                }
            })
        });

        revalidatePath("/dashboard/products");
        return { success: true, message: "¡Producto agregado con éxito!" };
    } catch (error) {
        console.error("Error creating product:", error);
        return { success: false, message: "Error al guardar el producto." };
    }
}

// --- NUEVO: EDITAR PRODUCTO ---
export async function updateProduct(prevState: State, formData: FormData): Promise<State> {
    // 1. Necesitamos el ID para saber qué editar
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const buyUrl = formData.get("buyUrl") as string;
    const imageFile = formData.get("image") as File;
    const altText = formData.get("alt") as string;

    if (!id) return { success: false, message: "Falta el ID del producto" };
    if (!name || !price) return { success: false, message: "Nombre y precio requeridos" };

    // (Opcional) Regeneramos el slug si cambia el nombre. 
    // Nota: Cambiar slugs puede afectar SEO, pero mantiene coherencia visual.
    const slugCurrent = name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

    try {
        // Objeto con los datos básicos a actualizar
        const attributesToUpdate: any = {
            name,
            price,
            description,
            buyUrl,
            slug: { _type: "slug", current: slugCurrent }
        };

        // 2. Lógica de imagen: Solo subimos si hay un archivo nuevo
        if (imageFile && imageFile.size > 0) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const asset = await adminClient.assets.upload('image', buffer, {
                filename: imageFile.name,
                contentType: imageFile.type
            });

            // Agregamos la nueva imagen al objeto de actualización
            attributesToUpdate.image = {
                _type: "image",
                asset: { _type: "reference", _ref: asset._id },
                alt: altText || name
            };
        } else if (altText) {
            // Si NO cambia la imagen pero SÍ el texto alternativo, necesitamos lógica especial
            // O bien, simplemente ignoramos esto si no es crítico.
            // Para editar SOLO el alt de una imagen existente, Sanity requiere un patch más complejo al path 'image.alt'.
            // Por simplicidad, aquí asumimos que se actualiza imagen completa o nada.
        }

        // 3. Ejecutar el PATCH en Sanity
        await adminClient
            .patch(id)          // Buscamos por ID
            .set(attributesToUpdate) // Reemplazamos los campos
            .commit();          // Guardamos cambios

        revalidatePath("/dashboard/products");
        return { success: true, message: "¡Producto actualizado correctamente!" };
    } catch (error) {
        console.error("Error updating product:", error);
        return { success: false, message: "Error al actualizar." };
    }
}

// --- ELIMINAR PRODUCTO ---
export async function deleteProduct(id: string) {
    try {
        await adminClient.delete(id);
        revalidatePath("/dashboard/products");
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}