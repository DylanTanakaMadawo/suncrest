import React from "react";

import "./About.css";
import { TeamCard } from "../TeamCards/TeamCard";
import { Divider } from "@mui/material";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>We Grow Brands.</h1>
            <p>Take your brand to a whole new Level!</p>
          </div>
        </div>
        <div className="about-about">
          <div className="h1-div">
            <h1>
              Shaping Tomorrow's Energy Landscape | <b>SolarMarketing</b>
            </h1>
          </div>
          <p className="shape-p">
            UK's leading digital marketing agency empowering MCS Certified Solar
            companies.
          </p>
          <p className="shape-p">
            At <b>Suncrestsolar</b>, we use quality online tactics to attract
            and capture potential customers.
          </p>
          <p className="shape-p">
            Our aim is to initiate intrest, collect contact information, and
            convert leads into paying customers, forming a strong customer base
            and driving revenue in the digital realm.
          </p>
          <p className="shape-p">
            You do that by creating compelling content, optimizing for search
            engines, and utilizing channels like social media and email
            marketing.
          </p>
        </div>
        <Divider sx={{ margin: "80px 70px" }} />
        <div className="about-team">
          <h1>Our Team</h1>
          <p className="team-p">
            We're led by passionate and experienced team members who are
            dedicated to making sure our clients succeed.
          </p>
        </div>
        <div className="about-team-cards">
          <TeamCard
            // image=""
            image="./assets/images/sample-employee1.webp"
            name="Mary Chong"
            position="CEO"
          />
          <TeamCard
            // image=""
            image="./assets/images/sample-employee2.webp"
            name="Foster Dent"
            position="Lead Web developer"
          />
          <TeamCard
            // image=""
            image="./assets/images/sample-employee1.webp"
            name="Tim Schlup"
            position="Solar Expert"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
          <TeamCard
            image=""
            // image="./assets/images/sample-employee1.webp"
            name="Dylan Madawo"
            position="Lead Web developer"
          />
        </div>
      </div>
    </>
  );
};
