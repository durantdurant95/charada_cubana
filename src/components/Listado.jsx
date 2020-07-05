import React, { Fragment, useState } from "react";
import { FormControl, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import charada from "../data/charada.json";

const Listado = () => {
  const [resultado, setResultado] = useState("");
  const [matches, setMatches] = useState([]);

  const manejarCambio = (val) => {
    setResultado(val);
    console.log(val);

    let coinciden = charada.filter((some) => {
      return (
        some.principal.toLowerCase().match(val) ||
        some.id.toString(10).match(val) ||
        some.secundarios.toString().match(val)
      );
    });
    setMatches(coinciden);
    console.log(coinciden);
  };

  return (
    <Fragment>
      <FormControl
        className="col-md-8 col-lg-6 mx-auto shadow-sm"
        value={resultado}
        onChange={(e) => manejarCambio(e.target.value.toLowerCase())}
        placeholder="Busca la suerte..."
      ></FormControl>
      <Row xs={1} sm={2} md={3} lg={4}>
        {matches.map((item) => (
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
        ))}
      </Row>
    </Fragment>
  );
};

export default Listado;
