import React, { Component } from "react";

import { Col, Container, Image, Row } from 'react-bootstrap';

import aberdean_logo from '../logos/aberdean_logo_RGB.png';
import implicit_logo from '../logos/logo_name_large_transparent.png';
import fetch_logo from '../logos/Fetch_Rewards_Horizontal_Logo_transparent.png';
import understory_logo from '../logos/Understory_Logo-Primary-Horizontal.png';

class Footer extends Component {
  render() {
    return(
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
    );
  }
}

export default Footer;
