import { FC, ReactNode } from "react";

interface Props {
  text?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Text: FC<Props> = ({ text, className, children, onClick }) => {
  return (
    <p className={`${className}`} onClick={onClick}>
      {children ? children : text}
    </p>
  );
};
