import type { SortOption } from "../types/product";
import type { SearchParams } from "@/src/type/searchParms";

export function parseSort(value: string | string[] | undefined): SortOption {
  if (value === "price-asc" || value === "price-desc") {
    return value;
  }

  return "default";
}
