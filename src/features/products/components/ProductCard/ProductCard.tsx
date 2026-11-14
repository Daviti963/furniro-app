import styles from "./ProductCard.module.css";
import type { Product } from "../../types/product";
import Image from "next/image";
import { getDiscountedPrice } from "../../utils/getDiscountedPrice";
import { formatPrice } from "@/src/utils/formatPrice";
import ProductCardOverlay from "./ProductCardOverlay/ProductCardOverlay";

const MIN_VISIBLE_DISCOUNT = 9;

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountPercentage > MIN_VISIBLE_DISCOUNT;

  return (
    <article className={styles.productCard}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={285}
        height={301}
      />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className={styles.prices}>
          {hasDiscount ? (
            <>
              <span className={styles.price}>
                {formatPrice(
                  getDiscountedPrice(product.price, product.discountPercentage),
                )}
              </span>
              <span className={styles.oldPrice}>
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className={styles.price}>{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
      {hasDiscount && <span>-{Math.round(product.discountPercentage)}%</span>}
      <ProductCardOverlay />
    </article>
  );
}
