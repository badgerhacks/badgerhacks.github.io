import React, { Component } from "react";

import { Col, Container, Row } from 'react-bootstrap';

import first_icon from '../icons/icons8-1st-place-medal-96.png';
import second_icon from '../icons/icons8-2nd-place-medal-96.png';
import third_icon from '../icons/icons8-3rd-place-medal-96.png';

class Prizes extends Component {
  render() {
    return(
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
    );
  }
}

export default Prizes;
