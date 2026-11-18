"use client";
import styles from "./SortSelect.module.css";
import type { SortOption } from "@/src/features/products/types/product";
import { useUpdateSearchParam } from "@/src/hook/useUpdateSearchParam";
import { SORT_OPTION } from "@/src/features/products/constants/constants";
import Select from "@/src/components/ui/Select/Select";

type SortSelectProps = {
  value: SortOption;
};

export default function SortSelect({ value }: SortSelectProps) {
  const updateSearchParam = useUpdateSearchParam();

  return (
    <Select
      className={styles.sortSelect}
      id="sort-select"
      label="Sort by"
      value={value}
      options={SORT_OPTION}
      onChange={(newValue) => updateSearchParam("sort", newValue)}
    />
  );
}
