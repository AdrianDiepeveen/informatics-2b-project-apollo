import React from 'react';

import { Footer, Blog, Possibility, Features, DescriptionApollo, Header } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';

import '../../App.css';

const Home = () => (
  <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />S
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

export default Home;