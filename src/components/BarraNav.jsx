import React from "react";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BarraNav = () => {
  return (
    <Navbar variant="dark" expand="md">
      <Container>
        <NavLink to="/" exact>
          <NavbarBrand className="nav-link pt-2">Charada Cubana</NavbarBrand>
        </NavLink>
        <NavbarToggle
          type="button"
          data-toggle="collapse"
          data-target="#colapsable"
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse id="colapsable">
          <NavLink to="/buscador" className="ml-auto nav-link">
            Buscador
          </NavLink>
          <NavLink to="/charada" className="nav-link">
            Charada
          </NavLink>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
