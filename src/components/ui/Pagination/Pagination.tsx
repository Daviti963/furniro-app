import Link from "next/link";
import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: Record<string, string>;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  query,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const getPageHref = (page: number) => {
    const params = new URLSearchParams({ ...query, page: String(page) });
    return `${basePath}?${params}`;
  };

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <Link
            key={page}
            href={getPageHref(page)}
            className={
              isActive ? `${styles.item} ${styles.active}` : styles.item
            }
            aria-current={isActive ? "page" : undefined}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={getPageHref(currentPage + 1)}
          className={`${styles.item} ${styles.next}`}
        >
          Next
        </Link>
      )}
    </nav>
  );
}
