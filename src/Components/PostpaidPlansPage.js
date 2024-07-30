import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PlanPage.css";

const PostpaidPlansPage = () => {
  const navigate = useNavigate();

  const plans = [
    {
      type: "POSTPAID",
      price: 800,
      validity: 345,
      speed: "10 MBPS",
      offer: "unlimited data",
    },
    {
      type: "POSTPAID",
      price: 600,
      validity: 180,
      speed: "5 MBPS",
      offer: "500 GB data",
    },
    {
      type: "POSTPAID",
      price: 400,
      validity: 90,
      speed: "2 MBPS",
      offer: "200 GB data",
    },
    {
      type: "POSTPAID",
      price: 200,
      validity: 30,
      speed: "1 MBPS",
      offer: "50 GB data",
    },
  ];

  const handlePlanClick = (plan) => {
    navigate("/recharge", { state: { selectedPlan: plan } });
  };

  return (
    <div>
      <Container className="priya">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="card"
            onClick={() => handlePlanClick(plan)}
          >
            <CardContent className="cardContent">
              <div>
                <Typography variant="h6" className="planType">
                  {plan.type}
                </Typography>
                <Typography>Rs : {plan.price}</Typography>
                <Typography>Speed : {plan.speed}</Typography>
                <Typography>Note : {plan.offer}</Typography>
              </div>
              <div>
                <Typography>Data : GB</Typography>
                <Typography>Validity : {plan.validity} Days</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default PostpaidPlansPage;
