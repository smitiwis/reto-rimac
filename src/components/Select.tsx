import { ChangeEvent, FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  className?: string;
  value: string;
  name?: string;
  disabled?: boolean;
  errors?: any;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  options,
  className,
  value,
  disabled = false,
  name,
  errors,
  onChange,
}) => {


  return (
    <div className={`rimac-select ${className}`}>
      <select name={name} disabled={disabled} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* {errors.dni && <span className="error">{errors.dni}</span>} */}
      <div className="rimac-select__icon">
        <img src="/images/icon-select.svg" alt="" />
      </div>
    </div>
  );
};

export default Select;
