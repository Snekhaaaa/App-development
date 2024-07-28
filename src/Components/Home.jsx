// home.jsx
import React, { useState } from 'react';
import "../assests/Home.css"
const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleRecharge = () => {
    if (!phoneNumber || !amount) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Here you would typically make an API call to handle the recharge
    // For demo purposes, we'll just simulate success
    setMessage(`Recharging ${phoneNumber} with ₹${amount}`);
    
    // Reset fields
    setPhoneNumber('');
    setAmount('');
  };

  return (
    <div className="home-container">
      <h1>Online Mobile Recharge</h1>
      <div className="recharge-form">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          maxLength="10"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handleRecharge}>Recharge</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;
