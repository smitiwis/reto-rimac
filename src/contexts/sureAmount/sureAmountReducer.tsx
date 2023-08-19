import { AmountAction, AmountState } from "./sureAmountTypes";

export const counterReducer = (
  state: AmountState,
  action: AmountAction
): AmountState => {
  const summation = 100;
  const { amount, max, min } = state;

  switch (action.type) {
    case "INCREMENT":
      return { ...state, amount: amount < max ? amount + summation : amount };
    case "DECREMENT":
      return { ...state, amount: amount > min ? amount - summation : amount };
    default:
      return state;
  }
};
