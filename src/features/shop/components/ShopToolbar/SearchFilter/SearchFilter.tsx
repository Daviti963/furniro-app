"use client";
import styles from "./SearchFilter.module.css";
import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import SearchInput from "../SearchInput/SearchInput";

const PANEL_ID = "search-panel";

type SearchFilterProps = {
  value: string;
};

export default function SearchFilter({ value }: SearchFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(!true);
  return (
    <div className={styles.searchFilter}>
      <FilterButton
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
      <div
        id={PANEL_ID}
        className={`${styles.panel} ${isOpen ? styles.active : ""}`}
      >
        <SearchInput value={value} />
      </div>
    </div>
  );
}
