import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import charada from "../data/charada.json";

const Charada = () => {
  return (
    <Row className="mt-3" xs={1} sm={2} md={3} lg={4}>
      {charada.map((item) => (
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
  );
};

export default Charada;
