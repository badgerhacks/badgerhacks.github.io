import React, { Component } from "react";

import { Container, Table } from 'react-bootstrap';

class Schedule extends Component {
  render() {
    return(
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
    );
  }
}

export default Schedule;
