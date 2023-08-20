import { ChangeEvent, FC, FocusEvent, useEffect } from "react";
import { FormErrors, FormValues } from "../interfaces";

interface Props {
  placeholder?: string;
  className?: string;
  value: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({
  placeholder,
  className,
  value,
  type = "text",
  name,
  error,
  touched,
  disabled = false,
  onChange,
  onBlur,
}) => {
  
  return (
    <div className={`${className}`}>
      <input
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`rimac-input w-100`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern="^\S+$"
      />
      {touched && error ? (
        <p className="text-error mt-1 mb-0">{error}</p>
      ) : null}
    </div>
  );
};

export default Input;
