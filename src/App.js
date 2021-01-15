import React, { Component } from "react";

import Particles from 'react-particles-js';
import { Accordion, Button, ButtonGroup, ButtonToolbar, Card,
  Container, Nav, Navbar, Table } from 'react-bootstrap';
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
            { isMobile ?
              (<code style={{color:"black", fontSize:"2rem"}}>
                BadgerHacks
                </code>
              ) :
              (<code style={{color:"black", fontSize:"3rem"}}>
                BadgerHacks
                </code>
              )
            }
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-1" aria-label="First group">
                <Button className="top-btn-l"
                href="https://discord.com/invite/AGyyPVtpVX">
                  Discord
                </Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Third group">
                <Button className="top-btn-r"
                href="https://badgerhacks.devpost.com/">
                  Devpost
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </header>
        </div>

        {/* About Section */}
        <Container id="about">
          <h1>About</h1>
          <p>Badger Hacks is a hackathon that takes place from
          January 21st to January 23nd (2021). It is run entirely by students at
          the University of Wisconsin - Madison, and it is completely virtual.
          This means that regardless of where you are, as long as you have a
          submission that abides by our rules, you will be eligible for a
          prize.</p>
        </Container>

        {/* Schedule Section */}
        <Container id="schedule">
          <h1>Schedule</h1>
          <p>Please join our Discord server for all announcements and
          updates! (<a href="https://discord.com/invite/AGyyPVtpVX">
          https://discord.com/invite/AGyyPVtpVX</a>)</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Period</th>
                <th>Begins</th>
                <th>Ends</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Submissions</td>
                <td>January 21 at 6:00am CST</td>
                <td>January 23 at 11:45pm CST</td>
              </tr>
              <tr>
                <td>Judging</td>
                <td>January 24 at 12:15am CST</td>
                <td>January 25 at 12:00am CST</td>
              </tr>
              <tr>
                <td>Winners Announced</td>
                <td></td>
                <td>January 25 at 9:00am CST</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        {/* FAQ Section */}
        <Container id="faq">
          <h1>FAQ</h1>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="signupquestion">
                How do I sign up?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="signupquestion">
                <Card.Body>
                  Sign up by joining our Discord
                  (<a href="https://discord.com/invite/AGyyPVtpVX">
                  https://discord.com/invite/AGyyPVtpVX</a>) and
                  registering on our Devpost
                  (<a href="https://badgerhacks.devpost.com/">
                  https://badgerhacks.devpost.com/</a>).
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="about">
                What can I make?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="about">
                <Card.Body>
                  Participants can make anything they want. Prizes will be
                  given to the most creative and unique projects.
                  The only restriction is that projects must be created
                  during the Hackathon time period
                  (refer to the above schedule).
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="teamwork">
                Is teamwork allowed?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="teamwork">
                <Card.Body>
                  Yes! We highly encourage teamwork. Participants
                  may work alone or in teams of up to 4 people. The
                  "group-search" channel on our Discord server can help you
                  find teammates.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="donotknow">
                Is it fine if I do not know how to code?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="donotknow">
                <Card.Body>
                  Absolutely. Everyone is welcome to participate in this
                  Hackathon and we will be posting useful resources under
                  the "resources" channel of our Discord server. These
                  resources will be handpicked from our team who has
                  developed many full stack web and phone applications. We
                  will divide these resources by beginner, intermediate,
                  and advanced.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="assistance">
                Will beginner programmers receive assistance?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="assistance">
                <Card.Body>
                  Indeed! Please post all debugging questions under the
                  "debugging" channel of our Discord server. We will try our
                  best to answer as many questions as possible.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="externalresources">
                Can code from external resources be used?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="externalresources">
                <Card.Body>
                  If credit is given through code comments and the code is not
                  under copyright restrictions, using code from external
                  resources is fine.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="submission">
                How do I submit my project?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="submission">
                <Card.Body>
                  Submit projects by uploading them to our Devpost
                  (<a href="https://badgerhacks.devpost.com/">
                  https://badgerhacks.devpost.com/</a>). Source code and a
                  video under 5 minutes are required in order for a project
                  to be valid. The submission deadline is included in the
                  schedule above
                  (<a href="https://badgerhacks.github.io/#schedule">
                  https://badgerhacks.github.io/#schedule</a>).
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="sourcecode">
                How do I submit my source code?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="sourcecode">
                <Card.Body>
                  Source code for the project should be linked in the Devpost
                  submission. Pushing source code to GitHub is preferred, but
                  participants may upload their code as a zip file to other
                  places like Google Drive or Dropbox if that is easier for
                  them.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <h4 className="other-questions">Other Questions?</h4>
          <p>Please email / contact us at <a
              href="mailto:badgerhacks@gmail.com"> badgerhacks@gmail.com
          </a>
          </p>
        </Container>

        {/* Sponsors Section */}
        <Container id="rules">
          <h1>Rules</h1>
          <ul>
            <li>
            <p>Participants can make anything they want.
            Prizes will be given to the most creative and unique projects.
            The only restriction is that projects must be created during the
            Hackathon (between January 21th to January 23rd).</p>
            </li>
            <li>
            <p>Participants may work alone or in teams of up to 4 people.
            The "group-search" channel on our Discord server can help you find
            teammates.</p>
            </li>
            <li>
            <p>If credit is given through code comments and the code is not
            under copyright restrictions, using code from external resources
            is fine.</p>
            </li>
            <li>
            <p>This hackathon is open to everyone ages 18 and older,
            regardless of whether you are in College, and regardless of
            what College you attend.</p>
            </li>
          </ul>
        </Container>

        {/* Prizes Section */}
        <Container id="prizes">
          <h1>Prizes</h1>
          <p>TBA</p>
        </Container>

        {/* Sponsors Section */}
        <Container id="sponsors">
          <h1>Sponsors</h1>
          <p>TBA</p>
        </Container>

        {/* Footer */}
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Nav className="mr-auto">
              Copyright © BadgerHacks 2020
            </Nav>
            <Nav className="ml-auto">
              <a href="https://github.com/badgerhacks/badgerhacks.github.io">
                Source Code
              </a>
            </Nav>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default App;
