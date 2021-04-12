import React, { Component } from "react";

import { Container } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <Container id="about">
        <h1>About</h1>
        <p>Badger Hacks is a hackathon that takes place from
        January 21st to January 23rd (2021). It is run entirely by
        students at the University of Wisconsin - Madison (UW-Madison),
        and it is completely virtual. This means that regardless of
        where you are, as long as you have a submission that abides
        by our rules, you will be eligible for a prize.</p>
        <p>Featured in the news: (<a
          href="https://www.cs.wisc.edu/2021/03/02/badgerhacks/">link</a>)</p>
      </Container>
    );
  }
}

export default About;
