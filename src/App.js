import React, { Component } from "react";

import CustomNavbar from './components/customnavbar.component.js';
import CustomParticles from './components/customparticles.component.js';
import Home from './components/home.component.js';
import About from './components/about.component.js';
import Schedule from './components/schedule.component.js';
import Faq from './components/faq.component.js';
import Rules from './components/rules.component.js';
import Prizes from './components/prizes.component.js';
import Team from './components/team.component.js';
import HallOfFame from './components/hall_of_fame.component.js';
import Sponsors from './components/sponsors.component.js';
import Footer from './components/footer.component.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <CustomNavbar/>

        {/* Particles Effect */}
        <CustomParticles/>

        {/* Logo and Buttons at Top */}
        <Home/>

        {/* About Section */}
        <About/>

        {/* Schedule Section */}
        <Schedule/>

        {/* FAQ Section */}
        <Faq/>

        {/* Rules Section */}
        <Rules/>

        {/* Prizes Section */}
        <Prizes/>

        {/* Founders Section */}
        <Team/>

        {/* Hall of Fame Section */}
        <HallOfFame/>

        {/* Sponsors Section */}
        <Sponsors/>

        {/* Footer */}
        <Footer/>

      </div>
    );
  }
}

export default App;
