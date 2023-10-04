import React from "react";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div>
        <img src={logo} alt="ccript" width={150} />
      </div>
      <div className="logout">
        <FiLogOut size={25} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
