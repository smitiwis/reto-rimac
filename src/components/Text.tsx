import { FC } from "react";

interface Props {
  text: string;
  className?: string;
}

export const Text: FC<Props> = ({ text, className }) => {
  return <p className={`${className}`}>{text}</p>;
};
