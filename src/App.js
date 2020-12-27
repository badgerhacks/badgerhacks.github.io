import React, { Component } from "react";
import Particles from 'react-particles-js';
import { Button, ButtonGroup, ButtonToolbar, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {isMobile} from 'react-device-detect';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png';
import small_logo from './small-logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        {/* Navbar */}
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

                <Link className="nav-link" to="prizes" activeClass="active"
                spy={true} smooth={true}>
                    Prizes
                </Link>

                <Link className="nav-link" to="faq" activeClass="active"
                spy={true} smooth={true}>
                    FAQ
                </Link>

                <Link className="nav-link" to="sponsors" activeClass="active"
                spy={true} smooth={true}>
                    Sponsors
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Particles Effect */}
        <Particles
          style={{ position: "absolute" }}
          height="100%"
          width="100%"
          params={{
            particles: {
              color: {
                value: "#9b0000"
              },
              line_linked: {
                color: {
                  value: "#c5050c"
                }
              },
              number: {
                value: isMobile ? 15 : 50
              },
              size: {
                value: 3
              }
            }
          }}>
        </Particles>

        {/* Logo and Buttons at Top */}
        <div className="App" id="home">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <code style={{color:"black", fontSize:"3rem"}}>BadgerHacks</code>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-1" aria-label="First group">
                <Button className="top-btn-l" href="https://google.com">
                  Discord
                </Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Third group">
                <Button className="top-btn-r" href="https://google.com">
                  Devpost
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </header>
        </div>

        {/* About Section */}
        <Container id="about">
          <h1>About</h1>
          <p>TBA</p>
        </Container>

        {/* Schedule Section */}
        <Container id="schedule">
          <h1>Schedule</h1>
          <p>TBA</p>
        </Container>

        {/* Prizes Section */}
        <Container id="prizes">
          <h1>Prizes</h1>
          <p>TBA</p>
        </Container>

        {/* FAQ Section */}
        <Container id="faq">
          <h1>FAQ</h1>
          <p>TBA</p>
        </Container>

        {/* Sponsors Section */}
        <Container id="sponsors">
          <h1>Sponsors</h1>
          <p>TBA</p>
        </Container>

        {/* Footer */}
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="mr-auto">
              Copyright © BadgerHacks 2020
            </Nav>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default App;
