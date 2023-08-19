// AmountProvider.tsx

import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import { AmountContextProps, AmountState } from "./sureAmountTypes";
import { counterReducer } from "./sureAmountReducer";

const AmountContext = createContext<AmountContextProps | undefined>(undefined);

const initialState: AmountState = {
  amount: 14300,
  min: 12500,
  max: 16500
};

interface Props {
  children: ReactNode;
}

export const AmountProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <AmountContext.Provider value={{ state, dispatch }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmountContext = () => {
  const context = useContext(AmountContext);
  if (context === undefined) {
    throw new Error(
      "Debe ser utilizado dentro de un <AmountProvider></AmountProvider>"
    );
  }
  return context;
};
