import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // IMPORTANTE: 
    // false: Trae los datos frescos directamente de la base de datos (ideal para el dashboard).
    // true: Trae datos de la caché global (más rápido, ideal para la web pública que ve el cliente).
    useCdn: false,
})