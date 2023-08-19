
export interface AmountState {
  amount: number;
  min: number;
  max: number;
}

export interface AmountContextProps {
  state: AmountState;
  dispatch: AmountDispatch;
}

export type AmountAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export type AmountDispatch = (action: AmountAction) => void;