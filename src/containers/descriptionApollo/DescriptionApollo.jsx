import React from 'react';
import Feature from '../../components/feature/Feature';
import './descriptionApollo.css';

const DescriptionApollo = () => (
  <div className="descriptionApollo section_margin" id="wgpt3">
    <div className="descriptionApollo-feature">
      <Feature title="What Is Apollo" text="Apollo Is An Electronic Commerce Company That Sells Fitness And Health Tracking Products As Well As Software" />
    </div>
    <div className="descriptionApollo-heading">
      <h1 className="gradient_text">The Possibilities Are Infinite</h1>
      <p>Explore Apollo's Products</p>
    </div>
    <div className="descriptionApollo-container">
      <Feature title="Fitness Trackers" text="Apollo is a pioneering company that specializes in crafting state-of-the-art fitness trackers that seamlessly integrate into your daily routine, providing you with real-time insights and motivation to lead a more active and balanced life. Our mission is to harness the power of technology to inspire healthier living, making fitness accessible and enjoyable for everyone, regardless of their fitness level or goals." />
      <Feature title="Fitness Tracking Software" text="Apollo is a cutting-edge technology company specializing in revolutionizing the way people approach their fitness and wellness journeys. Through our innovative fitness tracking software, we empower individuals of all levels to achieve their health goals and enhance their overall well-being. Our mission is to inspire and support a healthier world by leveraging the power of data, technology, and personal motivation." />
      <Feature title="Health Checkups" text="Company Description: Apollo Fitness Health At Apollo Fitness Health, we are dedicated to revolutionizing the way individuals approach their health and well-being through cutting-edge technology. As a leading innovator in the health and fitness industry, we have seamlessly integrated fitness trackers and advanced tracking software to create a comprehensive solution for health checkups that empowers individuals to take charge of their wellness journey." />
    </div>
  </div>
);

export default DescriptionApollo;