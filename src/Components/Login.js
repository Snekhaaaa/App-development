import React, { useState } from "react";
import { TextField, Button, Alert, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";

const isPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone); // Simple validation for a 10-digit phone number
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation

export default function Login() {
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handlePhone = () => {
    setPhoneError(!isPhoneNumber(phoneInput));
  };

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  const handlePassword = () => {
    setPasswordError(passwordInput.length < 6); // Simple validation for password length
  };

  const handleSubmit = () => {
    setSuccess(null);
    handlePhone();
    handleEmail();
    handlePassword();

    if (
      phoneError ||
      !phoneInput ||
      emailError ||
      !emailInput ||
      passwordError ||
      !passwordInput
    ) {
      setFormValid("Please fill out the form correctly.");
      return;
    }
    setFormValid(null);
    console.log("Phone Number:", phoneInput);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Form submitted successfully.");

    // Mock user role check (this should be replaced with actual role validation logic)
    const mockUserRole =
      emailInput === "admin@example.com" ? "admin" : "customer";

    setTimeout(() => {
      if (mockUserRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/customer-dashboard");
      }
    }, 1000);
  };

  return (
    <div className="container">
      <div className="yas">
        <div className="login-box">
          <h1>Mobile Recharge</h1>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Phone Number"
              fullWidth
              error={phoneError}
              variant="standard"
              value={phoneInput}
              onBlur={handlePhone}
              onChange={(event) => setPhoneInput(event.target.value)}
              helperText={phoneError ? "Invalid phone number" : ""}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Email"
              fullWidth
              error={emailError}
              variant="standard"
              value={emailInput}
              onBlur={handleEmail}
              onChange={(event) => setEmailInput(event.target.value)}
              helperText={emailError ? "Invalid email" : ""}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              error={passwordError}
              variant="standard"
              value={passwordInput}
              onBlur={handlePassword}
              onChange={(event) => setPasswordInput(event.target.value)}
              helperText={
                passwordError ? "Password must be at least 6 characters" : ""
              }
            />
          </div>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            LOGIN
          </Button>
          {formValid && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="error" size="small">
                {formValid}
              </Alert>
            </Stack>
          )}
          {success && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="success" size="small">
                {success}
              </Alert>
            </Stack>
          )}
          <div
            style={{ marginTop: "1rem", fontSize: "12px", textAlign: "center" }}
          >
            <a
              href="#"
              className="link"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </a>
            <br />
            Don't have an account?{" "}
            <Button
              className="link"
              onClick={() => navigate("/signup")} // Navigate to signup page
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
