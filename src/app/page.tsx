import styles from "./page.module.css";
import Hero from "../features/home/components/Hero/Hero";
import BrowseRange from "../features/home/components/BrowseRange/BrowseRange";
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <BrowseRange />
    </main>
  );
}
