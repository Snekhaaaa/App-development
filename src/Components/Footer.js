import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import "./footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Container maxWidth="sm">
        <Typography variant="body1">Recharge Hub</Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {" Copyright © "}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Company
          </Link>{" "}
          {new Date().getFullYear()}
          {".Recharge Hub Ltd. All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
}
