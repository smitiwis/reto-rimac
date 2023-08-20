import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};
