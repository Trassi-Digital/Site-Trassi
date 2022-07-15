import React from "react";
import "./Footer.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const logoTrassi = require.context("../../assets/logo", true);

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col>
           <Card.Link href="#basic-navbar-nav">
            <Col className="footer-img text-center">
             <Card.Img className="footer-img" src={logoTrassi(`./trassi-c.png`)} />
            </Col>
            </Card.Link>
          </Col>
           <Col className= "social-media">
             <Card.Link className= "social-media text-center" href="https://www.linkedin.com/company/trassidigital/">
              <FontAwesomeIcon className= "social-media" icon={faLinkedin} /> {" "}
            </Card.Link >
            <Card.Link  className= "social-media text-center" href="https://www.linkedin.com/company/trassidigital/">
              <FontAwesomeIcon icon={faGithub} /> {" "}
            </Card.Link >
           </Col>
         <Col className="footer-copy text-center">2022©Trassi-Digital reserved</Col>
        </Row>
      </Container>
   
    </footer>
  );
};

export default Footer;
