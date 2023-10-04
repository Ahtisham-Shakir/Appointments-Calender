import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // setLoading(true);
    //  checking if token is present in local storage
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      //  if token is present redirecting to home page
      setUser({ token });
    }
  }, []);

  return (
    <Router>
      {
        //  if user is not logged in show login page
        !user ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          //  if user is logged in show home page
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )
      }
    </Router>
  );
};

export default App;
