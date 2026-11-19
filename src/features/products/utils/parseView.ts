import type { ProductView } from "../types/product";
export function parseView(value: string | string[] | undefined): ProductView {
  if (value === "grid" || value === "list") {
    return value;
  }

  return "grid";
}
