import React, { useState } from "react";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Login = ({ setUser }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  //   handling login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      return toast.error("Please enter username and password");
    }
    setLoading(true);
    fetch("https://hiring-test-task.vercel.app/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        //  saving token in local storage
        localStorage.setItem("token", JSON.stringify(data.token));
        // navigate("/appointments");
        setUser({ token: data.token });
        toast.success("Login Successful");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  //   handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="screen">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="ccript" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="inputContiner">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginData.username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
          </div>
          <div className="inputContiner">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={`btn ${loading && "disabled"}`}
            disabled={loading}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
