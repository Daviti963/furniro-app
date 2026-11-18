"use client";
import styles from './ShowSelect.module.css';
import { SHOW_OPTIONS } from "../../../constants/constants";
import Select from "@/src/components/ui/Select/Select";
import { useUpdateSearchParam } from "@/src/hook/useUpdateSearchParam";

type ShowSelectProps = {
  value: number;
};

export default function ShowSelect({ value }: ShowSelectProps) {
  const updateSearchParam = useUpdateSearchParam();

  const options = SHOW_OPTIONS.map((option) => ({
    value: String(option),
    label: String(option),
  }));

  return (
    <Select
      className={styles.showSelect}
      id="show-select"
      label="Show"
      value={String(value)}
      options={options}
      onChange={(newValue) => updateSearchParam("show", newValue)}
    />
  );
}
