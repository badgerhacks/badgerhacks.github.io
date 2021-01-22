import React, { Component } from "react";

import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

import logo from '../logos/logo.png';

import {isMobile} from 'react-device-detect';

class Home extends Component {
  render() {
    return(
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
    );
  }
}

export default Home;
