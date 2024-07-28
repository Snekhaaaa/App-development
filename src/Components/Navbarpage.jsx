import React from "react";
import { Link } from "react-router-dom";
import "../assests/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">RECHARGE HUB</div>
      <div>
        <Link to="/login"><b>Home</b></Link>
        <Link to="/home"><b>Login</b></Link>
        <Link to="/about"><b>About</b></Link>
        <Link to="/contact"><b>Contact</b></Link>
      </div>
    </nav>
  );
};

export default Navbar;