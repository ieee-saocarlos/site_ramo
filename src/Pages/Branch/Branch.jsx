import React, { Component } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import Chapters from "./Sections/Chapters/Chapters";
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
            <Chapters></Chapters>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BRac;