import React, { FC } from "react";
import { Text } from "../components/Text";
import { Switch } from "../components/Switch";
import { SureBenefit } from "../interfaces";

interface Props {
  benefit: SureBenefit;
  updateBenefits: (benefitToUpdate: SureBenefit) => void;
  moreInfo: (benefitIndex: string) => void;
}

const BenefitItem: FC<Props> = ({ benefit, updateBenefits, moreInfo }) => {
  return (
    <div className="d-flex py-4" style={{ borderBottom: "solid 1px #D7DBF5" }}>
      <div className="mr-3">
        <img src={benefit.pathImg} alt={benefit.nameShort} />
      </div>
      <div className="flex-grow-1 ">
        <div className="header-benefit">
          <Text className="text-title-h4 mt-0" text={benefit.name} />
          <Switch
            isChecked={benefit.active}
            onChange={(e) => {
              updateBenefits(benefit);
            }}
          />
        </div>
        {benefit.showDesc && (
          <p className="text-parrafo my-0">{benefit.description}</p>
        )}

        <div
          className="d-flex align-items-center w-content cursor-pointer"
          onClick={() => moreInfo(benefit.id)}
        >
          <Text
            className={`text-info text-info__xs my-2 mr-2 ${
              !benefit.showDesc && "text-info--active"
            }`}
            text={benefit.showDesc ? "VER MENOS" : "VER MÁS"}
          />
          <div className="d-flex">
            <img
              src={`/images/arrow-${benefit.showDesc ? "top" : "bottom"}.jpg`}
              alt={benefit.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitItem;
