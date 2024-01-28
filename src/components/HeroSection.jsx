import React from "react";
import { Container, Col, Row, Button} from "react-bootstrap";
import HeroBackground from './pexels-photo-2762553.jpeg' 

const HeroSection = () => {
    return (
        <div
            className="hero-section"
            style={{ backgroundImage: `url(${HeroBackground})`, 
            height: '50vh', // Set the height to 50% of the viewport height
            width: '100%', // Set the width to 100% of the viewport width
            backgroundSize: 'cover',
            backgroundRepeat: 'no repeat',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            textAlign: "center",
            color: "white",
    }}
        >
        <Container fluid >
            <Row>
                <Col>
                    <h2>Setting the standard</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Specialist in the design and install of High risers and sprinkler systems</h3>
                </Col>
            </Row>  
            <Button variant="outline-light style={{ opacity: 0.7 }}">Call to action</Button>
            
        </Container>
        </div>
    );
};

export default HeroSection;


