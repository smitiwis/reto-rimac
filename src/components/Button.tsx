import { FC } from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick: () => void;
}

const Button: FC<Props> = ({
  type = "button",
  className,
  text,
  size = "medium",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${className} btn btn-${size} btn--primary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
