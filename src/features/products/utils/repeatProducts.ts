import type { Product } from "../types/product";

export function repeatProducts(products: Product[], count: number) {
    if (products.length === 0) {
        return [];
    }

    return Array.from({ length: count }, (_, i) => ({ ...products[i % products.length], id: i + 1 }));
}