import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const AppHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "50px" }}>
        <Nav className="mr-auto">
          <Nav.Link href="/">На главную</Nav.Link>
          <Nav.Link href="/posts">Посты</Nav.Link>
          <Nav.Link href="/profile">Профиль</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
