import { Card,Row,Col } from "react-bootstrap";

export function CardItem(props){

    return(
        <Card className="mt-3">
            <Row>
                <Col className="mt-2 mb-2" sm="12" lg style={{overflow:"hidden"}}>
                        <img alt="Card" src={"./newsImages/" + props.img} width="auto" height={100} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                        {props.description}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}