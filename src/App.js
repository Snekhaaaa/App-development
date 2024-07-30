import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Components/AdminDashboard";
import ForgotPassword from "./Components/ForgotPassword";
import CustomerDashboard from "./Components/CustomerDashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import PrepaidPlansPage from "./Components/PrepaidPlansPage";
import PostpaidPlansPage from "./Components/PostpaidPlansPage";
import AddPlanPage from "./Components/AddPlanPage";
import RechargeFormPage from "./Components/RechargeFormPage";
import PrepaidRechargeForm from "./Components/PrepaidRechargeForm"; // Import the new component
import { Box } from "@mui/material";
import Adminprepaid from "./Components/Adminprepaid";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 3,
            paddingTop: "5px", // Adjust padding to match the height of the navbar
          }}
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/prepaid-plans" element={<PrepaidPlansPage />} />
            <Route path="/postpaid-plans" element={<PostpaidPlansPage />} />
            <Route path="/admin/add-plan" element={<AddPlanPage />} />
            <Route path="/recharge" element={<RechargeFormPage />} />{" "}
            <Route path="/prepaid-recharge" element={<PrepaidRechargeForm />} />
            <Route path="/admin/prepaid-plans" element={<Adminprepaid />} />
            {/* Add the new route */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
