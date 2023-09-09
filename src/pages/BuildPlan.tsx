import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
import HeaderAccordion from "../components/Accordion/HeaderAccordion";

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
                  <img src={`${process.env.PUBLIC_URL}/images/icon-back-red.png`} alt="regresar" />
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
                    src={`${process.env.PUBLIC_URL}/images/img-welcome.png`}
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
                    <img src={`${process.env.PUBLIC_URL}/images/icon-remove.jpg`} alt="" />
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
                    <img src={`${process.env.PUBLIC_URL}/images/icon-add.jpg`} alt="" />
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
                    <div className="d-block d-md-none">
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
                    </div>

                    <div className="d-none d-md-block">
                      <Accordion>
                        {stateSureRimac.benefits.map((benefit) => (
                          <AccordionItem key={benefit.id}>
                            <AccordionItemHeading>
                              <AccordionItemButton className="cursor-pointer">
                                <HeaderAccordion
                                  benefit={benefit}
                                  updateBenefits={updateBenefits}
                                />
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p className="text-parrafo  my-3 pl-7 pr-4">
                                {benefit.description}
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div></div>
                  </TabPanel>
                  <TabPanel>
                    <div></div>
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
