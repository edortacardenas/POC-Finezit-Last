// lib/sanity.admin.ts
import { createClient } from "next-sanity";

export const adminClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
    useCdn: false, // Siempre false para escritura
    token: process.env.SANITY_API_TOKEN, // Tu token skxlt...
});