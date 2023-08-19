import { sumAssuredAction, SumAssuredState } from "./sumAssuredTypes";

export const counterReducer = (
  state: SumAssuredState,
  action: sumAssuredAction
): SumAssuredState => {
  const summation = 100;
  const { sumAssured, max, min } = state;

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        sumAssured: sumAssured < max ? sumAssured + summation : sumAssured,
      };
    case "DECREMENT":
      return {
        ...state,
        sumAssured: sumAssured > min ? sumAssured - summation : sumAssured,
      };
    default:
      return state;
  }
};
