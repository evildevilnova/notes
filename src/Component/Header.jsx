// import { createGenerateClassName } from '@material-ui/core';
import React from 'react';
import logo from '../Images/notes.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Notes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/notes">Home</Nav.Link>
              <Nav.Link href="https://evildevilnova.github.io/portfolio-project/">About</Nav.Link>
              <Nav.Link href="https://github.com/evildevilnova/notes">Code</Nav.Link>
              <Nav.Link href="/notes/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
