import { ChangeEvent, FocusEvent, FormEvent } from "react";

export interface FormValues {
  document: string;
  documentNumber: string;
  phone: string;
  plateMumber: string;
  acceptTerms: boolean;
}

export interface FormErrors {
  document: string;
  documentNumber: string;
  phone: string;
  plateMumber: string;
  acceptTerms: string;
}

export interface UseFormResult {
  isValidForm: boolean;
  formValues: FormValues;
  errors: FormErrors;
  touched: Record<keyof FormValues, boolean>; // Nuevo campo agregado
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}