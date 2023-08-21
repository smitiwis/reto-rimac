import React from "react";
import { NavBar } from "./NavBar";
import { Container } from "../Layouts/Container";

export const Header = () => {
  return (
    <header className="bg-gris">
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};
