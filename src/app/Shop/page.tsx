import styles from './page.module.css';
import PageBanner from '@/src/components/ui/PageBanner/PageBanner';
import ShopToolbar from '@/src/features/shop/components/ShopToolbar/ShopToolbar';
import { getProductsByCategory } from '@/src/features/products/api/getProducts';
import ProductGrid from '@/src/features/products/components/ProductGrid/ProductGrid';
import { repeatProducts } from '@/src/features/products/utils/repeatProducts';
import Container from '@/src/components/ui/Container/Container';
const PRODUCTS_COUNT = 48;
export default async function Shop() {

    const products = await getProductsByCategory('furniture');
    const repeatProduct = repeatProducts(products, PRODUCTS_COUNT);

    return (
        <main className={styles.shopPage}>
            <PageBanner title="Shop" />
            <ShopToolbar />
            <Container>
                <div className={styles.shopPageProducts}>
                    <ProductGrid products={repeatProduct} />
                </div>
            </Container>
        </main>
    )
}
