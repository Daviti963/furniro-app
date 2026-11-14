import styles from "./ShopToolbar.module.css";
import FilterButton from "./FilterButton/FilterButton";
import Container from "@/src/components/ui/Container/Container";
import ViewToggle from "./ViewToggle/ViewToggle";
import SortSelect from "./SortSelect/SortSelect";
import type { SortOption } from "@/src/features/products/types/product";

type ShopToolbarProps = {
  sortValue: SortOption;
};

export default function ShopToolbar({ sortValue }: ShopToolbarProps) {
  return (
    <section className={styles.shopToolbar}>
      <Container>
        <div className={styles.shopToolbarWrapper}>
          <div className={styles.buttons}>
            <FilterButton />
            <ViewToggle />
          </div>

          <div>
            <SortSelect value={sortValue} />
          </div>
        </div>
      </Container>
    </section>
  );
}
