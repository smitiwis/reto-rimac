import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Wrapper: FC<Props> = ({ children }) => {
  return <div className="wrapper-main">{children}</div>;
};
