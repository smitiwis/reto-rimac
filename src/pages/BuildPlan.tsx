import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

import { useUserDataContext } from "../contexts/userData/userDataContext";

import { INFO_TABS, modelVehicle } from "../constants";
import { formatCurrency } from "../helpers/formatCurrency";

import { Stepper } from "../components/Stepper/Stepper";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { CardMain } from "../components/Cards/CardMain";
import { Separator } from "../components/Separator";
import Input from "../components/Input";

import { useBenefitLogic } from "../hooks/useBenefits";
import { SureBenefit } from "../interfaces";
import BenefitItem from "../components/BenefitItem";
import BuyBox from "../components/BuyBox";

export const BuildPlanPage = () => {
  const { formHome, user } = useUserDataContext();
  const navigate = useNavigate();

  const {
    stateSureRimac,
    isBasicAmount,
    updateBenefits,
    incrementSureAmount,
    decrementSureAmount,
    moreInfo,
  } = useBenefitLogic();

  return (
    <div className="page-build layout-main">
      <div className="page-build__stepper">
        <Stepper text="PASO 2 DE 2" />
      </div>
      <div className="page-build__wrapper">
        <div className="column-one">
          <div className="column-one__content">
            <section className="secction-info">
              <Link className="d-block w-content" to="/inicio">
                <div className="d-none d-md-flex align-items-center gap-3">
                  <img src="/images/icon-back-red.png" alt="regresar" />
                  <span className="text-info ">VOLVER</span>
                </div>
              </Link>
              <Title
                className="d-block d-md-none"
                type="h1"
                text="Mira las coberturas"
              />
              <h1 className="text-title text-title-h1 mb-1 d-none d-md-block">
                ¡Hola <span className="c-primary">{user.name}!</span>
              </h1>
              <Text
                className="c-gray-text mt-2 mb-5"
                text="Conoce las coberturas para tu plan"
              />
              <CardMain className="d-flex align-items-center">
                <div className="w-75 pr-5">
                  <Text
                    className="text-info my-0"
                    text={`Placa: ${formHome.plateMumber}`}
                  />
                  <Text
                    className="text-title-h4 lato mt-1 mb-0"
                    text={modelVehicle}
                  />

                  <img
                    className="card-main__image"
                    src="/images/img-welcome.png"
                    alt="welcome"
                  />
                </div>
              </CardMain>
            </section>

            <section className="secction-sumAssured">
              <div className="sure-sume">
                <div className="w-100">
                  <Text
                    className="text-title-h4 mt-0 mb-2"
                    text="Indica la suma asegurada"
                  />
                  <div className="d-flex align-items-center gap-3">
                    <Text
                      className="text-title-h6 c-gray-text my-0"
                      text={`MIN: ${formatCurrency(stateSureRimac.min, "$")}`}
                    />
                    <Separator />
                    <Text
                      className="text-title-h6 c-gray-text my-0"
                      text={`MAX: ${formatCurrency(stateSureRimac.max, "$")}`}
                    />
                  </div>
                </div>

                <div className="input-dinamic">
                  <div
                    className="input-dinamic__remove"
                    onClick={decrementSureAmount}
                  >
                    <img src="/images/icon-remove.jpg" alt="" />
                  </div>

                  <Input
                    disabled={true}
                    placeholder="Placa"
                    className="w-100"
                    align="center"
                    onChange={() => {}}
                    value={`${formatCurrency(stateSureRimac.sureAmount, "$")}`}
                  />

                  <div
                    className="input-dinamic__add"
                    onClick={incrementSureAmount}
                  >
                    <img src="/images/icon-add.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="add-plan">
                <Title
                  className="mt-0"
                  type="h3"
                  text="Agrega o quita coberturas"
                />
                <Tabs className="tab-main mt-2">
                  <TabList>
                    {INFO_TABS.map((tab) => (
                      <Tab key={tab}>{tab}</Tab>
                    ))}
                  </TabList>
                  <TabPanel>
                    {stateSureRimac.benefits.map((benefit: SureBenefit) => {
                      return (
                        <BenefitItem
                          key={benefit.id}
                          benefit={benefit}
                          updateBenefits={updateBenefits}
                          moreInfo={moreInfo}
                        />
                      );
                    })}
                  </TabPanel>

                  <TabPanel>
                    <h2>Conido parte 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Contenido parte 3</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </section>
          </div>
        </div>
        <div className="column-two">
          <div className="column-two__content">
            <BuyBox
              stateSureRimac={stateSureRimac}
              isBasicAmount={isBasicAmount}
              navigate={navigate}
            />
          </div>
        </div>
      </div>
    </div>
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
