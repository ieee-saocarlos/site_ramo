import React, { Component } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Chapters from "./Sections/Chapters/Chapters";
import AboutUs from "./Sections/AboutUs/AboutUs";
import WhatWeDo from "./Sections/WhatWeDo/WhatWeDo";
import TextSection from "./Sections/TextSection";
import logo from "../../logo.svg";

const __lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni error laborum cum numquam aspernatur voluptates iusto ex, minus, eaque, incidunt recusandae repellendus expedita debitis unde adipisci perferendis. Vitae, sint assumenda?";
export class Branch extends Component {
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row>
                        <TextSection
                            title="Quem Somos"
                            content={__lorem}
                            points={["Missão", "Visão", "Valores"]}
                        />
                    </Row>
                    <Row>
                        <TextSection
                            title="O que Fazemos"
                            content={__lorem}
                            points={[
                                "Projetos Técnicos",
                                "Projetos Sociais",
                                "Eventos",
                            ]}
                        />
                    </Row>
                    <Row>
                        <Chapters></Chapters>
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

export default Branch;
