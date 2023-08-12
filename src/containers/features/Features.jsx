import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Top Of The Range Fitness And Health Trackers',
    text: 'Introducing our Top-of-the-Range Fitness and Health Trackers – the pinnacle of cutting-edge technology and performance in the world of health and wellness.',
  },
  {
    title: 'Detailed Fitness And Health Tracking Software',
    text: 'Introducing our Detailed Fitness and Health Tracking Software – your ultimate companion on the path to optimal well-being. ',
  },
  {
    title: 'Enhancing Healthcare',
    text: 'Apollo Can Assist Doctors In Diagnostics, Treatment, Planning And Drug Development',
  },
  {
    title: 'Improving Well-Being',
    text: 'Welcome to a journey of self-improvement and enhanced well-being – where your physical, mental, and emotional health take center stage.',
  },
];

const Features = () => (
  <div className="features section_padding" id="features">
    <div className="features-heading">
      <h1 className="gradient_text">The Future Is Now. Shape The Future Today.</h1>
      <p>Sign Up Now To Get Started</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;