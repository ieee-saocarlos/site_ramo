import React, { Component } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { CardsList } from "../../components/CardsList";
import news from "../../news.json";
import CalendarProvider from "../../components/CalendarProvider";
import logo from "../../logo.svg";

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
                            <CardsList data={news} initNumberOfData={3} />
                        </Col>
                        <Col md="4" as="aside">
                            <div className="p-3 mb-3 bg-light rounded">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">
                                    Etiam porta <em>sem malesuada magna</em>{" "}
                                    mollis euismod. Cras mattis consectetur
                                    purus sit amet fermentum. Aenean lacinia
                                    bibendum nulla sed consectetur.
                                </p>
                            </div>
                            <div className="p-3 mb-3 bg-light rounded">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">
                                    Etiam porta <em>sem malesuada magna</em>{" "}
                                    mollis euismod. Cras mattis consectetur
                                    purus sit amet fermentum. Aenean lacinia
                                    bibendum nulla sed consectetur.
                                </p>
                            </div>
                            <CalendarProvider />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
