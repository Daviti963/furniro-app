import styles from "./page.module.css";
import { Suspense } from "react";
import Hero from "../features/home/components/Hero/Hero";
import BrowseRange from "../features/home/components/BrowseRange/BrowseRange";
import HomeProducts from "../features/home/components/HomeProducts/HomeProducts";
export default function Home({ searchParams }: PageProps<"/">) {
  return (
    <main className={styles.main}>
      <Hero />
      <BrowseRange />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeProducts searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
