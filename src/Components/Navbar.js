import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"; // Optional: add custom styling

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here, such as clearing tokens or user data
    // For example: localStorage.removeItem("authToken");

    // Navigate to the homepage
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/login "> Login </Link>
        </li>
        <li>
          <Link to="/about "> About </Link>
        </li>
        <li>
          <Link to="/contact "> Contact</Link>
        </li>
      </ul>
      <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Logout</button>
        Logout
      {/* </button> */}
    </nav>
  );
}
