import { Product } from "../types/product";
export function searchProducts(products: Product[], search: string): Product[] {
  const cleanSearch = search.trim().toLowerCase();

  if (!cleanSearch) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(cleanSearch),
  );
}
