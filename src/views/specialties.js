import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Specialties() {
  return (
    <>
      <Container>
        <Row className="specialties-row">
          <Col lg={6}>
            <h1 className="specialties-title emphasis">Specialties</h1>
          </Col>
          <Col lg={3}>
            <p className="specialties-skills">ReactJS</p>
            <p className="specialties-skills">HTML/CSS</p>
            <p className="specialties-skills">SASS</p>
            <p className="specialties-skills">NodeJS</p>
          </Col>
          <Col lg={3}>
            <p className="specialties-skills">Java</p>
            <p className="specialties-skills">C++</p>
            <p className="specialties-skills">Python</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Specialties;
