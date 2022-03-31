import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';

import './navbar.css';

function NavBar() {
    return (
        <div className="container-navbar">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Victoria Argarañaz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#container-about">Sobre mí</Nav.Link>
                            <Nav.Link href="#container-portfolio">Portafolio</Nav.Link>
                            <Nav.Link href="#container-footer">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar style={{height: '10vh'}} />
        </div>
    )
}

export default NavBar;