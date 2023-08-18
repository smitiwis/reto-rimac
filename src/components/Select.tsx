import { ChangeEvent, FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  className?: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  className,
  value,
  disabled = false,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`rimac-select ${className}`}>
      <select disabled={disabled} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="rimac-select__icon">
        <img src="/images/icon-select.svg" alt="" />
      </div>
    </div>
  );
};

export default Select;
