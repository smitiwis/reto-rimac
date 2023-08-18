import { FC } from "react";

interface Props {
  className: string;
  text: string;
}

export const Title: FC<Props> = ({ className, text }) => {
  return <div className={`${className}`}>{text}</div>;
};
