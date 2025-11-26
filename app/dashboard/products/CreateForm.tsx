// app/dashboard/products/CreateForm.tsx
'use client'

import { useActionState, useRef, useEffect } from "react";
import { createProduct, State } from "./actions";
import {
    Loader2,
    Package,
    DollarSign,
    Image as ImageIcon,
    Link as LinkIcon,
    FileText
} from "lucide-react";

const initialState: State = {
    success: false,
    message: null,
};

export function CreateForm() {
    const [state, formAction, isPending] = useActionState(createProduct, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    // Limpiar formulario al tener éxito
    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
            // Opcional: Podrías usar un Toast aquí en lugar de alert
            alert(state.message);
        }
    }, [state.success, state.message]);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header del Formulario */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    Agregar Nuevo Producto
                </h2>
                <p className="text-xs text-slate-500 mt-1">Completa la información para publicar en la tienda.</p>
            </div>

            <div className="p-6">
                <form
                    ref={formRef}
                    action={formAction}
                    className="flex flex-col gap-6"
                    suppressHydrationWarning={true}
                >

                    {/* Fila 1: Nombre y Precio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nombre */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Nombre del Producto <span className="text-red-500">*</span></label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Ej: Bouncie GPS Tracker"
                                className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                required
                                suppressHydrationWarning={true}
                            />
                        </div>

                        {/* Precio */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Precio <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <DollarSign className="h-4 w-4 text-slate-400" />
                                </div>
                                <input
                                    name="price"
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    className="w-full pl-9 p-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    required
                                    suppressHydrationWarning={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sección de Imagen (Estilo Drag & Drop visual) */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Imagen del Producto</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="flex flex-col items-center justify-center gap-3 text-center">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <ImageIcon className="h-6 w-6 text-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-700">
                                        Sube una imagen
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        JPG, PNG o WEBP (Max 10MB)
                                    </p>
                                </div>
                                {/* Input File Real pero estilizado */}
                                <input
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-xs file:font-semibold
                                        file:bg-blue-50 file:text-blue-700
                                        hover:file:bg-blue-100
                                        cursor-pointer mx-auto max-w-xs"
                                    suppressHydrationWarning={true}
                                />
                            </div>

                            {/* Alt Text anidado aquí para contexto */}
                            <div className="mt-4 pt-4 border-t border-slate-200">
                                <input
                                    name="alt"
                                    type="text"
                                    placeholder="Descripción de la imagen (Alt Text para SEO)"
                                    className="w-full p-2 bg-white border border-slate-300 rounded text-xs text-slate-600 focus:border-blue-500 outline-none"
                                    suppressHydrationWarning={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* URL de Compra */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Enlace de Pago (Stripe/PayPal)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LinkIcon className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                name="buyUrl"
                                type="url"
                                placeholder="https://buy.stripe.com/..."
                                className="w-full pl-9 p-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                suppressHydrationWarning={true}
                            />
                        </div>
                        <p className="text-xs text-slate-500">El cliente será redirigido a esta URL al hacer clic en "Comprar".</p>
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-slate-400" /> Descripción
                        </label>
                        <textarea
                            name="description"
                            placeholder="Describe las características principales del producto..."
                            className="w-full p-3 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]"
                            suppressHydrationWarning={true}
                        />
                    </div>

                    {/* Mensaje de Error */}
                    {!state.success && state.message && (
                        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center animate-in fade-in slide-in-from-top-2">
                            {state.message}
                        </div>
                    )}

                    {/* Botón de Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg font-bold text-white shadow-sm transition-all transform active:scale-[0.99]
                                ${isPending
                                    ? 'bg-slate-400 cursor-not-allowed opacity-80'
                                    : 'bg-slate-900 hover:bg-slate-800 hover:shadow-md'
                                }`}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Guardando...
                                </>
                            ) : (
                                "Publicar Producto"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}