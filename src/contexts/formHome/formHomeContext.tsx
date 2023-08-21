import { createContext, useContext } from "react";
import { FormHomeContextType } from "./formHomeTypes";

const FormHomeContext = createContext<FormHomeContextType | undefined>(undefined);

export const useFormHomeContext = () => {
  const context = useContext(FormHomeContext);

  if (!context) {
    throw new Error(
      "useFormHomeContext debe ser utilizado dentro de un <FormHomeProvider></FormHomeProvider>"
    );
  }

  return context;
};

export default FormHomeContext;
