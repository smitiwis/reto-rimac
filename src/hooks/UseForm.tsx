import { ChangeEvent, FormEvent, useState } from "react";
import { FormValues, UseFormResult } from "../interfaces";
import { documents } from "../constants";

export const useForm = (): UseFormResult => {
  const [formValues, setFormValues] = useState<FormValues>({
    document: documents[0].value,
    documentNumber: "",
    phone: "",
    plateMumber: "",
    acceptTerms: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    let newValue: string | boolean = value;

    if (type === "checkbox") {
      newValue = (event.target as HTMLInputElement).checked;
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const validationErrors: Record<string, string> = {};
    if (!formValues.document) {
      validationErrors.document = "El document es obligatorio.";
    }
    if (!formValues.phone) {
      validationErrors.phone = "El número de phone es obligatorio.";
    }
    if (!formValues.plateMumber) {
      validationErrors.plateMumber = "El número de placa es obligatorio.";
    }
    if (!formValues.acceptTerms) {
      validationErrors.acceptTerms =
        "Debes aceptar las políticas de privacidad.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formulario enviado:", formValues);
    }
  };

  return { formValues, handleChange, handleSubmit, errors };
};
