import React from "react";
import { Container, Col, Row, Button} from "react-bootstrap";
import HeroBackground from './city.jpeg' 
// created using react-bootstrap
const HeroSection = () => {
    return (
        <div
            className="hero-section"
            style={{
            backgroundImage: `url(${HeroBackground})`, 
            height: '50vh', // Set the height to 50% of the viewport height
            width: '80%', // Set the width to 80% of the viewport width
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            textAlign: "center",
            color: "gold"
    }}
    >
        <Container >
            <Row className="justify-content-center align-items-center"  >
                <Col>
                    <h2>Setting the standard</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Specialist in the design and install of High risers and sprinkler systems</h3>
                </Col>
            </Row>  
            <Button variant="outline-light style={{ opacity: 1.9 }}">Call to action</Button>
            
        </Container>
        </div>
    );
};

export default HeroSection;


