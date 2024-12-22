import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.css";
import {Link} from "react-router"

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Course Review</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="mycourse">My Courses</Nav.Link>
              <NavDropdown title="Studies" id="studies-dropdown">
                <NavDropdown.Item href="cshome">CS</NavDropdown.Item>
                <NavDropdown.Item > <Link to="/aihome">AI</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item href="aboutjku">About JKU</NavDropdown.Item>
                <NavDropdown.Item href="aboutus">About Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for a course..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;



