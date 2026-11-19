import styles from "./ShopProducts.module.css";
import ProductGrid from "@/src/features/products/components/ProductGrid/ProductGrid";
import Pagination from "@/src/components/ui/Pagination/Pagination";
import { getProductsByCategory } from "@/src/features/products/api/getProducts";
import { repeatProducts } from "@/src/features/products/utils/repeatProducts";
import { PRODUCTS_TOTAL } from "@/src/features/products/constants/constants";
import { paginate } from "@/src/utils/paginate";
import { parsePage } from "@/src/utils/parsePage";
import { sortProducts } from "@/src/features/products/utils/sortProducts";
import { parseSort } from "@/src/features/products/utils/parseSort";
import Container from "@/src/components/ui/Container/Container";
import ShopToolbar from "../ShopToolbar/ShopToolbar";
import { parseShow } from "../../utils/parseShow";
import { parseView } from "@/src/features/products/utils/parseView";

export default async function ShopProducts({
  searchParams,
}: PageProps<"/shop">) {
  const { page, sort, show, view } = await searchParams;
  const currentSort = parseSort(sort);
  const currentShow = parseShow(show);
  const currentView = parseView(view);
  const products = await getProductsByCategory("furniture");
  const repeatProduct = repeatProducts(products, PRODUCTS_TOTAL);
  const totalPages = Math.ceil(repeatProduct.length / currentShow);
  const currentPage = parsePage(page, totalPages);
  const sortedProducts = sortProducts(repeatProduct, currentSort);
  const { items, from, to, total } = paginate(
    sortedProducts,
    currentPage,
    currentShow,
  );
  const query = {
    sort: currentSort,
    show: String(currentShow),
    view: currentView,
  };
  return (
    <>
      <ShopToolbar
        sortValue={currentSort}
        resultCount={{ from, to, total }}
        showValue={currentShow}
        viewValue={currentView}
      />
      <Container>
        <div className={styles.productWrapper}>
          <ProductGrid products={items} viewToggle={currentView} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/shop"
            query={query}
          />
        </div>
      </Container>
    </>
  );
}
