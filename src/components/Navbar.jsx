import React from "react";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Navbar = ({ setUser }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logout Successful");
  };

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img src={logo} alt="ccript" width={150} />
      </div>
      <div className="logout">
        <FiLogOut size={25} color="white" onClick={logout} />
      </div>
    </div>
  );
};

export default Navbar;
