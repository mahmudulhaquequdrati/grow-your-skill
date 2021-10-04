// import { Button } from "react-bootstrap";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="nav-bg" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 align-items-center ."
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <img className="logo" src={img} alt="logo" />
            </Link>
            <Link className="header-nav" to="/">
              Home
            </Link>
            <Link className="header-nav" to="/about">
              About
            </Link>
            <Link className="header-nav" to="/services">
              Services
            </Link>
            <Link className="header-nav" to="/contact-us">
              Contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
