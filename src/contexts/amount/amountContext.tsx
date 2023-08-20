import { createContext, useContext } from "react";
import { AmountContextType } from "./amountTypes";

const AmountContext = createContext<AmountContextType | undefined>(undefined);

export const useAmountContext = () => {
  const context = useContext(AmountContext);

  if (!context) {
    throw new Error(
      "useAmountContext debe ser utilizado dentro de un <AmountProvider></AmountProvider>"
    );
  }

  return context;
};

export default AmountContext;
