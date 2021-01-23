import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

import Projects from "../views/projects";
import Specialties from "../views/specialties";
import Blog from "../views/blog";

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="home-introduction">
              I’m a <span className="emphasis">Designer</span> and{" "}
              <span className="emphasis">Developer</span> who is interested in
              the development of websites.
            </h1>
          </Col>
        </Row>
      </Container>
      <Specialties></Specialties>
      <Projects></Projects>
    </>
  );
}

export default Home;
