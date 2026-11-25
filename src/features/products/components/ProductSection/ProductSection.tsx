import styles from "./ProductSection.module.css";
import { getProductsByCategory } from "../../api/getProducts";
import ProductGrid from "../ProductGrid/ProductGrid";
import { repeatProducts } from "../../utils/repeatProducts";
import { PRODUCTS_TOTAL } from "../../constants/constants";
import Container from "@/src/components/ui/Container/Container";
import Link from "next/link";

type ProductSectionProps = {
  title: string;
  limit: number;
  basePath: string;
  loadMoreCount: number;
  className?: string;
};

export default async function ProductSection({
  className,
  title,
  limit,
  basePath,
  loadMoreCount,
}: ProductSectionProps) {
  const products = await getProductsByCategory("furniture");
  const repeatProduct = repeatProducts(products, PRODUCTS_TOTAL);
  const limitProducts = repeatProduct.slice(0, limit);
  const hasMore = limit < repeatProduct.length;
  const showMoreLimit = limit + loadMoreCount;
  const showLessLimit = Math.max(limit - loadMoreCount, loadMoreCount);
  return (
    <section className={`${styles.productSection} ${className}`}>
      <Container>
        <h2>{title}</h2>
        <ProductGrid products={limitProducts} />
        <div className={styles.links}>
          {hasMore && (
            <Link scroll={false} href={`${basePath}?limit=${showMoreLimit}`}>
              Show More
            </Link>
          )}

          {limit > loadMoreCount && (
            <Link scroll={false} href={`${basePath}?limit=${showLessLimit}`}>
              Show Less
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
