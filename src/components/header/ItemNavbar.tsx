import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  text: string;
  goToPage: string;
}

export const ItemNavbar: FC<Props> = ({ image, name, text, goToPage }) => {
  return (
    <li className="nav-list__item">
      <Link className="nav-list__link" to={"/inicio"}>
        <img
          className={`nav-list__image ${text && "mr-1"}`}
          src={image}
          alt={name}
        />
        {text && <span className="text-call">{text}</span>}
      </Link>
    </li>
  );
};
