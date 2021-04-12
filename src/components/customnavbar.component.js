import React, { Component } from "react";

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

import small_logo from '../logos/small-logo.png';

class CustomNavbar extends Component {
  render() { 
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"
      fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={small_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <Link className="brand-text" to="home" activeClass="active"
            spy={true} smooth={true}>
                BadgerHacks
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="about" activeClass="active"
              spy={true} smooth={true}>
                  About
              </Link>

              <Link className="nav-link" to="schedule" activeClass="active"
              spy={true} smooth={true}>
                  Schedule
              </Link>

              <Link className="nav-link" to="faq" activeClass="active"
              spy={true} smooth={true}>
                  FAQ
              </Link>

              <Link className="nav-link" to="rules" activeClass="active"
              spy={true} smooth={true}>
                  Rules
              </Link>

              <Link className="nav-link" to="prizes" activeClass="active"
              spy={true} smooth={true}>
                  Prizes
              </Link>

              <Link className="nav-link" to="team" activeClass="active"
              spy={true} smooth={true}>
                  Team
              </Link>

              <Link className="nav-link" to="hall_of_fame"
              activeClass="active" spy={true} smooth={true}>
                  Hall of Fame
              </Link>

              <Link className="nav-link" to="sponsors" activeClass="active"
              spy={true} smooth={true}>
                  Sponsors
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
