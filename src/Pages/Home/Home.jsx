import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { CardsList } from "../../Components/NewsCard/CardsList";
import news from "../../news.json";
import CalendarProvider from "../../components/CalendarProvider";
import logo from "../../logo.svg";

import InstagramFeed from "../../Components/InstagramFeed/InstagramFeed";

export class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    alt="Card"
                                    src="../../logo_home.svg"
                                    width="200"
                                />
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
