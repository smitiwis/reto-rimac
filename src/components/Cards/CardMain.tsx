import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const CardMain: FC<Props> = ({ className, children }) => {
  return <div className={`card-main ${className}`}>{children}</div>;
};
