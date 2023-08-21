import { faker } from "@faker-js/faker";
import { getYearRandom } from "../helpers/generateYearRandom";

export const itemsNavBar = [
  {
    image: "/images/logo-rimac.jpg",
    name: "logo rimac",
    text: "",
    goToPage: "/inicio",
  },
  {
    image: "/images/icon-phone.jpg",
    name: "logo rimac",
    text: "Llámanos",
    goToPage: "",
  },
];

export const documents = [{ label: "DNI", value: "dni" }];

export const BENEFITS = [
  {
    name: "Llanta robada",
    nameShort: "Llanta robada",
    pathImg: "/images/img-tireMiss.jpg",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
    id: "7b09c92594da4ec4873f4321857a0085",
    price: 15,
    showDesc: true,
    active: true,
  },
  {
    name: "Choque y/o pasarte la luz roja ",
    nameShort: "Choque",
    pathImg: "/images/img-choque.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus necessitatibus mollitia consectetur, earum consequuntur dignissimos autem at sequi sunt quasi quam",
    id: "3987fce18a5b4eccac34d3d5b30e2d0d",
    price: 20,
    showDesc: false,
    active: false,
  },
  {
    name: "Atropello en la vía Evitamiento",
    nameShort: "Atropello",
    pathImg: "/images/img-runOver.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus necessitatibus mollitia consectetur, earum consequuntur dignissimos autem at sequi sunt quasi quam",
    id: "52f7e27fcfcf405da8f4e33ab70aadbe",
    price: 50,
    showDesc: false,
    active: false,
  },
];

const { vehicle } = faker;
const manufacturer = vehicle.manufacturer();
const mode = vehicle.vehicle();
const color = vehicle.color();
const name = faker.person.firstName();

export const modelVehicle = `${manufacturer} ${getYearRandom()} ${mode}  `;
export const namePerson = name;
