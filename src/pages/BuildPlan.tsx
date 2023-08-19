import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useNavigate } from "react-router";

import { Container } from "../components/Layouts/Container";
import { Stepper } from "../components/Stepper/Stepper";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { CardMain } from "../components/Cards/CardMain";
import { Separator } from "../components/Separator";
import Input from "../components/Input";
import { Switch } from "../components/Switch";
import Button from "../components/Button";
import { formatCurrency } from "../helpers/formatCurrency";
import { useSureContext } from "../contexts/sureAmount/sureProvider";

export const BuildPlanPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useSureContext();

  return (
    <>
      <Stepper text="PASO 2 DE 2" />
      <div className="py-7 bg-gris">
        <Container>
          <Title type="h1" text="Mira las coberturas" />
          <Text
            className="c-gray-text mt-2 mb-5"
            text="Conoce las coberturas para tu plan"
          />
          <CardMain className="d-flex align-items-center">
            <div className="w-75 pr-5">
              <Text className="text-info my-0" text="Placa: C2U-114" />
              <Text
                className="text-title-h4 lato mt-1 mb-0"
                text="Wolkswagen 2019 Golf"
              />
              <img
                className="card-main__image"
                src="/images/img-welcome.png"
                alt="welcome"
              />
            </div>
          </CardMain>
        </Container>
      </div>
      <div className="bg-blanco pt-4">
        <Container>
          <Text
            className="text-title-h4 mt-3 mb-2"
            text="Indica la suma asegurada"
          />
          <div className="d-flex align-items-center gap-3">
            <Text
              className="text-title-h6 c-gray-text my-0"
              text={`MIN: ${formatCurrency(state.min, "$")}`}
            />
            <Separator />
            <Text
              className="text-title-h6 c-gray-text my-0"
              text={`MAX: ${formatCurrency(state.max, "$")}`}
            />
          </div>
          <div className="input-dinamic mt-4">
            <div
              className="input-dinamic__remove"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              <img src="/images/icon-remove.jpg" alt="" />
            </div>

            <Input
              disabled={true}
              placeholder="Placa"
              className="text-center w-100"
              onChange={() => {}}
              value={`${formatCurrency(state.sureAmount, "$")}`}
            />

            <div
              className="input-dinamic__add"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              <img src="/images/icon-add.jpg" alt="" />
            </div>
          </div>

          <Title className="mt-5" type="h3" text="Agrega o quita coberturas" />
        </Container>
        <Tabs className="tab-main mt-2">
          <TabList>
            <Tab>PROTEGE TU AUTO</Tab>
            <Tab>PROTEGE A LOS QUE TE RODEAN</Tab>
            <Tab>MEJORA TU PLAN</Tab>
          </TabList>
          <Container>
            <TabPanel className="py-4">
              {/* CONVERTIR A COMPONENTE */}
              {state.benefits.map((benefit) => {
                return (
                  <div
                    key={benefit.id}
                    className="d-flex py-4"
                    style={{ borderBottom: "solid 1px #D7DBF5" }}
                  >
                    <div className="mr-3">
                      <img src={benefit.pathImg} alt={benefit.nameShort} />
                    </div>
                    <div className="flex-grow-1 ">
                      <div className="d-flex j-content-between gap-3">
                        <Text
                          className="text-title-h4 mt-0"
                          text={benefit.name}
                        />
                        <Switch
                          isChecked={benefit.active}
                          onChange={() => {}}
                        />
                      </div>
                      {benefit.showDesc && (
                        <p className="text-parrafo my-0">
                          {benefit.description}
                        </p>
                      )}

                      {/* CONVERTIR A COMPONENTE */}
                      <div className="d-flex align-items-center w-content cursor-pointer">
                        <Text
                          className={`text-info text-info__xs my-2 mr-2 ${
                            !benefit.showDesc && "text-info--active"
                          }`}
                          text={benefit.showDesc ? "VER MENOS" : "VER MÁS"}
                        />
                        <div className="d-flex">
                          <img
                            src={`/images/arrow-${
                              benefit.showDesc ? "top" : "bottom"
                            }.jpg`}
                            alt={benefit.name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabPanel>

            <TabPanel>
              <h2>AA SS 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>AA conteSSSnt 3</h2>
            </TabPanel>
          </Container>
        </Tabs>

        <div className="box-buy mt-7">
          <div>
            <Title className="my-0" type="h2" text="$35.00" />
            <span className="fs-xxs c-gray-title fw-black">MENSUAL</span>
          </div>
          <div>
            <Button
              size="small"
              className="px-7"
              text="Lo quiero"
              onClick={() => {
                navigate("/gracias");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// <Accordion>
// <AccordionItem>
//   <AccordionItemHeading>
//     <AccordionItemButton>
//       What harsh truths do you prefer to ignore?
//     </AccordionItemButton>
//   </AccordionItemHeading>
//   <AccordionItemPanel>
//     <p>
//       Exercitation in fugiat est ut ad ea cupidatat ut in
//       cupidatat occaecat ut occaecat consequat est minim minim
//       esse tempor laborum consequat esse adipisicing eu
//       reprehenderit enim.
//     </p>
//   </AccordionItemPanel>
// </AccordionItem>
// <AccordionItem>
//   <AccordionItemHeading>
//     <AccordionItemButton>
//       Is free will real or just an illusion?
//     </AccordionItemButton>
//   </AccordionItemHeading>
//   <AccordionItemPanel>
//     <p>
//       In ad velit in ex nostrud dolore cupidatat consectetur ea
//       in ut nostrud velit in irure cillum tempor laboris sed
//       adipisicing eu esse duis nulla non.
//     </p>
//   </AccordionItemPanel>
// </AccordionItem>
// </Accordion>
