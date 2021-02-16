import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Home() {
  return (
    <>
      <Row>
        <Col>
          <h1 className="home-intro">
            Since I began learning how to program several years ago I realized
            where my passions lie. I find great pleasure in building high
            quality user interfaces that meet and exceed the requirements of my
            users.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="home-consultation">
            I am currently avaliable for consultations
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image fluid className="home-mountains" src="/moutains.png"></Image>
        </Col>
      </Row>
      <Row className="specialties-row">
        <Col>
          <h1 className="specialties-title">Design</h1>
          <p className="specialties-description">
            Whether drawing in my notebooks or designing in Photoshop, creating
            is an important part of who I am.
          </p>
          <p className="specialties-skills">Design Skills</p>
          <ul className="specialties-skills-list">
            <li>UX</li>
            <li>UI</li>
            <li>Responsive Design</li>
          </ul>
        </Col>
        <Col>
          <h1 className="specialties-title">Front-end</h1>
          <p className="specialties-description">
            I like to design and code things from scratch. I enjoy bringing my
            ideas to life in the browser.
          </p>
          <p className="specialties-skills">Design Skills</p>
          <ul className="specialties-skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
          </ul>
        </Col>
        <Col>
          <h1 className="specialties-title">Back-end</h1>
          <p className="specialties-description">
            I have a passion for developing applications or improving existing
            ones. I also enjoy being up to date with all the new technologies.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Home;
