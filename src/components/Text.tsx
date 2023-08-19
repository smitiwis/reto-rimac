import { FC, ReactNode } from "react";

interface Props {
  text?: string;
  className?: string;
  children?: ReactNode;
}

export const Text: FC<Props> = ({ text, className, children }) => {
  return <p className={`${className}`}>{children ? children : text}</p>;
};
