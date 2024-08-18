
import React from "react";
import "./Navbar.css"; // Ensure the path to your CSS file is correct
import logo from './heart-it-out-logo.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
    </nav>
  );
};

export default Navbar;
