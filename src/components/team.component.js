import React, { Component } from "react";

import { Card, Col, Container, Image, Row } from "react-bootstrap";

import deepak_profile from "../team_images/deepak_ramalingam.jpeg";
import pranav_profile from "../team_images/pranav_kumar.jpeg";
import stanley_profile from "../team_images/stanley_tzeng.jpeg";
import dhananjayan_profile from "../team_images/dhananjayan_p_n.jpeg";
import eric_profile from "../team_images/eric_hewitt.jpeg";
import scott_profile from "../team_images/scott_rose.jpeg";

class Team extends Component {
  render() {
    return (
      <Container id="team"> 
        <h1>Team</h1>
        <Container fluid>
          {/* Founders Row */}
          <Row>
            {/* Deepak */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Co-Founder</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={deepak_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Deepak Ramalingam</Card.Title>
                  <Card.Text>
                    Deepak Ramalingam is a Software Developer at a
                    PeeblesTech LLC, a local startup company in Madison,
                    and an incoming Augmented Reality Engineering Intern at
                    TikTok (US). He is a full-stack developer and utilizes his
                    Computer Science knowledge to solve real world problems
                    in the fields of education, business, health care, and
                    emergency preparedness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Pranav */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Co-Founder</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={pranav_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Pranav Kumar</Card.Title>
                  <Card.Text>
                    Pranav Kumar is a freshman at the University of
                    Wisconsin-Madison. Pranav is an avid coder, proficient
                    in JAVA, C++, and Python. He enjoys Android development
                    and following new advances in CS. Outside of Computer
                    Science, Pranav plays badminton both recreationally and
                    competitively and enjoys trying new foods.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Stanley */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Co-Founder</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={stanley_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Stanley Tzeng</Card.Title>
                  <Card.Text>
                    Stanley Tzeng is a freshman at the University of
                    Wisconsin-Madison. Stanley is fluent in java and
                    python. He is an aspiring software engineer and has
                    dabbled with data science and mobile app
                    development. Some of his other interests are biking,
                    fishing, and basketball.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/*Other Row*/}
          <Row>
            {/* Dhananjayan */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Mentor & Judge</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={dhananjayan_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Dhananjayan P N</Card.Title>
                  <Card.Text>
                    Dhananjayan P N is a freshman at the University of
                    Wisconsin-Madison. He loves developing in Python
                    and JavaScript and is an absolute fan of Machine
                    Learning and AI. With knowledge in both Computer
                    Science & Data Science, Dhananjayan aspires to combine
                    his skills and one day create the next big thing in tech.
                    In his free time, he plays the guitar, keyboard and
                    drums and often produces music of his own.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Eric */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Guest Judge</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={eric_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Eric Hewitt</Card.Title>
                  <Card.Text>Eric Hewitt is the Chief Technology Officer
                  at Understory, Inc.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Scott */}
            <Col style={{ marginTop: "2rem" }} className="profile_col"
            align="center">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <strong>Guest Judge</strong>
                </Card.Header>
                <Row>
                  <Col align="center">
                    <Image className="profile-image" src={scott_profile}
                    roundedCircle />
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>Scott Rose</Card.Title>
                  <Card.Text>Scott Rose is a Principal Engineer at Fetch
                  Rewards, Inc.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Team;
