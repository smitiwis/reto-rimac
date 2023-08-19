import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
};


const Checkbox: FC<Props> = ({ className, children, isChecked, onChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={`${className} rimac-checkbox`}>
      <input type="checkbox"  checked={isChecked}  onChange={handleChange}/>
      <span className="checkmark"></span>
      {children && <span className="rimac-checkbox__label">{children}</span>}
    </label>
  );
};

export default Checkbox;
