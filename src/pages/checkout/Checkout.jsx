import React, { useState } from 'react';

import { Footer, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCreditCardNumberChange = (event) => {
    setCreditCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleCheckout = () => {
    //*Make An API Call To Backend To Handle Authentication Here*
    //For Now: Use Console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Credit Card Number:', creditCardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={handleAddressChange} />
        </div>
        <div className="form-group">
          <label>Credit Card Number:</label>
          <input type="text" value={creditCardNumber} onChange={handleCreditCardNumberChange} />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input type="text" value={expirationDate} onChange={handleExpirationDateChange} />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
