import React from "react";

import "./ServiceCard.css";

export const ServiceCard = ({ image, header, description }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={image} alt="card" />
      </div>
      <h1>{header}</h1>
      <p>{description}</p>
      <div className="service-btn-container">
        <button>Learn More</button>
      </div>
    </div>
  );
};
