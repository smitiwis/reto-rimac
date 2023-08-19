import { SureAction, SureState } from "./sureTypes";

export const counterReducer = (
  state: SureState,
  action: SureAction
): SureState => {
  const summation = 100;
  const { sureAmount, max, min } = state;

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        sureAmount : sureAmount < max ? sureAmount + summation : sureAmount,
      };
    case "DECREMENT":
      return {
        ...state,
        sureAmount : sureAmount > min ? sureAmount - summation : sureAmount,
      };

    default:
      return state;
  }
};
