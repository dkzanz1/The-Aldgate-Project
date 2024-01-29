import React from "react";
import {  Carousel } from 'react-bootstrap';


function GalleryCarousel() {
    return<>
    <Carousel>
    <h1>Gallery</h1>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="images/pexels-photo-1106476.jpeg"
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>gbfghfghfnmmmgmgmgmm</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="images/pexels-photo-1502941 (1).jpeg"
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>gbfghfghfnmmmgmgmgmm</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="images/pexels-photo-7642088.jpeg"
          alt="Third Slide" 
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>gbfghfghfnmmmgmgmgmm</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         
         </>   

    }

export default GalleryCarousel;