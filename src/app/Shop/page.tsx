import styles from './page.module.css';
import PageBanner from '@/src/components/ui/PageBanner/PageBanner';
import ShopToolbar from '@/src/features/shop/components/ShopToolbar/ShopToolbar';
export default function Shop() {
    return (
        <main className={styles.shopPage}>
            <PageBanner title="Shop" />
            <ShopToolbar />
        </main>
    )
}