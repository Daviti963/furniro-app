import styles from "./Hero.module.css";
import Container from "@/src/components/ui/Container/Container";
import Link from "next/link";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.card}>
          <span>New Arrival</span>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop">BUY NOW</Link>
        </div>
      </Container>
    </section>
  );
}
