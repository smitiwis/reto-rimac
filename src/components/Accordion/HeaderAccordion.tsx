import { FormEvent, FC } from "react";
import { Text } from "../Text";
import { SureBenefit } from "../../interfaces";

interface BenefitAccordionProps {
  benefit: SureBenefit;
  updateBenefits: (benefit: SureBenefit) => void;
}

const HeaderAccordion: FC<BenefitAccordionProps> = ({
  benefit,
  updateBenefits,
}) => {
  const { pathImg, nameShort, name, active } = benefit;

  const handleAccordionClick = (e: FormEvent) => {
    e.stopPropagation();
    updateBenefits(benefit);
  };

  return (
    <div className="header-accordion">
      <div className="mr-3">
        <img src={pathImg} alt={nameShort} />
      </div>
      <div className="pt-2">
        <Text className="text-title-h4 my-0" text={name} />
        <div
          className="d-flex align-items-center mt-2"
          onClick={handleAccordionClick}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-border-${active ? "remove" : "add"}.jpg`}
            alt={`icon-${active ? "remove" : "add"}`}
            className="mr-2"
          />
          <Text
            className="text-call text-call--small fw-black my-0"
            text={active ? "QUITAR" : "AGREGAR"}
          />
        </div>
      </div>
      <div className="header-accordion__arrow">
        <img src={`${process.env.PUBLIC_URL}/images/icon-red-arrow-bottom.png`} alt="" />
      </div>
    </div>
  );
};

export default HeaderAccordion;
