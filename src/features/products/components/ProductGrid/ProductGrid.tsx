import styles from "./ProductGrid.module.css";
import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className={styles.productGrid}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
