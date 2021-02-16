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
          <Row>
            <Col>
              <p className="specialties-skills">Design Skills</p>
              <ul className="specialties-skills-list">
                <li>UX</li>
                <li>UI</li>
                <li>Responsive Design</li>
              </ul>
            </Col>
            <Col>
              <p className="specialties-skills">Tools</p>
              <ul className="specialties-skills-list">
                <li>Photoshop</li>
                <li>Balsamiq</li>
                <li>Pen & Paper</li>
              </ul>
            </Col>
          </Row>
        </Col>
        {/* Frontend Col */}
        <Col>
          <h1 className="specialties-title">Front-end</h1>
          <p className="specialties-description">
            I like to design and code things from scratch. I enjoy bringing my
            ideas to life in the browser.
          </p>
          <Row>
            <Col>
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
              <p className="specialties-skills">Tools</p>
              <ul className="specialties-skills-list">
                <li>Bootstrap 3/4</li>
                <li>Git/Github/Gitlab</li>
                <li>Git Bash</li>
              </ul>
            </Col>
          </Row>
        </Col>
        {/* Backend Col */}
        <Col>
          <h1 className="specialties-title">Back-end</h1>
          <p className="specialties-description">
            I have a passion for developing applications or improving existing
            ones.
          </p>
          <Row>
            <Col>
              <p className="specialties-skills">Skills</p>
              <ul className="specialties-skills-list">
                <li>Express</li>
                <li>Sequelize</li>
                <li>NodeJS</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </Col>
            <Col>
              <p className="specialties-skills">Tools</p>
              <ul className="specialties-skills-list">
                <li>MySQL</li>
                <li>SendGrid</li>
                <li>Postman</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
