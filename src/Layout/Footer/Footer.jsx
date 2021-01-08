import { Col, Container, Row } from "react-bootstrap";
import logo from "../../logo.svg";

function Footer() {
  return (
    <footer class="footer">
      <Container>
        <Row>Contato | O Ramo | Endereço</Row>
        <Row>
          <Col md="3">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md="2">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md="2">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md="2">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
          <Col md="3">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Col>
        </Row>
        <Row>
          <span class="text-muted">Place sticky footer content here.</span>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
