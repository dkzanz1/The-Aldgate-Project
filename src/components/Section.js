import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TextMaker from './lorem-ipsum';
import buildingImage from './building-in-london.jpeg';




const Section = () => {
    return (
        <>
            <div>
            <h2>Section component</h2>
            </div>
            <Container>
                <Row className="justify-content-center align-items-center">
                    {/* Image on the left, text on the right (medium and larger screens) */}
                        <Col md={6} className='mb-4 mb-md-0'>
                            <Image 
                                src={buildingImage} 
                                alt="Responsive"
                                fluid
                                // height="50vh"
                                width="100%"
                            />
                        </Col>
                        {/* text column */}
                        <Col md={6}>
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