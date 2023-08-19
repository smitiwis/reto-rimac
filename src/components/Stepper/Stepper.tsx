import { FC } from "react";

interface Props {
  text: string;
}

export const Stepper: FC<Props> = ({ text }) => {
  return (
    <div className="step-main container py-3">
      <img src="/images/icon-border-back.jpg" alt="back" />
      <span className="text-stepper text-roboto mr-2">{text}</span>
      <span className="barra-end"></span>
    </div>
  );
};
