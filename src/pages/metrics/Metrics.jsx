import React, { useState, useEffect } from 'react';

import { Footer, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const Metrics = () => {
  const [userMetrics, setUserMetrics] = useState({
    steps: 0,
    caloriesBurned: 0,
    heartRate: 0,
    sleepDuration: 0,
  });

  //Simulating fetching data from an API or database
  useEffect(() => {
    //Replace this with actual API call or data fetching logic
    const fetchData = async () => {
      try {
        //Simulate fetching user's fitness data
        const response = await fetch('/api/user/fitnessdata');
        const data = await response.json();

        //Update userMetrics with fetched data
        setUserMetrics(data);
      } catch (error) {
        console.error('Error fetching fitness data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fitness-tracker-container">
      <h2>Fitness Tracker</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Steps</h3>
          <p>{userMetrics.steps} steps</p>
        </div>
        <div className="metric">
          <h3>Calories Burned</h3>
          <p>{userMetrics.caloriesBurned} calories</p>
        </div>
        <div className="metric">
          <h3>Heart Rate</h3>
          <p>{userMetrics.heartRate} bpm</p>
        </div>
        <div className="metric">
          <h3>Sleep Duration</h3>
          <p>{userMetrics.sleepDuration} hours</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
