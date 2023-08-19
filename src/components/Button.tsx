import { FC } from "react";

interface Props {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ className, text, size = "medium", onClick }) => {
  return (
    <button
      className={`${className} btn btn-${size} btn--primary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
