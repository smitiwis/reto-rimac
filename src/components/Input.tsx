import { ChangeEvent, FC } from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value: any;
  type?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({
  placeholder,
  className,
  value,
  type = "text",
  disabled = false,
  onChange,
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value);
  };

  return (
    <input
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      className={`rimac-input ${className}`}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
