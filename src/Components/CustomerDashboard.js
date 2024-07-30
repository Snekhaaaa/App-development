import React from "react";
import { Link } from "react-router-dom";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Customer Dashboard</h1>
        <ul className="dashboard-list">
          <li className="dashboard-list-item">
            <Link to="/prepaid-plans" className="dashboard-link">
              Prepaid Plans
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/postpaid-plans" className="dashboard-link">
              Postpaid Plans
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/add-ons" className="dashboard-link">
              Add-ons
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/recharge-history" className="dashboard-link">
              Recharge History
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerDashboard;
