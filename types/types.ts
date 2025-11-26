// types.ts (opcional, o ponlo en el mismo archivo)
export interface Product {
    _id: string;
    name: string;
    price: number;
    slug: string; // Ojo: Aquí ya recibiremos el string, no el objeto
    image: any;
    description: string;
    buyUrl: string;
}