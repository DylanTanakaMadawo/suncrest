import React from "react";

import "./MainServices.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export const MainServices = () => {
  return (
    <div className="mainservices-container">
      <div className="services-intro">
        <h1>
          Boost your brand : Master Digital Marketing and Web Development!
        </h1>
      </div>
      <div className="service-item">
        <div className="service-txt">
          <h1>Influencer Marketing</h1>
          <div className="service-img2">
            <img src="./assets/images/socialmediaicon2.png" alt="service" />
          </div>
          <p>
            It is collaborating with individuals who have a strong presence and
            influence on social media platforms. Influencers, with dedicated
            folowers in specific niches, offer authentic recommendations. This
            drives reach, engagement, and precise argeting, all while
            streamlining content creation. It's a cost-effective, data-rich
            strategy adaptable to various campaign goals, showcasing the power
            of trust and relatability in digital realm.{" "}
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>
        <div className="service-img">
          <img src="./assets/images/socialmediaicon2.png" alt="service" />
        </div>
      </div>
      <div className="service-item">
        <div className="service-img">
          <img src="./assets/images/leadgenicon1.png" alt="service" />
        </div>
        <Divider
          sx={{
            color: "white",
            marginTop: "60px",
            marginBottom: "60px",
            "&::before, &::after": {
              borderColor: "gray",
            },
          }}
          orientation="vertical"
          flexItem
        />
        <div className="service-txt">
          <h1>Lead Generation</h1>
          <div className="service-img2">
            <img src="./assets/images/leadgenicon1.png" alt="service" />
          </div>
          <p>
            It is using online tactics to attract and capture potential
            customers. <b>The aim?</b> To initiate interest, collect contact
            information, and convert leads into paying customers, forming a
            strong customer base and driving revenue in the digital realm. You
            do that by creating compelling content, optimizing for search
            engines, and utilizing channels like social media and email
            marketing.
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>
      </div>
      <div className="service-item">
        <div className="service-txt">
          <h1>Marketing funnel</h1>
          <div className="service-img2">
            <img src="./assets/images/funnelicon1.png" alt="service" />
          </div>
          <p>
            It is a step-by-step process that leads potential customers towards
            a specific action, such as purchasing. You start by creating
            awareness, progress to capturing interest and encouraging
            consideration, and ultimately aim to convert leads into customers.
            It is a crucial concept in digital marketing, allowing businesses to
            streamline their strategies and boost campaign effectiveness.
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>
        <div className="service-img">
          <img src="./assets/images/funnelicon1.png" alt="service" />
        </div>
      </div>
      <div className="service-item">
        <div className="service-img">
          <img src="./assets/images/emailicon1.png" alt="service" />
        </div>

        <Divider
          sx={{
            color: "white",
            marginTop: "60px",
            marginBottom: "60px",
            "&::before, &::after": {
              borderColor: "gray",
            },
          }}
          orientation="vertical"
          flexItem
        />
        <div className="service-txt">
          <h1>Email Marketing</h1>
          <div className="service-img2">
            <img src="./assets/images/emailicon1.png" alt="service" />
          </div>
          <p>
            Build quality list, segment it and offer valuable incentives for
            subscriptions. Craft engaging content with clear CTAs and use
            personalized emails to keep them engaged and convert them into
            qualifies leads.
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>
      </div>
      <div className="service-item">
        <div className="service-txt">
          <h1>Search Engine Optimization</h1>
          <div className="service-img2">
            <img src="./assets/images/seoicon2.png" alt="service" />
          </div>
          <p>
            SEO is the key to boosting your website's visibiity, attracting
            targeted traffic, and establishing credibility with users. Research
            and target related keywords related to your business. This will
            drive quality traffic to your website increasing the chance of lead
            generation.
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>

        <div className="service-img">
          <img src="./assets/images/seoicon2.png" alt="service" />
        </div>
      </div>

      <div className="service-item">
        <div className="service-img">
          <img src="./assets/images/webdevicon1.png" alt="service" />
        </div>

        <Divider
          sx={{
            color: "white",
            marginTop: "60px",
            marginBottom: "60px",
            "&::before, &::after": {
              borderColor: "gray",
            },
          }}
          orientation="vertical"
          flexItem
        />
        <div className="service-txt">
          <h1>website Optimization</h1>
          <div className="service-img2">
            <img src="./assets/images/webdevicon1.png" alt="service" />
          </div>
          <p>
            Page loading speed is the most crucial aspect of web optimization.
            It impacts user experience and search engine rankings, making it a
            top priority for success. Ensure your website is user-friendly and
            has Clear call-to-action button, CTA.
          </p>
          <Link className="link-btn">Learn More</Link>
        </div>
      </div>
    </div>
  );
};
