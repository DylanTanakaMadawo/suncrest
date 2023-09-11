import React from "react";

import "./Homepage.css";
import { Banner } from "../Banner/Banner";
import { Offers } from "../Offers/Offers";
import { Divider } from "@mui/material";
import { Services } from "../Services/Services";
import { Numbers } from "../Numbers/Numbers";
import { FeedbackHome } from "../FeedbackHome/FeedbackHome";

export const Homepage = () => {
  return (
    <div>
      <Banner />
      <Divider sx={{ margin: "80px 70px" }} />
      <Numbers />
      <Divider sx={{ margin: "80px 70px" }} />
      <Offers />
      <Divider sx={{ margin: "80px 70px" }} />
      <FeedbackHome />
      <Divider sx={{ margin: "80px 70px" }} />
      <Services />
    </div>
  );
};
