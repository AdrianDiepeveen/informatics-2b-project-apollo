import React from 'react';

import { Footer, Blog, Possibility, Features, DescriptionApollo, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import './App.css';

const App = () => (
  <Router>
  <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <DescriptionApollo />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    <Routes>
      <Route path="/login" component={<Login/>} />
      <Route path="/register" component={<Register/>} />
    </Routes>
  </div>
  </Router>
);

export default App;