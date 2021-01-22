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
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className="home-introduction">
              Hello! My name is{" "}
              <a
                className="home-name-link"
                href="https://www.linkedin.com/in/ashlynnroarick/"
              >
                Ashlynn Roarick
              </a>
              . I studied at Southern Methodist University and I live in Dallas,
              Texas.{" "}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={9}></Col>
          <Col lg={3}>
            <h3 className="home-description">
              I am a Front-End Web Developer specializing in ReactJS.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="home-inital">A.</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
