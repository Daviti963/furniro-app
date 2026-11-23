export function parseSearch(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : "";
}
