import React, { Component } from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import About from "./Sections/About/About";
import AboutUs from "./Sections/AboutUs/AboutUs";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";

export class BRac extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <img alt="Card" src={logo} width="200" />
              </Col>
              <Col>
                <h1 class="text-right">
                  IEEE Student Branch <br /> USP São Carlos
                </h1>
                <p class="text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <AboutUs></AboutUs>
          </Row>
          <Row>
            <WhatWeDo></WhatWeDo>
          </Row>
          <Row>
            <About></About>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BRac;
