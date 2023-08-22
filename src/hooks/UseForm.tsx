import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";
import { FormErrors, FormValues, UseFormResult } from "../interfaces";
import { documents } from "../constants";
import { useUserDataContext } from "../contexts/userData/userDataContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { getDataUser } from "../services";

export const useForm = (): UseFormResult => {
  const { formHome, user, updateUserData } = useUserDataContext();
  const navigate = useNavigate();
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    document: documents[0].value,
    documentNumber: "47156085",
    phone: "964912022",
    plateMumber: "LUIS-1511",
    acceptTerms: true,
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

  const validatePhone = (value: string): boolean => {
    return /^9/.test(value);
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
    } else if (!validatePhone(captureValues.phone)) {
      newErrors.phone = `El número de celular debe empezar con 9.`;
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
    setIsValidForm(isFormValid(newErrors));
  };

  const isFormValid = (newErrors: FormErrors): boolean => {
    return Object.values(newErrors).every((error) => error === "");
  };

  const isAllTouched = (): boolean => {
    return Object.values(touched).every((fiels) => fiels === true);
  };

  const changeAllTouched = () => {
    setTouched({
      document: true,
      documentNumber: true,
      phone: true,
      plateMumber: true,
      acceptTerms: true,
    });

    captureErrors();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!isAllTouched()) changeAllTouched();
    if (isValidForm) {
      const userId = (Math.floor(Math.random() * 10) + 1).toString();
      const response = await getDataUser(userId);
      if (response.status === 200) {
        updateUserData(formValues, response.data);
        navigate("/armar-plan");
        console.log("DATA: ", {
          form: formValues,
          user: response.data
        });
      } else {
        console.log("Algo salio mal");
      }
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
