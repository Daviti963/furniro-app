import { api } from "@/src/lib/axios";
import type { Product, ProductsResponse } from "../types/product";

export async function getProductsByCategory(category: string): Promise<Product[]> {
    'use cache'
    const response = await api.get<ProductsResponse>(`/products/category/${category}`);
    return response.data.products;
}