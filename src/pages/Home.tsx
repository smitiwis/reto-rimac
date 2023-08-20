import { BannerHome } from "../components/Banners/BannerHome";
import { Container } from "../components/Layouts/Container";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { documents } from "../constants";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "../hooks/UseForm";

export const HomePage = () => {
  const { formValues, handleChange, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  return (
    <>
      <BannerHome />
      <Container>
        <pre className=" my-6">
          Documento: {formValues.document} <br />
          Numero: {formValues.documentNumber} <br />
          Cell: {formValues.phone} <br />
          Placa: {formValues.plateMumber} <br />
          Terms: {JSON.stringify(formValues.acceptTerms)} <br />
        </pre>
        <Title className="my-4" type="h2" text="Déjanos tus datos" />
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="d-flex mb-3">
            <Select
              className="br-none b-top-right-radius-0 b-bottom-right-radius-0"
              name="document"
              value={formValues.document}
              options={documents}
              disabled={true}
              onChange={handleChange}
            />
            <div className="flex-grow-1">
              <Input
                className="w-100 b-top-left-radius-0 b-bottom-left-radius-0"
                placeholder="Nr. de doc"
                name="documentNumber"
                value={formValues.documentNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <Input
            className="flex-grow-1 mb-3"
            placeholder="celular"
            name="phone"
            type="number"
            value={formValues.phone}
            onChange={handleChange}
          />
          <Input
            className="flex-grow-1"
            placeholder="Número de placa"
            name="plateMumber"
            value={formValues.plateMumber}
            onChange={handleChange}
          />

          <Checkbox
            className="my-4"
            name="acceptTerms"
            isChecked={formValues.acceptTerms}
            onChange={handleChange}
          >
            <span>
              Acepto la{" "}
              <b className="text-underline">
                Política de Protecciòn de Datos Personales
              </b>{" "}
              y los <b className="text-underline">Términos y Condiciones</b>.
            </span>
          </Checkbox>

          <Button
            type="submit"
            className="mt-3"
            text="COTÍZALO"
            onClick={() => {
              navigate("/arma-plan");
            }}
          />
        </form>
      </Container>
    </>
  );
};
