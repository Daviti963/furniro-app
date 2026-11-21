import styles from "./StoreFeatures.module.css";
import { FEATURES } from "./constants/constants";
import Image from "next/image";
export default function StoreFeatures() {
  return (
    <section className={styles.storeFeatures}>
      <ul>
        {FEATURES.map((item) => (
          <li key={item.id}>
            <Image src={item.iconSrc} width={50} height={50} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
