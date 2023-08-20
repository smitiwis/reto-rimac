import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import { FormErrors, FormValues, UseFormResult } from "../interfaces";
import { documents } from "../constants";

export const useForm = (): UseFormResult => {
  const [formValues, setFormValues] = useState<FormValues>({
    document: documents[0].value,
    documentNumber: "",
    phone: "",
    plateMumber: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    document: "",
    documentNumber: "",
    phone: "",
    plateMumber: "",
    acceptTerms: "",
  });

  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    document: false,
    documentNumber: false,
    phone: false,
    plateMumber: false,
    acceptTerms: false,
  });

  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    let newValue: string | boolean = value.replace(/\s+/g, "");

    if (type === "checkbox") {
      newValue = (event.target as HTMLInputElement).checked;
    }

    if (name === "plateMumber") {
      newValue = value.toUpperCase().replace(/\s+/g, "");
    }

    const captureValues = {
      ...formValues,
      [name]: newValue,
    };

    setFormValues(captureValues);
    captureErrors(captureValues);
  };

  const validateLength = (value: string, length: number): boolean => {
    return value.length === length;
  };

  const validateNumeric = (value: string): boolean => {
    return /^\d+$/.test(value);
  };

  const validateRequired = (value: string): boolean => {
    return value.trim() !== "";
  };

  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    const updateTouched = {
      ...touched,
      [target.name]: true,
    };

    setTouched(updateTouched);
    captureErrors();
  };

  const captureErrors = (captureValues?: FormValues) => {
    const newErrors = {
      document: "",
      documentNumber: "",
      phone: "",
      plateMumber: "",
      acceptTerms: "",
    };
    captureValues = captureValues ? captureValues : formValues;

    if (!validateRequired(captureValues.documentNumber)) {
      newErrors.documentNumber = `El número de documento es requerido.`;
    } else if (!validateNumeric(captureValues.documentNumber)) {
      newErrors.documentNumber = `El número de documento debe ser numérico.`;
    } else if (!validateLength(captureValues.documentNumber, 8)) {
      newErrors.documentNumber = `El número de documento debe tener 8 caracteres.`;
    }

    if (!validateRequired(captureValues.phone)) {
      newErrors.phone = `El número de celular es requerido.`;
    } else if (!validateNumeric(captureValues.phone)) {
      newErrors.phone = `El número de celular debe ser numérico.`;
    } else if (!validateLength(captureValues.phone, 9)) {
      newErrors.phone = `El número de celular debe tener 9 caracteres.`;
    }

    if (!captureValues.plateMumber) {
      newErrors.plateMumber = `El número de placa es requerido.`;
    }

    if (!captureValues.acceptTerms) {
      newErrors.acceptTerms = `Debes aceptar los términos y condiciones.`;
    }

    setErrors(newErrors);
  };

  const isFormValid = (): boolean => {
    return Object.values(errors).every((error) => !error);
  };

  const validateOnSubmit = () => {
    setTouched({
      document: true,
      documentNumber: true,
      phone: true,
      plateMumber: true,
      acceptTerms: true,
    });

    captureErrors();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    validateOnSubmit();

    if (isFormValid()) {
      console.log("FORMULARIO VALIDO");
    }
  };

  return {
    formValues,
    errors,
    touched,
    isValidForm,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
