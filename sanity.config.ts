/*// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

// Definimos la configuración en una variable
const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    title: 'Mi Products Here',
    apiVersion: '2024-01-01',
    basePath: '/studio',
    plugins: [
        structureTool(),
        visionTool(),
    ],
    schema: schema,
})

// IMPORTANTE: Esta es la línea que te falta o está fallando
export default config
*/