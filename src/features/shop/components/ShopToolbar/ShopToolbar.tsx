import styles from './ShopToolbar.module.css';
import FilterButton from './FilterButton/FilterButton';
import Container from '@/src/components/ui/Container/Container';
import ViewToggle from './ViewToggle/ViewToggle';

export default function ShopToolbar() {
    return (
        <section className={styles.shopToolbar}>
            <Container>
                <div className={styles.shopToolbarWrapper}>
                    <div className={styles.buttons}>
                        <FilterButton />
                        <ViewToggle />
                    </div>
                </div>
            </Container>
        </section>
    )
}