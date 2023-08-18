import { ChangeEvent, FC } from "react";

interface Props {
  placeholder?: string;
  className?: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({
  placeholder,
  className,
  value,
  type = "text",
  onChange,
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
