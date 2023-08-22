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

import { modelVehicle } from "../constants";
import { formatCurrency } from "../helpers/formatCurrency";

import { Stepper } from "../components/Stepper/Stepper";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { CardMain } from "../components/Cards/CardMain";
import { Separator } from "../components/Separator";
import { Switch } from "../components/Switch";
import Input from "../components/Input";
import Button from "../components/Button";

import { useBenefitLogic } from "../hooks/useBenefits";

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
                    <Tab>PROTEGE TU AUTO</Tab>
                    <Tab>PROTEGE A LOS QUE TE RODEAN</Tab>
                    <Tab>MEJORA TU PLAN</Tab>
                  </TabList>
                  <TabPanel>
                    {stateSureRimac.benefits.map((benefit, index) => {
                      return (
                        <div
                          key={benefit.id}
                          className="d-flex py-4"
                          style={{ borderBottom: "solid 1px #D7DBF5" }}
                        >
                          <div className="mr-3">
                            <img
                              src={benefit.pathImg}
                              alt={benefit.nameShort}
                            />
                          </div>
                          <div className="flex-grow-1 ">
                            <div
                              className="header-benefit
                            "
                            >
                              <Text
                                className="text-title-h4 mt-0"
                                text={benefit.name}
                              />
                              <Switch
                                isChecked={benefit.active}
                                onChange={(e) => {
                                  updateBenefits(benefit);
                                }}
                              />
                            </div>
                            {benefit.showDesc && (
                              <p className="text-parrafo my-0">
                                {benefit.description}
                              </p>
                            )}

                            {/* CONVERTIR A COMPONENTE */}
                            <div
                              className="d-flex align-items-center w-content cursor-pointer"
                              onClick={() => moreInfo(benefit.id)}
                            >
                              <Text
                                className={`text-info text-info__xs my-2 mr-2 ${
                                  !benefit.showDesc && "text-info--active"
                                }`}
                                text={
                                  benefit.showDesc ? "VER MENOS" : "VER MÁS"
                                }
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
            <div className="box-buy">
              <div className="box-buy__text">
                <div className="fs-xs c-gray-title fw-black d-none d-md-block">
                  MONTO
                </div>
                <Title
                  type="h2"
                  text={formatCurrency(stateSureRimac.amount, "$", 2)}
                />
                <span className="fs-xxs c-gray-title fw-black d-block d-md-none">
                  MENSUAL
                </span>
                <span className="fs-xs c-gray-text fw-black d-none d-md-block">
                  mensuales
                </span>
              </div>
              <div className="box-buy__coverage">
                {!isBasicAmount && (
                  <>
                    <span className="fs-md c-gray-text fw-black d-none d-md-block">
                      El precio incluye:
                    </span>
                    <ul className="coverage-list">
                      {stateSureRimac.benefits.map((benefit) => {
                        const benefitIsSelected = benefit.active;
                        return (
                          benefitIsSelected &&
                          benefit.benefitsIncluded.map((included) => {
                            return (
                              <li
                                key={included}
                                className="coverage-list__item text-parrafo"
                              >
                                {included}
                              </li>
                            );
                          })
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
              <div className="box-buy__action">
                <Button
                  className="w-100"
                  size="small"
                  text="Lo quiero"
                  onClick={() => {
                    navigate("/gracias");
                  }}
                />
              </div>
            </div>
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
