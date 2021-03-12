import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import About from "./Sections/About/About";

export class BRac extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <Container>
          <Row>
            <About></About>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BRac;
