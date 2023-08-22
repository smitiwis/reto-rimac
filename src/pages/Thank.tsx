import { Container } from "../components/Layouts/Container";
import { Text } from "../components/Text";
import Button from "../components/Button";
import { useAmountContext } from "../contexts/amount/amountContext";
import { formatCurrency } from "../helpers/formatCurrency";
import { faker } from "@faker-js/faker";
import { useUserDataContext } from "../contexts/userData/userDataContext";
import { Wrapper } from "../components/Layouts/Wrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ThankPage = () => {
  const { amount } = useAmountContext();
  const { formHome, user } = useUserDataContext();
  const navigate = useNavigate();

  const date = new Date();
  const currentYear = date.getFullYear();

  useEffect(() => {
    if (!user.email) {
      navigate("/");
    }
  }, []);

  return (
      <div className="page-thank">
        <div className="page-thank__present">
          <picture className="d-block w-100">
            <source
              media="(max-width: 992px)"
              srcSet="/images/img-thank-mobile.jpg"
            />
            <img
              className="w-100"
              src="/images/img-thank-desktop.png"
              alt="Imagen gracias"
            />
          </picture>
        </div>
        <div className="page-thank__description">
          <Wrapper>
            <p className="text-parrafo text-center my-0 fw-black ">
              <span className="c-gray">Mensualidad: </span>
              <span className="c-success">
                {" "}
                {formatCurrency(amount, "$", 2)}
              </span>
            </p>
            <h1 className="text-title text-title-h1 c-primary mt-4">
              ¡Te damos la bienvenida!{" "}
              <span className="c-gray-title">
                Cuenta con nosotros para proteger tu vehículo
              </span>
            </h1>

            <Text className="c-gray-text text-roboto fs-md fw-light mt-2 mb-6">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking
              a tu correo: <br className="d-none d-md-block" /> <span className="fw-normal">{user.email}</span>
            </Text>

            <Button
              className="btn-block"
              text="CÓMO USAR MI SEGURO"
              onClick={() => {}}
            />
          </Wrapper>

          <footer className="footer-thank mt-5 d-block d-md-none">
            <Wrapper>
              <Text className="fs-xs text-roboto c-gray-neutral">
                © {currentYear} RIMAC Seguros y Reaseguros.
              </Text>
            </Wrapper>
          </footer>
        </div>
      </div>
  );
};
