import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import "./addplanpage.css";

const AddPlanPage = () => {
  const [planType, setPlanType] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planOffer, setPlanOffer] = useState("");
  const [planValidity, setPlanValidity] = useState("");
  const [planDescription, setPlanDescription] = useState("");

  const handleAddPlan = () => {
    // Add plan logic
  };

  return (
    <Container className="add-plan-container">
      <Typography variant="h4" className="add-plan-title">
        Add Plan
      </Typography>
      <form className="add-plan-form">
        <TextField
          label="Plan Type"
          value={planType}
          onChange={(e) => setPlanType(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plan Price"
          value={planPrice}
          onChange={(e) => setPlanPrice(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plan Offer"
          value={planOffer}
          onChange={(e) => setPlanOffer(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plan Validity"
          value={planValidity}
          onChange={(e) => setPlanValidity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plan Description"
          value={planDescription}
          onChange={(e) => setPlanDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddPlan}
          className="add-plan-button"
        >
          Add Plan
        </Button>
      </form>
    </Container>
  );
};

export default AddPlanPage;
