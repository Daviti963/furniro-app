import styles from "./ShopProducts.module.css";
import ProductGrid from "@/src/features/products/components/ProductGrid/ProductGrid";
import Pagination from "@/src/components/ui/Pagination/Pagination";
import { getProductsByCategory } from "@/src/features/products/api/getProducts";
import { repeatProducts } from "@/src/features/products/utils/repeatProducts";
import {
  PRODUCTS_PER_PAGE,
  PRODUCTS_TOTAL,
} from "@/src/features/products/constants/constants";
import { paginate } from "@/src/utils/paginate";
import { parsePage } from "@/src/utils/parsePage";
import type { SearchParams } from "@/src/type/searchParms";
import { sortProducts } from "@/src/features/products/utils/sortProducts";
import { parseSort } from "@/src/features/products/utils/parseSort";

import Container from "@/src/components/ui/Container/Container";
import ShopToolbar from "../ShopToolbar/ShopToolbar";
type ShopProductsProps = {
  searchParams: SearchParams;
};

export default async function ShopProducts({
  searchParams,
}: ShopProductsProps) {
  const { page, sort } = await searchParams;
  const currentSort = parseSort(sort);

  const products = await getProductsByCategory("furniture");
  const allProducts = repeatProducts(products, PRODUCTS_TOTAL);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const currentPage = parsePage(page, totalPages);
  const visibleProducts = paginate(allProducts, currentPage, PRODUCTS_PER_PAGE);
  const sortedProducts = sortProducts(visibleProducts, currentSort);
  return (
    <>
      <ShopToolbar sortValue={currentSort} />
      <Container>
        <div className={styles.productWrapper}>
          <ProductGrid products={sortedProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/shop"
            query={{ sort: currentSort }}
          />
        </div>
      </Container>
    </>
  );
}
