import { FC } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Layouts/Wrapper";

interface Props {
  text: string;
}

export const Stepper: FC<Props> = ({ text }) => {
  return (
    <div className="step-wrapper">
      <Wrapper>
        <div className="step-main step-main--mobile">
          <img src={`${process.env.PUBLIC_URL}/images/icon-border-back.jpg`} alt="back" />
          <span className="text-stepper text-roboto mr-2">{text}</span>
          <span className="barra-end"></span>
        </div>

        <div className="step-main step-main--desktop mt-6">
          <Link className="d-flex align-items-center gap-3" to="/inicio">
            <img src={`${process.env.PUBLIC_URL}/images/icon-step-one.png`} alt="step one" />
            <span className="fs-xs c-gray-neutral fw-black">Datos</span>
          </Link>
          <img
            className="ml-2 pl-1"
            src={`${process.env.PUBLIC_URL}/images/icon-progress.png`}
            alt="linea de progreso"
          />
          <Link className="d-flex align-items-center gap-3" to="/armar-plan">
            <img src={`${process.env.PUBLIC_URL}/images/icon-step-two.png`} alt="step two" />
            <span className="fs-xs c-gray-title fw-black">Arma tu plan</span>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
