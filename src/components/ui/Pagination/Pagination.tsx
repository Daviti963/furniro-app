import Link from 'next/link';
import styles from './Pagination.module.css';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {

    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className={styles.pagination} aria-label='Pagination'>
            {
                pages.map(page => (
                    <Link
                        key={page}
                        href={`?page=${page}`}
                        className={page === currentPage ? `${styles.item} ${styles.active}` : styles.item}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </Link>
                ))
            }

            {currentPage < totalPages && (
                <Link href={`?page=${currentPage + 1}`} className={`${styles.item} ${styles.next}`}>
                    Next
                </Link>
            )}
        </nav>
    )
}