import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What Is Apollo</a></p>
          <p><a href="#possibility">Start Apollo Now</a></p>
          <p><a href="#features">Featured Products</a></p>
          <p><a href="#blog">Metrics</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p><Link to="/login">Sign In</Link></p>
        <button type="button"><Link to="/register">Register</Link></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What Is Apollo AI</a></p>
            <p><a href="#possibility">Start Apollo AI Now</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">News Articles</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <p><Link to="/login">Sign In</Link></p>
            <button type="button"><Link to="/register">Register</Link></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;