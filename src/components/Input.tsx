import { ChangeEvent, FC } from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: FC<Props> = ({
  placeholder,
  className,
  value,
  type = "text",
  name,
  disabled = false,
  onChange,
}) => {

  return (
    <input
      disabled={disabled}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`rimac-input ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
