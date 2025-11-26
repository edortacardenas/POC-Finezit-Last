// app/dashboard/products/EditProduct.tsx
'use client'

import { useActionState, useState, useEffect, useRef } from "react";
import { updateProduct, State } from "./actions";

// Definimos qué forma tiene el producto que recibimos
interface ProductProps {
    _id: string;
    name: string;
    price: number;
    description?: string;
    buyUrl?: string;
}

const initialState: State = {
    success: false,
    message: null,
};

export function EditProduct({ product }: { product: ProductProps }) {
    const [isOpen, setIsOpen] = useState(false); // Controla si el modal se ve
    const [state, formAction, isPending] = useActionState(updateProduct, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    // Cerrar el modal si la actualización fue exitosa
    useEffect(() => {
        if (state.success) {
            alert(state.message); // Opcional: Notificación
            setIsOpen(false); // Cerramos el modal
            // No reseteamos el form aquí porque queremos que sigan los datos nuevos
        }
    }, [state.success, state.message]);

    return (
        <>
            {/* 1. BOTÓN ACTIVADOR */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
                Editar
            </button>

            {/* 2. EL MODAL (Solo se renderiza si isOpen es true) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

                        {/* Encabezado del Modal */}
                        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
                            <h3 className="text-lg font-bold">Editar Producto</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-black font-bold text-xl"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Formulario */}
                        <div className="p-6">
                            <form
                                ref={formRef}
                                action={formAction}
                                className="flex flex-col gap-4"
                                suppressHydrationWarning={true}
                            >
                                {/* --- ID OCULTO (CRUCIAL PARA EDITAR) --- */}
                                <input type="hidden" name="id" value={product._id} />

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500">Nombre</label>
                                        <input
                                            name="name"
                                            type="text"
                                            defaultValue={product.name}
                                            className="w-full p-2 border rounded"
                                            required
                                            suppressHydrationWarning={true}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500">Precio</label>
                                        <input
                                            name="price"
                                            type="number"
                                            step="0.01"
                                            defaultValue={product.price}
                                            className="w-full p-2 border rounded"
                                            required
                                            suppressHydrationWarning={true}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500">Nueva Imagen (Opcional)</label>
                                    <input
                                        name="image"
                                        type="file"
                                        accept="image/*"
                                        className="w-full text-sm border p-2 rounded bg-gray-50"
                                        suppressHydrationWarning={true}
                                    />
                                    <p className="text-xs text-gray-400 mt-1">Deja esto vacío para mantener la imagen actual.</p>
                                </div>

                                {/* Alt text para la imagen (Opcional en edit) */}
                                <input
                                    name="alt"
                                    type="text"
                                    placeholder="Descripción imagen (Alt Text)"
                                    className="p-2 border rounded text-sm"
                                    suppressHydrationWarning={true}
                                />

                                <div>
                                    <label className="text-xs font-bold text-gray-500">Enlace de Compra</label>
                                    <input
                                        name="buyUrl"
                                        type="url"
                                        defaultValue={product.buyUrl}
                                        className="w-full p-2 border rounded"
                                        suppressHydrationWarning={true}
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500">Descripción</label>
                                    <textarea
                                        name="description"
                                        defaultValue={product.description}
                                        className="w-full p-2 border rounded h-24"
                                        suppressHydrationWarning={true}
                                    />
                                </div>

                                {/* Botones de Acción */}
                                <div className="flex gap-3 mt-4 pt-4 border-t">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 py-2 px-4 border rounded hover:bg-gray-100"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className={`flex-1 py-2 px-4 rounded text-white font-bold
                                            ${isPending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                                    >
                                        {isPending ? "Guardando..." : "Guardar Cambios"}
                                    </button>
                                </div>

                                {!state.success && state.message && (
                                    <p className="text-red-500 text-center text-sm">{state.message}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}