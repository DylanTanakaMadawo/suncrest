import React from "react";

import { ArrowForward } from "@mui/icons-material";

import "./Offers.css";

export const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offers-text">
        <h1>Digital Marketing Solutions</h1>
        <p>
          Another brief discussion of what clients will be getting only from our
          company. What we offer that's different.
        </p>
        <div className="watch-video">
          <h3>Watch this video to Learn More</h3>
          <ArrowForward />
        </div>
      </div>
      <div className="offers-video">
        <img src="./assets/images/sshero1.jpg" alt="offers" />
      </div>
    </div>
  );
};
