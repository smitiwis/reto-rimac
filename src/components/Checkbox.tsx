import { ChangeEvent, FC, FocusEvent, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  isChecked: boolean;
  name?: string;
  touched?: boolean;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = ({
  className,
  name,
  error,
  touched,
  children,
  isChecked,
  onChange,
  onBlur
}) => {
  return (
    <label className={`${className} rimac-checkbox`}>
      <input
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="checkmark"></span>
      {children && <span className="rimac-checkbox__label">{children}</span>}
      {touched && error && <p className="text-error mt-1 mb-0">{error}</p>}
    </label>
  );
};

export default Checkbox;
