import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { CardsList } from "../../components/CardsList";
import news from "../../news.json";
import CalendarProvider from "../../components/CalendarProvider";
import logo from "../../logo.svg";

import InstagramFeed from "../../Component/InstagramFeed";

export class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col md="8">
                            <Col md="12">
                                <Card>
                                    <Row>
                                        <Col>
                                            <img
                                                alt="Card"
                                                src={logo}
                                                width="200"
                                            />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Text>
                                                    This is a wider card with
                                                    supporting text below as a
                                                    natural lead-in to
                                                    additional content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
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
