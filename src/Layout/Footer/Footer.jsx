import { Col, Container, Row } from "react-bootstrap";

const logos = {
  cs: {
    path: "../../logo_cs.png",
    alt: "cs_logo",
  },
  ras: {
    path: "../../logo_ras.png",
    alt: "ras_logo",
  },
  ieee: {
    path: "../../logo_ieee.png",
    alt: "ieee_logo",
  },
  wie: {
    path: "../../logo_wie.png",
    alt: "wie_logo",
  },
  pes: {
    path: "../../logo_pes.png",
    alt: "pes_logo",
  },
};

function AddImage(nome) {
  return (
    <img
      src={logos[nome].path}
      alt={logos[nome].alt}
      style={{
        maxHeight: 90, 
        maxWidth: '100%',
      }}
    />
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="12">Contato | O Ramo | Endereço</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={2}>{AddImage("cs")}</Col>
          <Col md={2}>{AddImage("wie")}</Col>
          <Col md={2}>{AddImage("ieee")}</Col>
          <Col md={2}>{AddImage("ras")}</Col>
          <Col md={2}>{AddImage("pes")}</Col>
        </Row>
        <Row>
          <Col md="12">
            <span className="text-muted">Informações legais do ramo.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
