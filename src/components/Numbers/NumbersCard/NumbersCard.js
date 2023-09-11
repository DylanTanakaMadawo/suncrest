import React from "react";

import "./NumbersCard.css";

export const NumbersCard = ({ image, header, text }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={image} alt="card" />
      </div>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};
