import { ChangeEvent, FC, FocusEvent, useEffect } from "react";
import { FormErrors, FormValues } from "../interfaces";

interface Props {
  placeholder?: string;
  className?: string;
  align?: "left" | "center" | "rigth";
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
  align,
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
    <div className={`${className} p-relative`}>
      <input
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`rimac-input w-100 ${align ? "text-" + align : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode="text"
        pattern="^\S+$"
      />
      {touched && error ? (
        <p className="text-error mt-1 mb-0">{error}</p>
      ) : null}
    </div>
  );
};

export default Input;
