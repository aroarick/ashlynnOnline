import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Navigation() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="navbar-title" href="#home">
          Ashlynn Roarick
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">LinkedIn Logo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="nav-contact">
        <Col>
          <p className="nav-contact-words phone-number">469-782-6376</p>
        </Col>
        <Col>
          <p className="nav-contact-words email">itsme@ashlynn.online</p>
        </Col>
      </Row>
    </>
  );
}

export default Navigation;
