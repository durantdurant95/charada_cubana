import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Inicio = () => {
  return (
    <Container className="hero">
      <h1 className="py-5 display-4 font-weight-bold">
        La Charada siempre a su alcance
      </h1>
      <h3 className="mb-5">Encuentre sus resultados al momento!</h3>
      <p className="lead">
        Busque el resultado que desea o vea completamente la charada
      </p>
      <NavLink to="/buscador">
        <Button className="btn-lg" variant="light">
          Buscador
        </Button>
      </NavLink>
      <NavLink to="/charada">
        <Button className="ml-4 btn-lg" variant="outline-light">
          Charada completa
        </Button>
      </NavLink>
    </Container>
  );
};

export default Inicio;
