
import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import NavBar from './components/Navbar';
import TextMaker from './components/lorem-ipsum';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CreateCard from "./components/card";
import Section from './components/Section';
import MakeContact from './components/makeContact';


function App() {
  return (
    <div className="App">
      <header >
      <NavBar />
      <HeroSection />
      </header>
      <main className="page-main">

      <Container>
        <div style={{ display:'flex' }} className="text-center">
          <CreateCard />
        </div>
    
       
          <Section/>
            <Row >
              <Col>
                <h2 className="text-center">Main Photo</h2>
                <Col>
                    <Image src="../images/building-in-london.jpeg" 
                    className="column" 
                    alt="" 
                    height="400px" 
                    width="100%" 
                    />
                    <div className="column">
                      <h3 text-align="center">Intro text</h3>
                      <TextMaker />
                    </div>
                </Col>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <h2>Next Section 2</h2>
                 <div className="item" >
                    <img
                    src="../images/pexels-photo-1106476.jpeg"
                    className="App-picture" 
                    alt="" 
                    height="300px" 
                    width="100%"
                    />
                    <div className="text-maker">
                    <TextMaker />
                    </div>
                  </div>
              </Col>

              <Col md={6}>
          <h2>Next Section 3</h2>
          <div className="item" >
            <div className="text-maker">
            
            </div>
            <img src="../images/pexels-photo-5292195.webp"
             className="App-picture" 
             alt=""
             height="300px" 
             width="100%"
             />
             <TextMaker />
          </div>
          </Col>
          <Section />
          <MakeContact />
          </Row>
        </Container>
       
      </main>
     
      <footer className='App-footer'>
          <Footer />  
      </footer>
   
      {/* container ends*/}
      </div>
     
  );
}

export default App;
