import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav-main">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link className="nav-list__link" to={"/inicio"}>
            <img
              className="nav-list__image mr-1"
              src={`${process.env.PUBLIC_URL}/images/logo-rimac.jpg`}
              alt="logo rimac"
            />
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__link" to={"/inicio"}>
            <span className="d-none d-md-block mr-3 rimac-checkbox__label">¿Tienes alguna duda?</span>
            <img
              className="nav-list__image mr-1"
              src={`${process.env.PUBLIC_URL}/images/icon-phone.jpg`}
              alt="icon-phone"
            />
            <span className="text-call d-block d-md-none">Llámanos</span>
            <span className="text-call d-none d-md-block">(01) 411 6001</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
