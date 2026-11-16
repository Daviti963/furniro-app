export function paginate<T>(items: T[], page: number, perPage: number) {
  const start = (page - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  return {
    items: pageItems,
    from: start + 1,
    to: start + pageItems.length,
    total: items.length,
  };
}
