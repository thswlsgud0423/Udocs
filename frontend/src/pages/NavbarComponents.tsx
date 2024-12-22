import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent: React.FC = () => {
  return (
    <>
        {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Course Review</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {/* Home */}

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>.


              {/* My courses */}

              <Nav.Link as={Link} to="/mycourse">
                My Courses
              </Nav.Link>


              {/* Studies */}

              <NavDropdown title="Studies" id="studies-dropdown">
                <NavDropdown.Item as={Link} to="/aihome">
                  AI
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cshome">
                  CS
                </NavDropdown.Item>
              </NavDropdown>


              {/* About */}

              <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item as={Link} to="/aboutjku">
                  AboutJKU
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aboutus">
                  AboutUs
                </NavDropdown.Item>
              </NavDropdown>

              {/* Contact */}
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

            </Nav>

            {/* Search Engine */}

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
    </>
  );
};

export default NavbarComponent;
