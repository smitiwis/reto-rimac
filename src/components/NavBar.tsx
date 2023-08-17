import logoRimac from "../assets/images/logo-rimac.jpg";
import iconPhone from "../assets/images/icon-phone.jpg";

export const NavBar = () => {
  return (
    <nav className="nav-main">
      <ul className="nav-list">
        <li className="nav-list__item">
          <a className="nav-list__link" href="#">
            <img className="nav-list__image" src={logoRimac} alt="" />
          </a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list__link" href="#">
            <img className="nav-list__image mr-1" src={iconPhone} alt="" />
            <span className="text-call">Llámanos</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
