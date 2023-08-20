import { FC, ReactNode, useState } from "react";
import AmountContext from "./amountContext";
import { AmountContextType } from "./amountTypes";

interface Props {
  children: ReactNode;
}

export const AmountProvider: FC<Props> = ({ children }) => {
  const [amount, setAmount] = useState<number>(0);

  const updateAmount = (newValue: number) => {
    setAmount(newValue);
  };

  const contextValue: AmountContextType = {
    amount,
    updateAmount,
  };

  return (
    <AmountContext.Provider value={contextValue}>
      {children}
    </AmountContext.Provider>
  );
};
