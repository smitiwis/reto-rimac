import { ItemNavbar } from "./ItemNavbar";
import { itemsNavBar } from "../../constants";

export const NavBar = () => {

  return (
    <nav className="nav-main">
      <ul className="nav-list">
        {itemsNavBar.map((items) => (
          <ItemNavbar {...items} />
        ))}
      </ul>
    </nav>
  );
};
