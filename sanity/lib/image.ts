// sanity/lib/image.ts
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from './client' // Importa el cliente que acabamos de crear

const imageBuilder = createImageUrlBuilder(client)

export const urlFor = (source: Image) => {
    return imageBuilder.image(source)
}

