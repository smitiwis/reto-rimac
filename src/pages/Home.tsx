import { NavBar } from "../components/navbar/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <input placeholder="Nr. de doc" className="input-rimac" type="text" />
      <input placeholder="Placa" className="input-rimac" type="text" />
      <input placeholder="Celular" className="input-rimac" type="text" />
    </>
  );
};
