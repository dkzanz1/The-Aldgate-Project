import React from "react";
// import "../App.css";
import {Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fontawesome/free-brands-svg-icons'; 




function Footer() {
    return<>
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-4">
            <Col className="p-0" md={4} sm={12}>
                Aldgate
                <h5>About us</h5>
                <p>LOREM IPSUM SDWGERGREGFGGDG</p>
            </Col>
            <div className="social-icons">
                <a href="http//Facebook.com">< FontAwesomeIcon icon={faFacebook}/></a>
                <a href="http//Twitter.com">< FontAwesomeIcon icon={ faTwitter}/></a>
                <a href="http//Instagram.com">< FontAwesomeIcon icon={faInstagram}/></a>
                <a href="http//Linkedin.com">< FontAwesomeIcon icon={faLinkedin}/></a>
            
            </div>
            <Col>
                <h3>Copycat 2023</h3>
                <h4>Call us direct <a href="tel:+44 123-456-789">123-456-789</a></h4>
            </Col>
          </Row>
        </Container>
       </footer>
      </>
    }
export default Footer;