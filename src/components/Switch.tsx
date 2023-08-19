import { useState } from "react";

export const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <label className="rimac-switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};
