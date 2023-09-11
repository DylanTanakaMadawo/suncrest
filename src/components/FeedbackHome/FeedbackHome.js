import React from "react";

import "./FeedbackHome.css";
import { Link } from "react-router-dom";

export const FeedbackHome = () => {
  return (
    <div className="feedbackhome-container">
      <div className="feedbackhome-image-container">
        <img src="./assets/images/resultsicon.png" alt="feedback" />
      </div>
      <div className="feedbackhome-text">
        <h1>Positive Feedback</h1>
        <p>
          Since we are result driven, here are a few of many positive feebacks
          we have received from our clients impressed by the <b>RESULTS</b>{" "}
          we've helped them attain!
        </p>
        <Link className="results-link">See Results</Link>
      </div>
    </div>
  );
};
