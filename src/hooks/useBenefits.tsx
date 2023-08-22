import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BENEFITS, INIT_RIMAC } from "../constants";
import { SureBenefit, SureState } from "../interfaces";
import { useAmountContext } from "../contexts/amount/amountContext";
import { useUserDataContext } from "../contexts/userData/userDataContext";

export const useBenefitLogic = () => {
  const { updateAmount } = useAmountContext();
  const { formHome } = useUserDataContext();
  const navigate = useNavigate();

  const [stateSureRimac, setStateSureRimac] = useState<SureState>(INIT_RIMAC);
  const [isBasicAmount, setIsBasicAmount] = useState(false);
  const [benefitDelete, setBenefitDelete] = useState<SureBenefit>();

  const amountBase = 20;
  const summation = 100;
  const sureAmountToMaxChoque = 16000;
  const idBenefitChoque = BENEFITS[1].id;

  const updateBenefits = (benefiToUpdate: SureBenefit) => {
    const benefitsCurrent = stateSureRimac.benefits.map((benefit) => {
      const { id, active } = benefit;
      return {
        ...benefit,
        active: id === benefiToUpdate.id ? !active : active,
      };
    });

    const amountCurrent = sumActivePrices(benefitsCurrent);

    setStateSureRimac({
      ...stateSureRimac,
      amount: amountCurrent,
      benefits: benefitsCurrent,
    });

    updateAmount(amountCurrent);
  };

  const sumActivePrices = (benefits: SureBenefit[]): number => {
    const sumeActiveBenefits = benefits.reduce(
      (total, benefit) => (benefit.active ? total + benefit.price : total),
      amountBase
    );

    setIsBasicAmount(sumeActiveBenefits === amountBase);
    return sumeActiveBenefits;
  };

  const incrementSureAmount = () => {
    const { sureAmount, max, benefits } = stateSureRimac;
    const mewAmount = sureAmount + summation;
    const currentAmount = sureAmount < max ? mewAmount : sureAmount;

    let benefitCurrent = [...benefits];

    if (currentAmount > sureAmountToMaxChoque && benefits.length === 3) {
      benefitCurrent = benefits.filter((benefit) => {
        if (benefit.id === idBenefitChoque) {
          setBenefitDelete(benefit);
        }
        return benefit.id !== idBenefitChoque;
      });
    }

    const amountTotal = sumActivePrices([...benefitCurrent]);

    setStateSureRimac({
      ...stateSureRimac,
      sureAmount: currentAmount,
      benefits: [...benefitCurrent],
      amount: amountTotal,
    });

    updateAmount(amountTotal);
  };

  const decrementSureAmount = () => {
    const { sureAmount, min, benefits } = stateSureRimac;
    const mewAmount = sureAmount - summation;
    const currentAmount = sureAmount > min ? mewAmount : sureAmount;

    let benefitCurrent = [...benefits];

    if (currentAmount <= sureAmountToMaxChoque && benefits.length === 2) {
      const benefitDeleteIndex = BENEFITS.findIndex((benefit) => {
        return benefit.id === idBenefitChoque;
      });

      if (benefitDelete) {
        benefitCurrent = benefitCurrent
          .map((benefit, i) =>
            i === benefitDeleteIndex ? [benefitDelete, benefit] : benefit
          )
          .flat();
      }
    }

    const amountTotal = sumActivePrices([...benefitCurrent]);

    setStateSureRimac({
      ...stateSureRimac,
      sureAmount: currentAmount,
      amount: amountTotal,
      benefits: [...benefitCurrent],
    });

    updateAmount(amountTotal);
  };

  const moreInfo = (benefitIndex: string) => {
    const updateBenefits = stateSureRimac.benefits.map(
      (benefit: SureBenefit) => {
        const { id, showDesc } = benefit;
        return {
          ...benefit,
          showDesc: id === benefitIndex ? !showDesc : showDesc,
        };
      }
    );

    setStateSureRimac({
      ...stateSureRimac,
      benefits: [...updateBenefits],
    });
  };

  useEffect(() => {
    const isCompletedForm = Object.keys(formHome).length > 0;

    if (isCompletedForm) {
      const amountCurrent = sumActivePrices(stateSureRimac.benefits);
      setStateSureRimac({
        ...stateSureRimac,
        amount: amountCurrent,
      });

      updateAmount(amountCurrent);
    } else {
      navigate("/");
    }
  }, []);

  return {
    stateSureRimac,
    isBasicAmount,
    benefitDelete,
    updateBenefits,
    sumActivePrices,
    incrementSureAmount,
    decrementSureAmount,
    moreInfo,
  };
};
