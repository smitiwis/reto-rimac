import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "../Layouts/Wrapper";
import { Container } from "../Layouts/Container";

export const Header = () => {
  return (
    <header className="header-main">
      <Container>
        <Wrapper>
          <NavBar />
        </Wrapper>
      </Container>
    </header>
  );
};
