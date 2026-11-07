'use client';
import styles from './ProductCardOverlay.module.css';

export default function ProductCardOverlay() {
    return (
        <div className={styles.overlay}>
            <button className={styles.addToCart}>
                Add to cart
            </button>
        </div>
    )
}