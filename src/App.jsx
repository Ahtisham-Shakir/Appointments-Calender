import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

const App = () => {
  useEffect(() => {
    //  checking if token is present in local storage
    const token = localStorage.getItem("token");
    if (token) {
      //  if token is present redirecting to home page
      window.location.href = "/home";
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
