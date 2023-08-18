import { FC } from "react";

interface Props {
  image: string;
  name: string;
  text: string;
}

export const ItemNavbar: FC<Props> = ({ image, name, text }) => {
  return (
    <li className="nav-list__item" key={name}>
      <a className="nav-list__link" href="/">
        <img
          className={`nav-list__image ${text && "mr-1"}`}
          src={image}
          alt={name}
        />
        {text && <span className="text-call">{text}</span>}
      </a>
    </li>
  );
};
