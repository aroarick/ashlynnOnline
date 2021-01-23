import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Blog() {
  return (
    <>
      <Row className="blog">
        <Container>
          <Row className="blog-row">
            <Col lg={7}>
              <h1 className="">Blog</h1>
            </Col>
            <Col lg={5}>
              <Row>
                <p className="emphasis">Title</p>
                <p className="">Introduction</p>
                <p className="">Date</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default Blog;
