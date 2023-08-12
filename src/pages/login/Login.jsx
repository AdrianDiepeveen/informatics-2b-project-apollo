import React, { useState } from 'react';

import { Footer, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    //*Make An API Call To Backend To Handle Authentication Here*
    //For Now: Use Console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
