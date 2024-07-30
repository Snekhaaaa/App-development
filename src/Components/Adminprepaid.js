import React from "react";
import "./Adminprepaid.css";

const Adminprepaid = () => {
  // Example prepaid plans data
  const prepaidPlans = [
    { id: 1, name: "Plan A", price: "$10", validity: "30 days" },
    { id: 2, name: "Plan B", price: "$20", validity: "60 days" },
    // Add more plans as needed
  ];

  return (
    <div className="admin-prepaid-container">
      <h2>Prepaid Plans Details</h2>
      <div className="admin-prepaid-list">
        {prepaidPlans.map((plan) => (
          <div key={plan.id} className="admin-prepaid-card">
            <h3>{plan.name}</h3>
            <p>
              <strong>Price:</strong> {plan.price}
            </p>
            <p>
              <strong>Validity:</strong> {plan.validity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminprepaid;