// AmountProvider.tsx

import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import { SureContextProps, SureState } from "./sureTypes";
import { counterReducer } from "./sureReducer";
import { BENEFITS } from "../../constants";

const SureContext = createContext<SureContextProps | undefined>(
  undefined
);

const initialState: SureState = {
  sureAmount: 14300,
  min: 12500,
  max: 16500,
  amount: 20,
  benefits: BENEFITS,
};

interface Props {
  children: ReactNode;
}

export const SureProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <SureContext.Provider value={{ state, dispatch }}>
      {children}
    </SureContext.Provider>
  );
};

export const useSureContext = () => {
  const context = useContext(SureContext);
  if (context === undefined) {
    throw new Error(
      "Debe ser utilizado dentro de un <SureContext></SureContext>"
    );
  }
  return context;
};
