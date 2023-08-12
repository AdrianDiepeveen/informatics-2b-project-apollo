import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="footer section_padding">
    <div className="footer-heading">
      <h1 className="gradient_text">Get A Head Start By Stepping Into The Future With Apollo</h1>
    </div>

    <div className="footer-btn">
    {/* INSERT HREF HERE */}
    <p><a href="https://apollo-ai.vercel.app/">Start Apollo Now</a></p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>South Africa, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Models</p>
        <p>Social Media</p>
        <p>Dashboard</p>
        <p>Contact Us</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Whitepapers</p>
      </div>
      <div className="footer-links_div">
        <h4>Get In Touch</h4>
        <p>South Africa</p>
        <p>+27 72 104 2811</p>
        <p>apollo.fitness@outlook.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 Apollo. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;