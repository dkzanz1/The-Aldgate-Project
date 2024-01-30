import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TextMaker from './lorem-ipsum';
import buildingImage from './building-in-london.jpeg';


const Section = () => {
    return (
        <>
            <div className='jumbotron text-center'>
            <h2>Section component</h2>
            </div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    {/* Image on the left, text on the right (medium and larger screens) */}
                        <Col md={8} className='order-md-1'>
                            <Image 
                                src={buildingImage} 
                                alt="Responsive"
                                fluid
                                // height="50vh"
                                width="500vw"
                              
                            />
                        </Col>
                        {/* text column */}
                        <Col md={4} className="order-md-2">
                            <div className='text-center'>
                                <h3 >Intro text</h3>
                                <TextMaker />
                            </div>
                        </Col>
                </Row>
            </Container >
        </>
    );
};

export default Section;