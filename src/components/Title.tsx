import { FC } from "react";

interface Props {
  className?: string;
  text: string;
  type: "h1" | "h2" | "h3";
}

export const Title: FC<Props> = ({ className, text, type = "h1" }) => {
  return (
    <div className={`text-title text-title-${type} ${className}`}>{text}</div>
  );
};
