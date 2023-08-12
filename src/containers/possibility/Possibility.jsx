import React from 'react';
import rocket from '../../assets/rocket.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section_padding" id="possibility">
    <div className="possibility-image">
      <img src={rocket} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Get Started Today</h4>
      <h1 className="gradient_text">Your Personal Fitnes And Health Coach <br /> At Your Fingertips</h1>
      <p>Improve Your Future With Apollo</p>
      <h4>Sign Up Below</h4>
    </div>
  </div>
);

export default Possibility;