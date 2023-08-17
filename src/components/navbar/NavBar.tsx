import { ItemNavbar } from "./ItemNavbar";

export const NavBar = () => {
  const itemsNavBar = [
    {
      image: "/images/logo-rimac.jpg",
      name: "logo rimac",
      text: "",
    },
    {
      image: "/images/icon-phone.jpg",
      name: "logo rimac",
      text: "Llámanos",
    },
  ];

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
