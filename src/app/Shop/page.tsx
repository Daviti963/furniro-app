import { Suspense } from 'react';
import styles from './page.module.css';
import PageBanner from '@/src/components/ui/PageBanner/PageBanner';
import ShopProducts from '@/src/features/shop/components/ShopProducts/ShopProducts';
import type { SearchParams } from '@/src/type/searchParms';

type ShopProps = {
    searchParams: SearchParams;
};

export default function Shop({ searchParams }: ShopProps) {
    return (
        <main className={styles.shopPage}>
            <PageBanner title="Shop" />
                <div className={styles.shopPageProducts}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <ShopProducts searchParams={searchParams} />
                    </Suspense>
                </div>
        </main>
    );
}
