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

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    return /^9\d{8}$/.test(phoneNumber);
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

    if (!captureValues.documentNumber) {
      newErrors.documentNumber = `El número de documento es requerido.`;
    } else if (captureValues.documentNumber.length !== 8) {
      newErrors.documentNumber = `El número de documento debe tener 8 caracteres.`;
    }

    if (!captureValues.phone) {
      newErrors.phone = `El número de celular es requerido.`;
    } else if (!validatePhoneNumber(captureValues.phone)) {
      newErrors.phone = `Debe empezar con 9 y tener 9 dígitos.`;
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
      console.log("FORMULARIO VALIDO")
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
