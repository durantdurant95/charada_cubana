import React, { Fragment, useState } from "react";
import { FormControl, Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import charada from "../data/charada.json";

const Buscador = () => {
  const [resultado, setResultado] = useState("");
  const [matches, setMatches] = useState([]);

  const manejarCambio = (val) => {
    setResultado(val);
    let coinciden = charada.filter((some) => {
      const regex = new RegExp(`${val.toLowerCase()}`);
      return (
        some.principal.toLowerCase().match(regex) ||
        some.id.toString(10).match(regex) ||
        some.secundarios.toString().match(regex)
      );
    });
    if (val.length === 0) {
      console.log("vacio");
      coinciden = [];
    }
    setMatches(coinciden);
  };

  return (
    <Fragment>
      <div className="sticky-top buscador py-4">
        <p className="text-center my-4 lead">
          Busque por números o palabras clave
        </p>
        <FormControl
          className="col-10 col-md-8 mb-2 col-lg-6 mx-auto shadow-sm form-control-lg"
          value={resultado}
          onChange={(e) => manejarCambio(e.target.value)}
          placeholder="Busca la suerte..."
        ></FormControl>
      </div>
      <Row className="charada mt-3" xs={1} sm={2} md={3} lg={4}>
        {matches.map((item) => (
          <Container key={item.id}>
            <Col key={item.id}>
              <Card className="my-3 shadow" key={item.id}>
                <Card.Header className="text-center lead">
                  {item.id} - {item.principal}
                </Card.Header>
                <Card.Body>
                  {item.secundarios.map((meti) => (
                    <span key={meti.toString()} className="my-2 d-block">
                      {meti}
                    </span>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Container>
        ))}
      </Row>
    </Fragment>
  );
};

export default Buscador;
