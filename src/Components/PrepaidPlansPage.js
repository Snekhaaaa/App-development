import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardContent, Typography } from "@mui/material";
import "./PlanPage.css";

const PrepaidPlansPage = () => {
  const navigate = useNavigate();
  const plans = [
    {
      type: "PREPAID",
      price: 79,
      validity: 28,
      speed: "10 MBPS",
      offer: "unlimited data",
    },
    {
      type: "PREPAID",
      price: 199,
      validity: 56,
      speed: "20 MBPS",
      offer: "2GB/day",
    },
    {
      type: "PREPAID",
      price: 399,
      validity: 84,
      speed: "50 MBPS",
      offer: "3GB/day",
    },
    {
      type: "PREPAID",
      price: 599,
      validity: 365,
      speed: "100 MBPS",
      offer: "4GB/day",
    },
  ];

  const handlePlanClick = (plan) => {
    navigate("/prepaid-recharge", { state: { selectedPlan: plan } });
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
                <Typography>
                  Data :{" "}
                  {plan.type === "PREPAID" && plan.offer.includes("GB")
                    ? plan.offer.split(" ")[0]
                    : "Unlimited"}
                </Typography>
                <Typography>Validity : {plan.validity} Days</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default PrepaidPlansPage;
