import styles from './HomeProducts.module.css';
import ProductSection from "@/src/features/products/components/ProductSection/ProductSection";
import { parseLimit } from "@/src/features/products/utils/parseLimit";
const HOME_PRODUCTS_LIMIT = 8;
type HomeProductsProps = Pick<PageProps<"/">, "searchParams">;
export default async function HomeProducts({
  searchParams,
}: HomeProductsProps) {
  const { limit } = await searchParams;
  const currentLimit = parseLimit(limit, HOME_PRODUCTS_LIMIT);

  return (
    <ProductSection
      className={styles.homeProductSection}
      title="Our Products"
      limit={currentLimit}
      basePath="/"
      loadMoreCount={HOME_PRODUCTS_LIMIT}
    />
  );
}
