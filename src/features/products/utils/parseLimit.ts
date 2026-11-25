export function parseLimit(
  value: string | string[] | undefined,
  defaultLimit: number,
): number {
  const limitNumber = Number(value);
  return Number.isInteger(limitNumber) && limitNumber >= defaultLimit
    ? limitNumber
    : defaultLimit;
}
