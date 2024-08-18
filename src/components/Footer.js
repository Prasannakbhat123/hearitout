import React from "react";
import "./Footer.css";
import logo from './heart-it-out-logo.png'; // Ensure the path to your footer logo is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Footer Logo" />
      </div>
    </footer>
  );
};

export default Footer;
