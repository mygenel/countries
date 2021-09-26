import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => (
  <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Country Information</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/name">By Name</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
