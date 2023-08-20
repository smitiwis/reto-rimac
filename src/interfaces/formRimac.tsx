import { ChangeEvent, FormEvent } from "react";

export interface FormValues {
  document: string;
  documentNumber: string;
  phone: string;
  plateMumber: string;
  acceptTerms: boolean;
}

export interface UseFormResult {
  formValues: FormValues;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (event: FormEvent) => void;
  errors: Record<string, string>;
}
