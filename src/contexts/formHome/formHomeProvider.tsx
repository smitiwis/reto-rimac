import { FC, ReactNode, useState } from "react";
import { FormValues } from "../../interfaces";
import FormHomeContext from "./formHomeContext";
import { FormHomeContextType } from "./formHomeTypes";

interface Props {
  children: ReactNode;
}

export const FormHomeProvider: FC<Props> = ({ children }) => {
  const [formHome, setFormHome] = useState<FormValues>({} as FormValues);

  const updateFormHome = (newValue: FormValues) => {
    setFormHome(newValue);
  };

  const contextValue: FormHomeContextType = {
    formHome,
    updateFormHome,
  };

  return (
    <FormHomeContext.Provider value={contextValue}>
      {children}
    </FormHomeContext.Provider>
  );
};
