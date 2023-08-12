import React from 'react';
import people from '../../assets/people.png';
import astronaut from '../../assets/astronaut.png';
import './header.css';

const Header = () => (
  <div className="header section_padding" id="home">
    <div className="header-content">
      <h1 className="gradient_text">Your Fitness Journey Starts Here With Apollo</h1>
      <p>Welcome To The Future. Apollo Is Your Own Personal Fitness Coach. The Future Is Now In Your Hands.</p>

      <div className="header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Create Account Now</button>
      </div>

      <div className="header-content_people">
        <img src={people} />
        <p>1600 People Have Signed Up In The Last Hour, Do Not Miss Out!</p>
      </div>
    </div>

    <div className="header-image">
      <img src={astronaut} />
    </div>
  </div>
);

export default Header;