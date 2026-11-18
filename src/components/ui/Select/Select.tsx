import styles from "./Select.module.css";
type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
};

export default function Select({
  id,
  label,
  value,
  options,
  onChange,
  className,
}: SelectProps) {
  return (
    <div className={`${styles.sortSelect}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className={className}
        id={id}
        defaultValue={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
