import React from "react";
import { Card, Col, Row } from "react-bootstrap";

/**
 *
 * @param {*} props
 * @returns
 */
function TextSection({ title, content, points }) {
    return (
        <section>
            <h2>{title}</h2>
            <Row>
                <Col md="8" style={{margin: '0 auto'}}>
                    <p>{content}</p>
                </Col>
            </Row>
            <Row>
                {points.map((point) => {
                    return (
                        <Col md="4">
                            <Card className="text-center">
                                <Card.Body>{point}</Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}

export default TextSection;
