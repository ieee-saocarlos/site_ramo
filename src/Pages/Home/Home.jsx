import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { CardsList } from "../../Components/NewsCard/CardsList";
import InstagramFeed from "../../Components/InstagramFeed/InstagramFeed";

import news from "../../news.json";


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
                  Nós somos um grupo de extensão ligado do campus de São Carlos da USP. Fazemos projetos principalmente ligados a tecnologia e no âmbito social.
                </p>
                <Col md={{ span: 8, offset: 4 }}>
                  <Button block>Saiba Mais</Button>
                </Col>
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
