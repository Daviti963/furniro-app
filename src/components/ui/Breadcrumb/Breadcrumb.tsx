import { BreadcrumbItem } from "@/src/type/breadcrumb";
import styles from './Breadcrumb.module.css';
import Link from "next/link";

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className={styles.list}>
                {items.map((item, index) => (
                    <li key={`${item.label}-${index}`} className={styles.item}>
                        {item.href ? (
                            <Link href={item.href}>{item.label}</Link>
                        ) : (
                            <span aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}