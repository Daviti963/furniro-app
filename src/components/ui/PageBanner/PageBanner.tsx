import styles from './PageBanner.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { BreadcrumbItem } from '@/src/type/breadcrumb';

type PageBannerProps = {
    title: string;
    trail?: BreadcrumbItem[];
};

export default function PageBanner({ title, trail = [] }: PageBannerProps) {
    const items: BreadcrumbItem[] = [
        { label: "Home", href: "/" },
        ...trail,
        { label: title },
    ];
    return (
        <section className={styles.banner}>
            <h1 className={styles.title}>{title}</h1>
            <Breadcrumb items={items} />
        </section>
    )
}