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
    );
  }
}

export default HallOfFame;
