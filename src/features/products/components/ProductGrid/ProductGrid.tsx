import styles from "./ProductGrid.module.css";
import type { Product, ProductView } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

type ProductGridProps = {
  products: Product[];
  viewToggle?: ProductView;
};

export default function ProductGrid({
  products,
  viewToggle = "grid",
}: ProductGridProps) {
  if (products.length === 0) return <p className={styles.noProduct}>No product found</p>;
  return (
    <ul
      className={`${styles.productGrid} ${viewToggle === "list" ? styles.list : ""} `}
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
