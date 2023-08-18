import { BannerHome } from "../components/Banners/BannerHome";
import { Container } from "../components/Layouts/Container";
import Input from "../components/Input";
import { Title } from "../components/Title";
import { NavBar } from "../components/header/NavBar";
import Select from "../components/Select";

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
              className="rimac-select br-none br-top-right-0 br-bottom-right-0"
              onChange={() => {}}
              disabled={true}
            />
            <div className="flex-grow-1">
              <Input
                placeholder="Nr. de doc"
                className="rimac-input w-100 br-top-left-0 br-bottom-left-0"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>
          <div className="flex-grow-1 mb-3">
            <Input
              placeholder="Celular"
              className="rimac-input  w-100"
              type="number"
              onChange={() => {}}
              value=""
            />
          </div>
          {/* <div className="d-flex"> */}
          <Input
            placeholder="Placa"
            className="rimac-input flex-grow-1"
            onChange={() => {}}
            value=""
          />
          {/* </div> */}
        </div>
      </Container>
    </>
  );
};
