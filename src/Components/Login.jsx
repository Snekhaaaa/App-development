import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Alert,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assests/login.css"

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

 function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  const handlePassword = () => {
    setPasswordError(
      !passwordInput || passwordInput.length < 5 || passwordInput.length > 20
    );
  };

  const handleSubmit = () => {
    setSuccess(null);
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
    setFormValid(null);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Form submitted successfully.");
  };

  return (
    <div className="bg">
    <div className="container">
      <div className="login-box">
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
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handlePassword}
              error={passwordError}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordError && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Password must be between 5 and 20 characters
              </div>
            )}
          </FormControl>
        </div>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
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
          <a href="#" className="link">
            Forgot Password?
          </a>
          <br />
          Don't have an account?{" "}
          <Button
            className="link"
            onClick={() => navigate("/signup")} 
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login