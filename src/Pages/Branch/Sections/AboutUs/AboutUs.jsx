import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <section>
      <h2>Quem Somos</h2>
      <Row>
        <Col md="12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Card className="text-center">
            <Card.Body>Missão</Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="text-center">
            <Card.Body>Visão</Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="text-center">
            <Card.Body>Valores</Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default AboutUs;
