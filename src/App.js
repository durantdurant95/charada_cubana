import React from "react";
import { Container } from "react-bootstrap";
import Listado from "./components/Listado";
import "./App.scss";

function App() {
  return (
    <Container>
      <h1 className="text-center my-3">Charada Cubana</h1>
      <h3 className="text-center">
        Simple buscador de resultados en la conocida charada cubana, suerte!!!
      </h3>
      <p className="text-center my-4">
        Puede buscar tanto por números como por palabras clave y obtendrá los
        resultados
      </p>
      <Listado />
    </Container>
  );
}

export default App;
