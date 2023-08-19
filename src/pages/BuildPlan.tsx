import React from "react";
import { Container } from "../components/Layouts/Container";
import { Stepper } from "../components/Stepper/Stepper";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { CardMain } from "../components/Cards/CardMain";
import { Separator } from "../components/Separator";
import Input from "../components/Input";

export const BuildPlanPage = () => {
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
      <div className="bg-blanco py-4">
        <Container>
          <Text
            className="text-title-h4 mt-3 mb-2"
            text="Indica la suma asegurada"
          />
          <div className="d-flex align-items-center gap-3">
            <Text
              className="text-title-h6 c-gray-text my-0"
              text="MIN: $12.500"
            />
            <Separator />
            <Text
              className="text-title-h6 c-gray-text my-0"
              text="MAX: $12.500"
            />
          </div>
          <div className="input-dinamic mt-4">
            <div className="input-dinamic__remove">
              <img src="/images/icon-remove.jpg" alt="" />
            </div>

            <Input
              placeholder="Placa"
              className="text-center w-100"
              onChange={() => {}}
              value="$14,300"
            />

            <div className="input-dinamic__add">
              <img src="/images/icon-add.jpg" alt="" />
            </div>
          </div>

          <Title className="mt-5" type="h3" text="Agrega o quita coberturas" />
          
        </Container>
      </div>
    </>
  );
};
