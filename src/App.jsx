import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import LandingPage from "./pages/landing.jsx";
import AppLanding from "./pages/app_landing";
import CustomerLanding from "./pages/customer_landing"; 
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/app" element={<LandingPage />} />
      <Route path="/provider" element={<AppLanding />} />
      <Route path="/" element={<CustomerLanding />} />
    </Routes>
  );
}

export default App;
