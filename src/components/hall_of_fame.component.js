import React, { Component } from "react";

import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

class HallOfFame extends Component {
  render() {
    return(
      <Container id="hall_of_fame">
        <h1 style={{marginTop: "2rem"}}>Hall of Fame</h1>
        <Container>
          <Row>
            <Col align="center">
              <h2 className="hof_year"
              href="https://badgerhacks.devpost.com/project-gallery">
                Spring 2021 Winners
              </h2>
            </Col>
          </Row>
          <Row>
            <Col align="center">
              <Card className="winner-card" border="warning">
                <Card.Header>
                  <h3>1st</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h2>Carbon AI</h2>
                  </Card.Title>
                  <Card.Text>
                  {
                    <iframe title="first" className="project-video"
                    src="https://www.youtube.com/embed/uxYWSqN529c"
                    frameborder="0" allow={"accelerometer; autoplay;"+
                    "clipboard-write; encrypted-media; gyroscope;"+
                    "picture-in-picture"} allowfullscreen></iframe>
                  }
                  </Card.Text>
                  {
                    <Button className="top-btn-l full-width"
                    href="https://devpost.com/software/carbonai">
                      View Project
                    </Button>
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
                  <Card.Title>
                    <h2>SlideSpeak</h2>
                  </Card.Title>
                  <Card.Text>
                  {
                    <iframe title="second" className="project-video-lesser"
                    src="https://www.youtube.com/embed/b_5JbFkE710"
                    frameborder="0" allow={"accelerometer; autoplay;"+
                    "clipboard-write; encrypted-media; gyroscope;"+
                    "picture-in-picture"} allowfullscreen></iframe>
                  }
                  </Card.Text>
                  {
                    <Button className="top-btn-l full-width"
                    href="https://devpost.com/software/slidespeak">
                      View Project
                    </Button>
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
                  <Card.Title>
                    <h2>CryptoSense</h2>
                  </Card.Title>
                  <Card.Text>
                  {
                    <iframe title="third" className="project-video-lesser"
                    src="https://www.youtube.com/embed/Q62o8PcgLgU"
                    frameborder="0" allow={"accelerometer; autoplay;"+
                    "clipboard-write; encrypted-media; gyroscope;"+
                    "picture-in-picture"} allowfullscreen></iframe>
                  }
                  </Card.Text>
                  {
                    <Button className="top-btn-l full-width"
                    href="https://devpost.com/software/cryptosense">
                      View Project
                    </Button>
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
                  <Card.Title>
                    <h2>PDGlint</h2>
                  </Card.Title>
                  <Card.Text>
                  {
                    <iframe title="fourth" className="project-video-lesser"
                    src="https://www.youtube.com/embed/1DllnrUZzgs"
                    frameborder="0" allow={"accelerometer; autoplay;"+
                    "clipboard-write; encrypted-media; gyroscope;"+
                    "picture-in-picture"} allowfullscreen></iframe>
                  }
                  </Card.Text>
                  {
                    <Button className="top-btn-l full-width"
                    href="https://devpost.com/software/pdglint">
                      View Project
                    </Button>
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
                  <Card.Title>
                    <h2>Image2Audio</h2>
                  </Card.Title>
                  <Card.Text>
                  {
                    <iframe title="fourth" className="project-video-lesser"
                    src="https://www.youtube.com/embed/1Ip8_ODxfQc"
                    frameborder="0" allow={"accelerometer; autoplay;"+
                    "clipboard-write; encrypted-media; gyroscope;"+
                    "picture-in-picture"} allowfullscreen></iframe>
                  }
                  </Card.Text>
                  {
                    <Button className="top-btn-l full-width"
                    href="https://devpost.com/software/image2audio">
                      View Project
                    </Button>
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
    );
  }
}

export default HallOfFame;
