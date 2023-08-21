import { FormValues } from "../../interfaces";

export interface FormHomeContextType {
    formHome: FormValues;
    updateFormHome: (newValue: FormValues) => void;
  }
  