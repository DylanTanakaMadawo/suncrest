import React from "react";

import "./ServiceCard.css";
import { Link } from "react-router-dom";

export const ServiceCard = ({ image, header, description }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={image} alt="card" />
      </div>
      <h1>{header}</h1>
      <p>{description}</p>
      <div className="service-btn-container">
        {/* <button>Learn More</button> */}
        <Link className="service-btn" to="services">
          Learn More
        </Link>
      </div>
    </div>
  );
};
