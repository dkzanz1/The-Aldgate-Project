import React from "react";
import {Container, Carousel, Row, Col}  from 'react-bootstrap';


function GalleryCarousel() {
    return <>
    <Container>
      <h1>Gallery</h1>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="images/pexels-photo-1106476.jpeg"
                    alt="First slide" 
                    height ="400"
                    width="200"
                  />
                  <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>gbfghfghfnmmmgmgmgmm</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src="images/pexels-photo-1502941 (1).jpeg"
                  alt="Second slide" 
                  height ="400"
                  width="200"
                />
                <Carousel.Caption>
                  <h3>Second Slide Label</h3>
                  <p>gbfghfghfnmmmgmgmgmm</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src="images/pexels-photo-7642088.jpeg"
                  alt="Third Slide" 
                  height ="400"
                  width="200"
                />
                <Carousel.Caption>
                  <h3>Third Slide Label</h3>
                  <p>gbfghfghfnmmmgmgmgmm</p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    </> 
  }

export default GalleryCarousel;
