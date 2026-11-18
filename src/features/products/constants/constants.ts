import type { SortOption } from "../types/product";

export const SORT_OPTION: { value: SortOption; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export const PRODUCTS_TOTAL = 48;
