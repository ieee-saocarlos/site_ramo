import { Col, Container, Row } from "react-bootstrap";

const logos = {
  cs: {
    path: "../../logo_cs.png",
    width: 160,
    height: 90,
    alt: "cs_logo",
  },
  ras: {
    path: "../../logo_ras.png",
    width: 90,
    height: 90,
    alt: "ras_logo",
  },
  ieee: {
    path: "../../logo_ieee.png",
    width: 160,
    height: 90,
    alt: "ieee_logo",
  },
  wie: {
    path: "../../logo_wie.png",
    width: 90,
    height: 90,
    alt: "wie_logo",
  },
  pes: {
    path: "../../logo_pes.png",
    width: 150,
    height: 90,
    alt: "pes_logo",
  },
};

function AddImage(nome) {
  return (
    <img
      src={logos[nome].path}
      // width={logos[nome].width}
      height={100}
      className="d-inline-block align-top"
      alt={logos[nome].alt}
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
        <Row>
          <Col md="3">
            <a href="https://www.facebook.com/ieeecsuspsc/">{AddImage("cs")}</a>
          </Col>
          <Col md="2">
            <a href="https://www.instagram.com/wieuspsaocarlos/">
              {AddImage("wie")}
            </a>
          </Col>
          <Col md="3">
            <a href="https://www.facebook.com/ieeeuspsc">{AddImage("ieee")}</a>
          </Col>
          <Col md="2">
            <a href="https://www.instagram.com/raschaptersaocarlos/">
              {AddImage("ras")}
            </a>
          </Col>
          <Col md="2">
            <a href="https://www.facebook.com/ieeeuspsc">{AddImage("pes")}</a>
          </Col>
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
