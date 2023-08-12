import React from 'react';

import { Footer, Blog, Possibility, Features, DescriptionApollo, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
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
  </div>
);

export default App;