// AmountProvider.tsx

import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import { SumAssuredContextProps, SumAssuredState } from "./sumAssuredTypes";
import { counterReducer } from "./sumAssuredReducer";

const SumAssuredContext = createContext<SumAssuredContextProps | undefined>(undefined);

const initialState: SumAssuredState = {
  sumAssured: 14300,
  min: 12500,
  max: 16500
};

interface Props {
  children: ReactNode;
}

export const SumAssuredProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <SumAssuredContext.Provider value={{ state, dispatch }}>
      {children}
    </SumAssuredContext.Provider>
  );
};

export const useSumAssuredContext = () => {
  const context = useContext(SumAssuredContext);
  if (context === undefined) {
    throw new Error(
      "Debe ser utilizado dentro de un <SumAssuredContext></SumAssuredContext>"
    );
  }
  return context;
};
