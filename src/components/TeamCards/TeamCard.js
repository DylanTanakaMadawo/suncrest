import React from "react";

import "./TeamCards.css";

export const TeamCard = ({ image, name, position }) => {
  return (
    <div className="team-card-container">
      <div className="team-card">
        <div className="image-container">
          <img src={image} alt="team-member" />
        </div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};
