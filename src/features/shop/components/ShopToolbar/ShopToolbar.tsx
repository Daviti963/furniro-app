import styles from "./ShopToolbar.module.css";
import type { SortOption } from "@/src/features/products/types/product";
import FilterButton from "./FilterButton/FilterButton";
import Container from "@/src/components/ui/Container/Container";
import ViewToggle from "./ViewToggle/ViewToggle";
import SortSelect from "./SortSelect/SortSelect";
import ResultCount, { type ResultCountProps } from "./ResultCount/ResultCount";

type ShopToolbarProps = {
  sortValue: SortOption;
  resultCount: ResultCountProps;
};

export default function ShopToolbar({
  sortValue,
  resultCount,
}: ShopToolbarProps) {
  return (
    <section className={styles.shopToolbar}>
      <Container>
        <div className={styles.shopToolbarWrapper}>
          <div className={styles.buttons}>
            <FilterButton />
            <ViewToggle />
            <ResultCount {...resultCount} />
          </div>

          <div>
            <SortSelect value={sortValue} />
          </div>
        </div>
      </Container>
    </section>
  );
}
