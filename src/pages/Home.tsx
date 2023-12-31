import { BannerHome } from "../components/Banners/BannerHome";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { documents } from "../constants";
import { useForm } from "../hooks/UseForm";

export const HomePage = () => {
  const {
    formValues,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useForm();

  return (
    <div className="page-home">
      <BannerHome />
      <div className="form-main">
        <div className="content-form">
          <Title className="mb-4" type="h2" text="Déjanos tus datos" />
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
                  error={errors.documentNumber}
                  touched={touched.documentNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <Input
              className="flex-grow-1 mb-3"
              placeholder="Celular"
              name="phone"
              value={formValues.phone}
              error={errors.phone}
              touched={touched.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              className="flex-grow-1"
              placeholder="Placa"
              name="plateMumber"
              value={formValues.plateMumber}
              error={errors.plateMumber}
              touched={touched.plateMumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Checkbox
              className="my-4"
              name="acceptTerms"
              isChecked={formValues.acceptTerms}
              error={errors.acceptTerms}
              touched={touched.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
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
              className="mt-2 mb-4"
              text="COTÍZALO"
              onClick={() => {
                // navigate("/arma-plan");
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
