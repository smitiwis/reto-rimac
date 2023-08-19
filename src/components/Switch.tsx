import { FC, ReactNode } from "react";

interface Props {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export const Switch: FC<Props> = ({
  isChecked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="rimac-switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
};
