import styles from "./BrowseRange.module.css";
import { BROWSE_RANGE_CARD } from "../../constants/browseRange";
import Image from "next/image";
import Container from "@/src/components/ui/Container/Container";
export default function BrowseRange() {
  return (
    <section className={styles.browseRange}>
      <Container>
        <div className={styles.header}>
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <ul className={styles.list}>
          {BROWSE_RANGE_CARD.map((item) => (
            <li key={item.id}>
              <Image src={item.img} width={381} height={480} alt={item.title} />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
