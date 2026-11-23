import styles from "./ShopToolbar.module.css";
import type {
  SortOption,
  ProductView,
} from "@/src/features/products/types/product";
import SearchFilter from "./SearchFilter/SearchFilter";
import Container from "@/src/components/ui/Container/Container";
import ViewToggle from "./ViewToggle/ViewToggle";
import SortSelect from "./SortSelect/SortSelect";
import ShowSelect from "./ShowSelect/ShowSelect";
import ResultCount, { type ResultCountProps } from "./ResultCount/ResultCount";

type ShopToolbarProps = {
  sortValue: SortOption;
  resultCount: ResultCountProps;
  showValue: number;
  viewValue: ProductView;
  qValue: string;
};

export default function ShopToolbar({
  sortValue,
  resultCount,
  showValue,
  viewValue,
  qValue,
}: ShopToolbarProps) {
  return (
    <section className={styles.shopToolbar}>
      <Container>
        <div className={styles.shopToolbarWrapper}>
          <div className={styles.buttons}>
            <SearchFilter value={qValue} />
            <ViewToggle viewValue={viewValue} />
            <ResultCount {...resultCount} />
          </div>

          <div className={styles.select}>
            <ShowSelect value={showValue} />
            <SortSelect value={sortValue} />
          </div>
        </div>
      </Container>
    </section>
  );
}
