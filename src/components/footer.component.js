import React, { Component } from "react";

import { Container, Nav, Navbar } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return(
      <Navbar style={{marginTop:"2rem"}} bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav style={{color:"white"}} className="mr-auto">
            Copyright © BadgerHacks 2020
          </Nav>
          <Nav className="ml-auto">
            <a style={{color:"white"}}
            href="https://github.com/badgerhacks/badgerhacks.github.io">
              Source Code
            </a>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
