import React from "react";

import "./Banner.css";
// import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>Company Slogan Digital Marketing</h1>
        <p>
          This is where the motivational speeches are written and some
          assuarance for both new and existing clients. Give a brief summary of
          what the Company is offering.
        </p>
        <div className="banner-btn-container">
          {/* <Link className="banner-link">Schedule a free strategy call</Link> */}
          <button className="banner-btn">Schedule a free strategy call</button>
        </div>
      </div>
      <div className="banner-image">
        {/* <h1>Animated Image comes here!</h1> */}
        <img src="./assets/images/svg-image1.svg" alt="animated" />
        {/* <div className="image-container">
          
          p
        </div> */}
      </div>
    </div>
  );
};
