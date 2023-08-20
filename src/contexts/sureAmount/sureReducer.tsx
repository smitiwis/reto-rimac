import { BENEFITS } from "../../constants";
import { SureAction, SureState } from "./sureTypes";

export const counterReducer = (
  state: SureState,
  action: SureAction
): SureState => {
  const summation = 100;
  const sureAmountToMaxChoque = 1600;
  const idBenefitChoque = "3987fce18a5b4eccac34d3d5b30e2d0d";

  const { sureAmount, max, min, benefits } = state;

  const updateBenefits = benefits.filter((benefit) => {
    // console.log("MONTO: ", sureAmount, "ID: ", benefit.id);
    if (sureAmount > sureAmountToMaxChoque && benefit.id === idBenefitChoque) {
      return {
        ...benefit,
      };
    } else {
      return {
        ...BENEFITS,
      };
    }
  });

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        benefits: updateBenefits,
        sureAmount: sureAmount < max ? sureAmount + summation : sureAmount,
      };
    case "DECREMENT":
      return {
        ...state,
        sureAmount: sureAmount > min ? sureAmount - summation : sureAmount,
      };

    case "UPDATE_BENEFIT":

      return {
        ...state,
      };

    default:
      return state;
  }
};
