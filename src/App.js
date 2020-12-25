import Particles from 'react-particles-js';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div>

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
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}>
      </Particles>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <code style={{color:"black"}}>BadgerHacks</code>
        </header>
      </div>

    </div>
  );
}

export default App;
