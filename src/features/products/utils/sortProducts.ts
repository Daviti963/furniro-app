import type { Product, SortOption } from "../types/product";

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sortedProducts = [...products];

  if (sort === "price-asc") {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}
