import { Suspense } from "react";
import styles from "./page.module.css";
import PageBanner from "@/src/components/ui/PageBanner/PageBanner";
import ShopProducts from "@/src/features/shop/components/ShopProducts/ShopProducts";
import StoreFeatures from "@/src/components/ui/StoreFeatures/StoreFeatures";
export default function Shop({ searchParams }: PageProps<"/shop">) {
  return (
    <main className={styles.shopPage}>
      <PageBanner title="Shop" />
      <div className={styles.shopPageProducts}>
        <Suspense fallback={<p>Loading...</p>}>
          <ShopProducts searchParams={searchParams} />
        </Suspense>
      </div>
      <StoreFeatures />
    </main>
  );
}
