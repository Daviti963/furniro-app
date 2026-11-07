export function parsePage(value: string | string[] | undefined, totalPages: number): number {
  const page = Number(Array.isArray(value) ? value[0] : value);

  if (!Number.isInteger(page) || page < 1) return 1;
  return Math.min(page, Math.max(totalPages, 1));
}
