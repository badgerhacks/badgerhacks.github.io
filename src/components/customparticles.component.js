import React, { Component } from "react";

import Particles from 'react-particles-js';

import {isMobile} from 'react-device-detect';

class CustomParticles extends Component {
  render() { 
    return(
      <Particles
        style={{ position: "absolute" }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#9b0000"
            },
            line_linked: {
              color: {
                value: "#c5050c"
              }
            },
            number: {
              value: isMobile ? 15 : 50
            },
            size: {
              value: 3
            }
          }
        }}>
      </Particles>
    );
  }
}

export default CustomParticles;
