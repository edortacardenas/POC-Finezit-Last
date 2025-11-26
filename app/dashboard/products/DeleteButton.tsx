// app/dashboard/products/DeleteButton.tsx
'use client'

import { deleteProduct } from "./actions";
import { useTransition } from "react";

export function DeleteButton({ id }: { id: string }) {
    let [isPending, startTransition] = useTransition();

    return (
        <button
            onClick={() => startTransition(() => void deleteProduct(id))}
            disabled={isPending}
            className="text-red-500 hover:text-red-700 disabled:opacity-50"
        >
            {isPending ? "Eliminando..." : "Eliminar"}
        </button>
    );
}