import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Projects() {
  return (
    <>
      <Row className="blog">
        <Container>
          <Row className="blog-row">
            <Col lg={7}>
              <h1 className="">My Projects</h1>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default Projects;
