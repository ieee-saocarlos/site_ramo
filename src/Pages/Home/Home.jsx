import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { CardsList } from "../../components/CardsList";
import news from "../../news.json";

import InstagramFeed from "../../Component/InstagramFeed";

import logo from "../../logo.svg";

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <img alt="Card" src="../../logo_home.svg" width="200" />
              </Col>
              <Col>
                <h1 className="text-right">
                  IEEE Student Branch <br /> USP São Carlos
                </h1>
                <p className="text-right">
                  <Button variant="primary">Sobre Nós</Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col md="8">
              <CardsList data={news} initNumberOfData={3} />
            </Col>
            <Col md="4" as="aside">
              <InstagramFeed />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
