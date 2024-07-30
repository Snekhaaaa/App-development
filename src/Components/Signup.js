import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./signup.css";

// Phone number validation function (basic example)
const isPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone); // Adjust the regex pattern according to your needs

export default function SignupPage() {
  const [phoneInput, setPhoneInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handlePhone = () => {
    setPhoneError(!isPhoneNumber(phoneInput));
  };

  const handlePassword = () => {
    setPasswordError(
      !passwordInput || passwordInput.length < 5 || passwordInput.length > 20
    );
  };

  const handleConfirmPassword = () => {
    setConfirmPasswordError(passwordInput !== confirmPasswordInput);
  };

  const handleSubmit = () => {
    setSuccess(null);
    handlePhone();
    handlePassword();
    handleConfirmPassword();

    if (phoneError || !phoneInput) {
      setFormValid("Phone number is invalid. Please re-enter.");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password must be between 5 and 20 characters. Please re-enter."
      );
      return;
    }
    if (confirmPasswordError || !confirmPasswordInput) {
      setFormValid("Passwords do not match. Please re-enter.");
      return;
    }
    setFormValid(null);
    console.log("Phone:", phoneInput);
    console.log("Password:", passwordInput);
    setSuccess("Registration successful.");

    // Navigate to login page after successful registration
    setTimeout(() => navigate("/login"), 1000); // Redirect after a short delay for success message
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            label="Phone Number"
            fullWidth
            error={phoneError}
            variant="standard"
            value={phoneInput}
            onBlur={handlePhone}
            onChange={(event) => setPhoneInput(event.target.value)}
            helperText={
              phoneError ? "Invalid phone number (must be 10 digits)" : ""
            }
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel
              htmlFor="standard-adornment-password"
              error={passwordError}
            >
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handlePassword}
              error={passwordError}
            />
            {passwordError && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Password must be between 5 and 20 characters
              </div>
            )}
          </FormControl>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel
              htmlFor="standard-adornment-confirm-password"
              error={confirmPasswordError}
            >
              Confirm Password
            </InputLabel>
            <Input
              id="standard-adornment-confirm-password"
              type="password"
              value={confirmPasswordInput}
              onChange={(event) => setConfirmPasswordInput(event.target.value)}
              onBlur={handleConfirmPassword}
              error={confirmPasswordError}
            />
            {confirmPasswordError && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Passwords do not match
              </div>
            )}
          </FormControl>
        </div>
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          SIGN UP
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
          Already have an account?{" "}
          <Button className="link" onClick={() => navigate("/login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
