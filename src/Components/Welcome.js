import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Optional: add custom styling

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Recharge Hub</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
