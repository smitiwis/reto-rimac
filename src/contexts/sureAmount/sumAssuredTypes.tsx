
export interface SumAssuredState {
  sumAssured: number;
  min: number;
  max: number;
}

export interface SumAssuredContextProps {
  state: SumAssuredState;
  dispatch: sumAssuredDispatch;
}

export type sumAssuredAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export type sumAssuredDispatch = (action: sumAssuredAction) => void;