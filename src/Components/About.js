import React from "react";
import "./about.css"; // Import the CSS file for styling
import aboutImage from "../assets/about recharge.png"; // Path to your image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="Recharge Portal" />
      </div>
      <div className="about-details">
        <h1>About us</h1>
        <p>
        Recharge Hub is your one-stop solution for quick, secure, and hassle-free mobile recharges, offering a seamless experience with just a few clicks.
        </p>
        
      </div>
    </div>
  );
};

export default About;
