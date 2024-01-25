import React from "react";
import { Container, Row, Col, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "./logo";
//created using react-strap
function NavBar() {
    return<>
    {/* styled with bootstrap */}
    <Container>
        <Row className="justify-content-between">
            <Col>
                <Logo />
            </Col>
            <Col>
                <Nav className="justify-content-end">
                  
                <Nav.Item>                             
                        <Nav.Link  href="/">Contact</Nav.Link>
                </Nav.Item> 
                <NavDropdown title="About us" id="basic-nav-dropdown">
                          
                    <NavDropdown.Item href="/">Action</NavDropdown.Item> 
                    <NavDropdown.Item href="/">Next Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Separate Action</NavDropdown.Item>
                </NavDropdown>
                       <Nav.Item>                           
                        <Nav.Link href="/">Projects</Nav.Link>
                        </Nav.Item> 
                      
                    
                        <Button className="make-contact-btn">Get in Touch</Button>
    
                     </Nav>
            </Col>
        </Row>
    </Container>
   
    
    </> 
    }

export default NavBar;