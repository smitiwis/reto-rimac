import { FC } from "react";

interface Props {
  text: string;
  className?: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ className, text, onClick }) => {
  return (
    <button className={`${className} btn btn--primary`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
