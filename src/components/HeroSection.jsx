import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import HeroBackground from './city.jpeg' 
// created using react-bootstrap
const HeroSection = () => {
    return (
        <div
            className="hero-section" 
            style={{
            backgroundImage: `url(${HeroBackground})`, 
            height: '30vh', // Set the height to 50% of the viewport height
            width: '80%', // Set the width to 80% of the viewport width
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: '10px 10%',
            
          
    // display-flexD-justify C *+&text align work together
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: "center",
            textAlign: "center",
            color: "gold"
    }}
    >
        <Container  >
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={6}>{/* Adjust the column size as per your requirement */}
                    <h2>Setting the standard</h2>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col xs="auto">
                    <h3>Specialist in the design and install of High risers and sprinkler systems</h3>
                </Col>
            </Row>  
            <Button variant="outline-light style={{ opacity: 1.9 }}">Call to action</Button>
            
        </Container>
        </div>
    );
};

export default HeroSection;


