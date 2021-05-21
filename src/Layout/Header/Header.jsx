import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const logos = {
  home: {
    path: "../../logo_home.svg",
    width: 30,
    height: 30,
    alt: "home_logo",
  },
};

function AddImage(nome) {
  return (
    <img
      src={logos[nome].path}
      width={logos[nome].width}
      height={logos[nome].height}
      className="d-inline-block align-top"
      alt={logos[nome].alt}
    />
  );
}

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Link to="/" className="navbar-brand">
        {AddImage("home")}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Notícias
          </Link>
          <Link to="/ramo" className="nav-link">
            Ramo
          </Link>
          {/* <Link to="/nucleos" className="nav-link">
            Núcleos
          </Link> */}
          <Link to="/contato" className="nav-link">
            Contato
          </Link>
        </Nav>
        {/* <Nav>
          <Nav.Link eventKey={2} href="#login">
            Login
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
