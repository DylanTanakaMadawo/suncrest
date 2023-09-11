import React from "react";

import { Link } from "react-router-dom";

export const DesktopNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>Suncrest</h1>
      </div>
      <div className="navlinks-container">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="about">
          About
        </Link>
        <Link className="links" to="results">
          Results
        </Link>
        <Link className="links" to="services">
          Services
        </Link>
      </div>
      <div className="contact-container">
        {/* <Link className="btn links">Contact</Link> */}
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
};
