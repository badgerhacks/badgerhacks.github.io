import React, { Component } from "react";

import { Accordion, Card, Container } from 'react-bootstrap';

class Faq extends Component {
  render() {
    return(
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
    );
  }
}

export default Faq;
