import { defineType, defineField } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        // 1. NOMBRE DEL PRODUCTO
        defineField({
            name: 'name',
            title: 'Nombre del Producto',
            type: 'string',
            validation: (rule) => rule.required() // Hace que sea obligatorio
        }),
        // 2. SLUG (Necesario para la URL en Next.js: /productos/mi-producto)
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name', // Genera el slug automáticamente basado en el nombre
                maxLength: 96
            },
            validation: (rule) => rule.required()
        }),
        // 3. IMAGEN DEL PRODUCTO
        defineField({
            name: 'image',
            title: 'Imagen del Producto',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                    validation: (rule) => rule.required().warning('El texto alternativo es importante para SEO y accesibilidad')
                }
            ]
        }),
        // 4. PRECIO
        defineField({
            name: 'price',
            title: 'Precio',
            type: 'number',
            description: 'Precio en USD (o tu moneda local)',
            validation: (rule) => rule.required().positive().precision(2) // Asegura que sea positivo y con max 2 decimales
        }),
        // 5. ENLACE DE COMPRA (El botón)
        defineField({
            name: 'buyUrl',
            title: 'Enlace de Compra',
            description: 'Pega aquí el enlace a Stripe, PayPal o tu página de checkout',
            type: 'url',
            validation: (rule) => rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }),
        // Opcional: Descripción corta
        defineField({
            name: 'description',
            title: 'Descripción Corta',
            type: 'text',
            rows: 3
        })
    ],
})