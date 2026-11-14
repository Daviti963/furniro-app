import type { SortOption } from "../types/product";

export function parseSort(value: string | string[] | undefined): SortOption {
  if (value === "price-asc" || value === "price-desc") {
    return value;
  }

  return "default";
}
