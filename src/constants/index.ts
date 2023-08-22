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

export const INFO_TABS = [
  "ROTEGE TU AUTO",
  "PROTEGE A LOS QUE TE RODEAN",
  "MEJORA TU PLAN",
]

export const documents = [{ label: "DNI", value: "dni" }];

export const BENEFITS = [
  {
    id: "7b09c92594da4ec4873f4321857a0085",
    benefitsIncluded: [
      "Llanta de repuesto",
      "Análisis de motor",
      "Aros gratis",
    ],
    name: "Llanta robada",
    nameShort: "Llanta robada",
    pathImg: "/images/img-tireMiss.jpg",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
    price: 15,
    showDesc: true,
    active: true,
  },
  {
    id: "3987fce18a5b4eccac34d3d5b30e2d0d",
    benefitsIncluded: [
      "Cubrir multa.",
      "Refacción de daños.",
      "Asistencia técnica cubrida.",
      "Seguro médico.",
    ],
    name: "Choque y/o pasarte la luz roja ",
    nameShort: "Choque",
    pathImg: "/images/img-choque.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus necessitatibus mollitia consectetur, earum consequuntur dignissimos autem at sequi sunt quasi quam",
    price: 20,
    showDesc: false,
    active: false,
  },
  {
    id: "52f7e27fcfcf405da8f4e33ab70aadbe",
    benefitsIncluded: [
      "Gastos médicos.",
      "Ayuda psicológica.",
      "Abogado gratuito.",
      "Seguro de vida.",
    ],
    name: "Atropello en la vía Evitamiento",
    nameShort: "Atropello",
    pathImg: "/images/img-runOver.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus necessitatibus mollitia consectetur, earum consequuntur dignissimos autem at sequi sunt quasi quam",
    price: 50,
    showDesc: false,
    active: false,
  },
];

export const INIT_RIMAC = {
  sureAmount: 15500,
  min: 12500,
  max: 16500,
  amount: 20,
  benefits: BENEFITS,
};

const { vehicle } = faker;
const manufacturer = vehicle.manufacturer();
const mode = vehicle.vehicle();
const name = faker.person.firstName();

export const modelVehicle = `${manufacturer} ${getYearRandom()} ${mode}  `;
export const namePerson = name;
