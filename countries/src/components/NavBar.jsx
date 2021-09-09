import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => (
  <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Country Information</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">By Name</Nav.Link>
          <Nav.Link href="#features">By Language</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
