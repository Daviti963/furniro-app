"use client";
import styles from "./SearchInput.module.css";
import { useUpdateSearchParam } from "@/src/hook/useUpdateSearchParam";
import { useDebounce } from "@/src/hook/useDebounce";
import { useState, useEffect } from "react";
type SearchInputProps = {
  value: string;
};

export default function SearchInput({ value }: SearchInputProps) {
  const updateSearchParam = useUpdateSearchParam();
  const [query, setQuery] = useState<string>(value);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery === value) return;

    updateSearchParam("q", debouncedQuery);
  }, [debouncedQuery, value, updateSearchParam]);

  return (
    <div className={styles.searchInput}>
      <label htmlFor="search-products">Search</label>
      <input
        id="search-products"
        type="search"
        placeholder="Search by name..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}
