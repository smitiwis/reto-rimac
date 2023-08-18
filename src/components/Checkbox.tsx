import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Checkbox: FC<Props> = ({ className, children }) => {
  return (
    <label className={`${className} rimac-checkbox`}>
      <input type="checkbox" />
      <span className="checkmark"></span>
      {children && <span className="rimac-checkbox__label">{children}</span>}
    </label>
  );
};

export default Checkbox;
