import { BannerHome } from "../components/Banners/BannerHome";
import { Container } from "../components/Layouts/Container";
import Input from "../components/Input";
import { Title } from "../components/Title";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

export const HomePage = () => {
  const documents = [{ label: "DNI", value: "opcion 1" }];
  return (
    <>
      <BannerHome />
      <Container>
        <Title
          className="text-title text-title-h2 my-4"
          text="Déjanos tus datos"
        />
        <div className="d-flex flex-column">
          <div className="d-flex mb-3">
            <Select
              options={documents}
              value=""
              className="br-none b-top-right-radius-0 b-bottom-right-radius-0"
              onChange={() => {}}
              disabled={true}
            />
            <div className="flex-grow-1">
              <Input
                placeholder="Nr. de doc"
                className="w-100 b-top-left-radius-0 b-bottom-left-radius-0"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>
          <Input
            placeholder="Celular"
            className="flex-grow-1 mb-3"
            type="number"
            onChange={() => {}}
            value=""
          />
          <Input
            placeholder="Placa"
            className="flex-grow-1"
            onChange={() => {}}
            value=""
          />

          <Checkbox className="my-4">
            <span>
              Acepto la{" "}
              <b className="text-underline">
                Política de Protecciòn de Datos Personales
              </b>{" "}
              y los <b className="text-underline">Términos y Condiciones</b>.
            </span>
          </Checkbox>

          <Button className="mt-3" text="COTÍZALO" onClick={()=>{}} />
        </div>
      </Container>
    </>
  );
};
