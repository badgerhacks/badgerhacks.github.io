import Particles from 'react-particles-js';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png';
import small_logo from './small-logo.png';

import './App.css';

function App() {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={small_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BadgerHacks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#prizes">Prizes</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <code style={{color:"black", fontSize:"3rem"}}>BadgerHacks</code>
        </header>
      </div>

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

export default App;
