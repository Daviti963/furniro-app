import styles from "./ResultCount.module.css";

export type ResultCountProps = {
  from: number;
  to: number;
  total: number;
};
export default function ResultCount({ from, to, total }: ResultCountProps) {
  return (
    <p className={styles.resultCount}>
      Showing {from}-{to} {total} results
    </p>
  );
}
