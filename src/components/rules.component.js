import React, { Component } from "react";

import { Container } from 'react-bootstrap';

class Rules extends Component {
  render() {
    return(
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
    );
  }
}

export default Rules;
