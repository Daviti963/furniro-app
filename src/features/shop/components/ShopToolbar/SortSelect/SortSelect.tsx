"use client";
import type { SortOption } from "@/src/features/products/types/product";
import styles from "./SortSelect.module.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
type SortSelectProps = {
  value: SortOption;
};

export default function SortSelect({ value }: SortSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", event.target.value);
    params.delete("page");
    router.push(`/shop?${params}`);
  };

  return (
    <div className={styles.sortSelect}>
      <label htmlFor="sort-select">Sort by</label>
      <select id="sort-select" defaultValue={value} onChange={handleChange}>
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
