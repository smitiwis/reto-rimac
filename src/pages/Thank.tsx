import { Container } from "../components/Layouts/Container";
import { Text } from "../components/Text";
import Button from "../components/Button";
import { useAmountContext } from "../contexts/amount/amountContext";
import { formatCurrency } from "../helpers/formatCurrency";

export const ThankPage = () => {
  const { amount } = useAmountContext();

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div>
      <img className="w-100" src="/images/img_thank.jpg" alt="imagen gracias" />
      <Container>
        <p className="text-parrafo text-center my-0 fw-black ">
          <span className="c-gray">Mensualidad: </span>
          <span className="c-success"> {formatCurrency(amount, "$", 2)}</span>
        </p>
        <h1 className="text-title text-title-h1 c-primary mt-6">
          ¡Te damos la bienvenida!{" "}
          <span className="c-gray-title">
            Cuenta con nosotros para proteger tu vehículo
          </span>
        </h1>

        <Text className="c-gray-text text-roboto fs-md fw-light mt-2 mb-5">
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
          tu correo: <span className="fw-normal">joel.sanchez@gmail.com</span>
        </Text>

        <Button
          className="btn-block"
          text="CÓMO USAR MI SEGURO"
          onClick={() => {}}
        />
      </Container>

      <footer className="footer-thank mt-5">
        <Container>
          <Text className="fs-xs text-roboto c-gray-neutral">
            © {currentYear} RIMAC Seguros y Reaseguros.
          </Text>
        </Container>
      </footer>
    </div>
  );
};
