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
import "../assests/signup.css"

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function SignupPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
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
    handleEmail();
    handlePassword();
    handleConfirmPassword();

    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please re-enter.");
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
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Registration successful.");
  };

  return (
    <div className="container">
      <div className="signup-box">
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            label="Email Address"
            fullWidth
            error={emailError}
            variant="standard"
            value={emailInput}
            onBlur={handleEmail}
            onChange={(event) => setEmailInput(event.target.value)}
            helperText={emailError ? "Invalid email address" : ""}
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
          <Button
            className="link"
            onClick={() => navigate("/")} // Navigate to login page
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SignupPage