import React from "react";
import { Title } from "../components/Title";
import Button from "../components/Button";
import { formatCurrency } from "../helpers/formatCurrency";
import { SureState } from "../interfaces"; // Asegúrate de importar las interfaces correctas

interface BuyBoxProps {
  stateSureRimac: SureState;
  isBasicAmount: boolean;
  navigate: (path: string) => void;
}

const BuyBox: React.FC<BuyBoxProps> = ({
  stateSureRimac,
  isBasicAmount,
  navigate,
}) => {
  return (
    <div className="box-buy">
      <div className="box-buy__text">
        <div className="fs-xs c-gray-title fw-black d-none d-md-block">
          MONTO
        </div>
        <Title type="h2" text={formatCurrency(stateSureRimac.amount, "$", 2)} />
        <span className="fs-xxs c-gray-title fw-black d-block d-md-none">
          MENSUAL
        </span>
        <span className="fs-xs c-gray-text fw-black d-none d-md-block">
          mensuales
        </span>
      </div>
      <div className="box-buy__coverage">
        {!isBasicAmount && (
          <>
            <span className="fs-md c-gray-text fw-black d-none d-md-block">
              El precio incluye:
            </span>
            <ul className="coverage-list">
              {stateSureRimac.benefits.map((benefit) => {
                const benefitIsSelected = benefit.active;
                return (
                  benefitIsSelected &&
                  benefit.benefitsIncluded.map((included) => {
                    return (
                      <li
                        key={included}
                        className="coverage-list__item text-parrafo"
                      >
                        {included}
                      </li>
                    );
                  })
                );
              })}
            </ul>
          </>
        )}
      </div>
      <div className="box-buy__action">
        <Button
          className="w-100"
          size="small"
          text="Lo quiero"
          onClick={() => {
            navigate("/gracias");
          }}
        />
      </div>
    </div>
  );
};

export default BuyBox;
