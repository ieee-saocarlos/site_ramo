import { Nav, Navbar } from "react-bootstrap";

const logos = {
  "home": {
    "path": "../../logo_home.svg",
    "width": 30,
    "height": 30,
    "alt": "home_logo"
  }}

function AddImage(nome){
  return(
    <img
    src = {logos[nome].path}
    width = {logos[nome].width}  
    height = {logos[nome].height}
    className="d-inline-block align-top"
    alt = {logos[nome].alt}
  />
  )
}

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {AddImage("home")}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#noiticias">Notícias</Nav.Link>
          <Nav.Link href="#ramo">O Ramo</Nav.Link>
          <Nav.Link href="#nucleos">Núcleos</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
