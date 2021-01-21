import React, { Component } from "react";

import Particles from 'react-particles-js';
import { Accordion, Button, ButtonGroup, ButtonToolbar, Card,
  Col, Container, Image, Nav, Navbar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-scroll';

import {isMobile} from 'react-device-detect';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logos/logo.png';
import small_logo from './logos/small-logo.png';

import first_icon from './icons/icons8-1st-place-medal-96.png';
import second_icon from './icons/icons8-2nd-place-medal-96.png';
import third_icon from './icons/icons8-3rd-place-medal-96.png';

import aberdean_logo from './logos/aberdean_logo_RGB.png';
import implicit_logo from './logos/logo_name_large_transparent.png';
import fetch_logo from './logos/Fetch_Rewards_Horizontal_Logo_transparent.png';
import understory_logo from './logos/Understory_Logo-Primary-Horizontal.png';

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
          January 21st to January 23rd (2021). It is run entirely by students at
          the University of Wisconsin - Madison (UW-Madison), and it is
          completely virtual.
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
                  find teammates. Participants may also work solo
                  if they prefer that.
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
              <Accordion.Toggle as={Card.Header} eventKey="devpostquestion">
                Does every teammate need a Devpost account?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="devpostquestion">
                <Card.Body>
                  Yes, every teammate should have a Devpost account. BUT, only
                  one person should submit the project on Devpost. When
                  submitting a project, Devpost will allow you to add
                  teammates, so the project will also be linked to their
                  accounts.
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
                  YouTube video under 5 minutes are required in order for
                  a project to be valid. The submission deadline is
                  included in the schedule above
                  (<a href="https://badgerhacks.github.io/#schedule">
                  https://badgerhacks.github.io/#schedule</a>). Only one
                  submission should be made per team.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="vidsub">
                What should my YouTube video contain?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="vidsub">
                <Card.Body>
                  Videos are intended to be demos of the invention. You can
                  include anything you want (voice overs, explaining code,
                    etc.) but those are all optional. The nicer the
                    presentation of your innovation is, the more likely you
                    are to win a prize (since presentation is one of the
                    judging criteria). These projects can also go on your
                    resume if you’re planning to apply for jobs or
                    internships in the future, so we suggest making decent
                    videos. Max time for a video is 5 minutes.
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
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="judgingcrit">
                What is the judging criteria?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="judgingcrit">
                <Card.Body>
                  <strong>Creativity and Uniqueness</strong>
                  <p>
                    Projects will be judged based off creativity and
                    uniqueness. The novelty of ideas matters, more creative
                    ideas do better here, but the execution of the idea
                    matters too. See the Presentation category for
                    information about this.
                  </p>
                  <strong>Presentation</strong>
                  <p>
                    How polished does your idea look in your
                    presentation? Was it well-implemented? Are there any
                    obvious flaws or glitches?
                  </p>
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
            The only restriction is that <strong>projects must be created
            during the Hackathon (between January 21st to
             January 23rd).</strong></p>
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
            <li>
            <p><strong>Any submission violating the UW Madison Code of Conduct or
            any submission deemed as inappropriate by our team will
            be removed.</strong></p>
            </li>
          </ul>
        </Container>

        {/* Prizes Section */}
        <Container id="prizes">
          <h1>Prizes</h1>
          <Container>
            <Row>
              <Col>
                <div>
                  <h3>
                    <img className="placeIcon" src={first_icon} alt="first"/>
                    First Place
                  </h3>
                </div>
                <p>$500 to be split among participants. Awarded to
                participants that worked on the best project according
                to our judging criteria.</p>
              </Col>
              <Col>
                <div>
                  <h3>
                    <img className="placeIcon" src={second_icon} alt="second"/>
                    Second Place
                  </h3>
                </div>
                <p>$400 to be split among participants. Awarded to
                participants that worked on the second best project
                according to our judging criteria.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <h3>
                    <img className="placeIcon" src={third_icon} alt="third"/>
                    Third Place
                  </h3>
                </div>
                <p>$300 to be split among participants. Awarded to
                participants that worked on the third best project
                according to our judging criteria.</p>
              </Col>
              <Col>
                <div>
                  <h3>
                    Fourth Place
                  </h3>
                </div>
                <p>$200 to be split among participants. Awarded to
                participants that worked on the fourth best project
                according to our judging criteria.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <h3>
                    Fifth Place
                  </h3>
                </div>
                <p>$138 to be split among participants. Awarded to
                participants that worked on the fifth best project
                according to our judging criteria.</p>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* Hall of Fame Section */}
        <Container id="hall_of_fame">
          <Container>
            <Row>
              <Col align="center">
                <h2 style={{marginTop: "2rem"}} className="hof_year"
                href="https://badgerhacks.devpost.com/project-gallery">
                  Spring 2021 Winners
                </h2>
              </Col>
            </Row>
            <Row>
              <Col align="center">
                <Card border="warning" style={{ width: '75%' }}>
                  <Card.Header>
                    <h3>1st</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>TBA</Card.Title>
                    <Card.Text>
                    {
                      /*
                      <iframe title="first_place" width="100%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/zuOUN-VSI40"
                        frameborder="0"
                        allow={"accelerometer; autoplay; clipboard-write;"+
                        "encrypted-media; gyroscope; picture-in-picture"}
                        allowfullscreen>
                      </iframe>
                      */
                    }
                    </Card.Text>
                    {
                      /*
                      <Button className="top-btn-l full-width"
                      href="https://badgerhacks.devpost.com/project-gallery">
                        View Project
                      </Button>
                      */
                    }
                  </Card.Body>
                </Card>
                <Image/>
              </Col>
            </Row>
            <Row>
              <Col align="center">
                <Card border="primary" style={{ width: '100%' }}>
                  <Card.Header>
                    <h3>2nd</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>TBA</Card.Title>
                    <Card.Text>
                    {
                      /*
                      <iframe title="first_place" width="100%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/zuOUN-VSI40"
                        frameborder="0"
                        allow={"accelerometer; autoplay; clipboard-write;"+
                        "encrypted-media; gyroscope; picture-in-picture"}
                        allowfullscreen>
                      </iframe>
                      */
                    }
                    </Card.Text>
                    {
                      /*
                      <Button className="top-btn-l full-width"
                      href="https://badgerhacks.devpost.com/project-gallery">
                        View Project
                      </Button>
                      */
                    }
                  </Card.Body>
                </Card>
                <Image/>
              </Col>
              <Col align="center">
                <Card border="primary" style={{ width: '100%' }}>
                  <Card.Header>
                    <h3>3rd</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>TBA</Card.Title>
                    <Card.Text>
                    {
                      /*
                      <iframe title="first_place" width="100%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/zuOUN-VSI40"
                        frameborder="0"
                        allow={"accelerometer; autoplay; clipboard-write;"+
                        "encrypted-media; gyroscope; picture-in-picture"}
                        allowfullscreen>
                      </iframe>
                      */
                    }
                    </Card.Text>
                    {
                      /*
                      <Button className="top-btn-l full-width"
                      href="https://badgerhacks.devpost.com/project-gallery">
                        View Project
                      </Button>
                      */
                    }
                  </Card.Body>
                </Card>
                <Image/>
              </Col>
            </Row>
            <Row>
              <Col align="center">
                <Card border="secondary" style={{ width: '100%' }}>
                  <Card.Header>
                    <h3>4th</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>TBA</Card.Title>
                    <Card.Text>
                    {
                      /*
                      <iframe title="first_place" width="100%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/zuOUN-VSI40"
                        frameborder="0"
                        allow={"accelerometer; autoplay; clipboard-write;"+
                        "encrypted-media; gyroscope; picture-in-picture"}
                        allowfullscreen>
                      </iframe>
                      */
                    }
                    </Card.Text>
                    {
                      /*
                      <Button className="top-btn-l full-width"
                      href="https://badgerhacks.devpost.com/project-gallery">
                        View Project
                      </Button>
                      */
                    }
                  </Card.Body>
                </Card>
                <Image/>
              </Col>
              <Col align="center">
                <Card border="secondary" style={{ width: '100%'}}>
                  <Card.Header>
                    <h3>5th</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>TBA</Card.Title>
                    <Card.Text>
                    {
                      /*
                      <iframe title="first_place" width="100%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/zuOUN-VSI40"
                        frameborder="0"
                        allow={"accelerometer; autoplay; clipboard-write;"+
                        "encrypted-media; gyroscope; picture-in-picture"}
                        allowfullscreen>
                      </iframe>
                      */
                    }
                    </Card.Text>
                    {
                      /*
                      <Button className="top-btn-l full-width"
                      href="https://badgerhacks.devpost.com/project-gallery">
                        View Project
                      </Button>
                      */
                    }
                  </Card.Body>
                </Card>
                <Image/>
              </Col>
            </Row>
            <Row>
              <Col align="center">
                <Button style={{marginBottom:"1rem"}} className="top-btn-r"
                href="https://badgerhacks.devpost.com/project-gallery">
                  View All Projects
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* Sponsors Section */}
        <Container id="sponsors">
          <h1>Sponsors</h1>
          <Container>
            <Row>
              <Col>
                <a href="https://www.aberdean.com/">
                  <Image src={aberdean_logo} alt="aberdean" fluid/>
                </a>
              </Col>
              <Col>
                <a href="https://implicittech.com/">
                  <Image src={implicit_logo} alt="implicit" fluid/>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://www.fetchrewards.com/">
                  <Image src={fetch_logo} alt="fetchrewards" fluid/>
                </a>
              </Col>
              <Col>
                <a href="https://understoryweather.com/">
                  <Image src={understory_logo} alt="understory" fluid/>
                </a>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* Footer */}
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

      </div>
    );
  }
}

export default App;
