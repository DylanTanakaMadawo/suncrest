import React from "react";

import "./Services.css";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <h1>Our Services</h1>
        <p>
          A description of what type of services will be offered by the company.
          For example, services offered include e-commerce websites, Search
          Engine Optimizaion, Social Media Marketing, Perfomance Marketing and
          much more! We focus on data that truly matters to inform our every
          conversation and decision with constant testing, tweaking, and
          optimizing. We make sure every opportunity is realized.
        </p>
      </div>
      <div className="services-card-container">
        <ServiceCard
          image="./assets/images/seo.svg"
          header="SEO & Content Marketing"
          description="Our expert SEO team and content writers will create a conversion-driven digital marketing strategy based on our years’ of experience in SEO consultancy and strategy implementation."
        />
        <ServiceCard
          image="./assets/images/ppc.svg"
          header="PPC: Google & Facebook Advertising"
          description="Trust our Google Premier Partner marketing experts to build a custom PPC campaign such as a Google or Facebook ads strategy designed to achieve your business’ goals and desired outcomes."
        />
        <ServiceCard
          image="./assets/images/cro.svg"
          header="Conversion Rate Optimization"
          description="Our CRO strategists will effectively maximize your conversion rates to provide a better user experience thanks to our unparalleled customer research and skilled team members"
        />
        <ServiceCard
          image="./assets/images/saas.svg"
          header="Web & Logo Development"
          description="Suncrest’s team of Web design and development experts work with your business to find, nurture, and convert qualified leads based on modern designs."
        />
      </div>
    </div>
  );
};
