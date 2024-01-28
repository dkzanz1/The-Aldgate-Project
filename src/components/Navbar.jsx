import React from "react";
import { Container, Nav, NavDropdown, Button, Navbar} from "react-bootstrap";
import Logo from "./logo";

function NavBar() {
    return<>
    {/* styled with react-bootstrap;:- It allows you to use Bootstrap's components directly within your React application without the need for jQuery or Bootstrap's own JavaScript*/}
    <Navbar expand="lg" bg="light" >
        <Container>
            <Navbar.Brand href="#home">
                <Logo />
                <h1>Aldgate Fire</h1>
            </Navbar.Brand>    
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end" >
                    <Nav className="ml-auto">
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
                        <Button variant="outline-primary">Get in Touch</Button>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    
    </> 
    }

export default NavBar;