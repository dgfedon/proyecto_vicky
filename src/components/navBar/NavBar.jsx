import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';

import './navbar.css';

function NavBar() {
    return (
        <div className="container-navbar">
            <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className="bg-navbar">
                <Container>
                    <Navbar.Brand href="/" className="text-decoration-underline">Victoria Argarañaz</Navbar.Brand>
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
            <Navbar style={{minHeight: '10vh'}} />
        </div>
    )
}

export default NavBar;