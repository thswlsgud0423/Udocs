import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.css";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Course Review</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="mycourse.tsx">My Courses</Nav.Link>
              <NavDropdown title="Studies" id="studies-dropdown">
                <NavDropdown.Item href="cs.tsx">CS</NavDropdown.Item>
                <NavDropdown.Item href="ai.tsx">AI</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item href="aboutjku.tsx">About JKU</NavDropdown.Item>
                <NavDropdown.Item href="aboutus.tsx">About Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.tsx">Contact</Nav.Link>
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

      {/* Main Content */}
      <div className="content mt-5 pt-5">
        <h1>We going to da MOON</h1>
      </div>
    </>
  );
};

export default Homepage;
