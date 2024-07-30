import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./contact.css";
import ContactImage from "../assets/contact.jpg" // Replace with your image Path

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted successfully");
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img
          src={ContactImage}
          alt="Contact"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="contact-form">
        <Typography variant="h4" component="h1">
          Contact Us
        </Typography>
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
