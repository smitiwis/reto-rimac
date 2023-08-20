import { ChangeEvent, FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  isChecked: boolean;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Checkbox: FC<Props> = ({
  className,
  name,
  children,
  isChecked,
  onChange,
}) => {
  return (
    <label className={`${className} rimac-checkbox`}>
      <input
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkmark"></span>
      {children && <span className="rimac-checkbox__label">{children}</span>}
    </label>
  );
};

export default Checkbox;
