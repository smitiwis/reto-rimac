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
import { useEffect, useState } from "react";
import { BENEFITS, modelVehicle } from "../constants";
import { SureBenefit, SureState } from "../interfaces";
import { useAmountContext } from "../contexts/amount/amountContext";
import { useUserDataContext } from "../contexts/userData/userDataContext";

export const BuildPlanPage = () => {
  const navigate = useNavigate();
  const { updateAmount } = useAmountContext();
  const { formHome } = useUserDataContext();

  const [stateSureRimac, setStateSureRimac] = useState<SureState>({
    sureAmount: 15800,
    min: 12500,
    max: 16500,
    amount: 20,
    benefits: BENEFITS,
  });

  const [benefitDelete, setBenefitDelete] = useState<SureBenefit>();
  const [vehicle, setVehicle] = useState(modelVehicle);

  const amountBase = 20;
  const summation = 100;
  const sureAmountToMaxChoque = 16000;
  const idBenefitChoque = BENEFITS[1].id;

  const updateBenefits = (benefiToUpdate: any) => {
    const benefitsCurrent = stateSureRimac.benefits.map((benefit) => {
      const { id, active } = benefit;
      return {
        ...benefit,
        active: id === benefiToUpdate.id ? !active : active,
      };
    });

    const amountCurrent = sumActivePrices(benefitsCurrent);

    setStateSureRimac({
      ...stateSureRimac,
      amount: amountCurrent,
      benefits: benefitsCurrent,
    });

    updateAmount(amountCurrent);
  };

  const sumActivePrices = (benefits: SureBenefit[]): number => {
    return benefits.reduce(
      (total, benefit) => (benefit.active ? total + benefit.price : total),
      amountBase
    );
  };

  const incrementSureAmount = () => {
    const currentAmount =
      stateSureRimac.sureAmount < stateSureRimac.max
        ? stateSureRimac.sureAmount + summation
        : stateSureRimac.sureAmount;

    let benefitCurrent = [...stateSureRimac.benefits];

    if (
      currentAmount > sureAmountToMaxChoque &&
      stateSureRimac.benefits.length === 3
    ) {
      benefitCurrent = stateSureRimac.benefits.filter((benefit) => {
        if (benefit.id === idBenefitChoque) {
          setBenefitDelete(benefit);
        }
        return benefit.id !== idBenefitChoque;
      });
    }

    const amountTotal = sumActivePrices([...benefitCurrent]);

    setStateSureRimac({
      ...stateSureRimac,
      sureAmount: currentAmount,
      benefits: [...benefitCurrent],
      amount: amountTotal,
    });
    updateAmount(amountTotal);
  };

  const decrementSureAmount = () => {
    const currentAmount =
      stateSureRimac.sureAmount > stateSureRimac.min
        ? stateSureRimac.sureAmount - summation
        : stateSureRimac.sureAmount;

    let benefitCurrent = [...stateSureRimac.benefits];

    if (
      currentAmount <= sureAmountToMaxChoque &&
      stateSureRimac.benefits.length === 2
    ) {
      const benefitDeleteIndex = BENEFITS.findIndex((benefit) => {
        return benefit.id === idBenefitChoque;
      });

      if (benefitDelete) {
        benefitCurrent = benefitCurrent
          .map((benefit, i) =>
            i === benefitDeleteIndex ? [benefitDelete, benefit] : benefit
          )
          .flat();
      }
    }

    const amountTotal = sumActivePrices([...benefitCurrent]);

    setStateSureRimac({
      ...stateSureRimac,
      sureAmount: currentAmount,
      amount: amountTotal,
      benefits: [...benefitCurrent],
    });

    updateAmount(amountTotal);
  };

  useEffect(() => {
    const isCompletedForm = Object.keys(formHome).length > 0;

    if (isCompletedForm) {
      const amountCurrent = sumActivePrices(stateSureRimac.benefits);
      setStateSureRimac({
        ...stateSureRimac,
        amount: amountCurrent,
      });

      updateAmount(amountCurrent);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Stepper text="PASO 2 DE 2" />
      <div className="py-6 bg-gris">
        <Container>
          <Title type="h1" text="Mira las coberturas" />
          {/* <h1 className="text-title text-title-h1">
            ¡Hola <span className="c-primary">{faker.person.firstName()}!</span>
          </h1> */}
          <Text
            className="c-gray-text mt-2 mb-4"
            text="Conoce las coberturas para tu plan"
          />
          <CardMain className="d-flex align-items-center">
            <div className="w-75 pr-5">
              <Text
                className="text-info my-0"
                text={`Placa: ${formHome.plateMumber}`}
              />
              <Text className="text-title-h4 lato mt-1 mb-0" text={vehicle} />

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
              text={`MIN: ${formatCurrency(stateSureRimac.min, "$")}`}
            />
            <Separator />
            <Text
              className="text-title-h6 c-gray-text my-0"
              text={`MAX: ${formatCurrency(stateSureRimac.max, "$")}`}
            />
          </div>
          <div className="input-dinamic mt-3">
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

            <div className="input-dinamic__add" onClick={incrementSureAmount}>
              <img src="/images/icon-add.jpg" alt="" />
            </div>
          </div>

          <Title className="mt-4" type="h3" text="Agrega o quita coberturas" />
        </Container>
        <Tabs className="tab-main mt-2">
          <TabList>
            <Tab>PROTEGE TU AUTO</Tab>
            <Tab>PROTEGE A LOS QUE TE RODEAN</Tab>
            <Tab>MEJORA TU PLAN</Tab>
          </TabList>
          <Container>
            <TabPanel className="py-4">
              {stateSureRimac.benefits.map((benefit) => {
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

        <Container className="box-buy mt-6">
          <div>
            <Title
              className="my-0"
              type="h2"
              text={formatCurrency(stateSureRimac.amount, "$", 2)}
            />
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
        </Container>
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
