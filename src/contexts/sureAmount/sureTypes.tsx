export interface SureState {
  sureAmount: number;
  min: number;
  max: number;
  amount: number;
  benefits: SureBenefit[];
}

export interface SureBenefit {
  name: string;
  nameShort: string;
  description: string;
  id: string;
  price: number;
  showDesc: boolean;
  active: boolean;
  pathImg: string;
}

export interface SureContextProps {
  state: SureState;
  dispatch: SureDispatch;
}

export interface SureAction {
  type: "INCREMENT" | "DECREMENT";
}

export type SureDispatch = (action: SureAction) => void;
