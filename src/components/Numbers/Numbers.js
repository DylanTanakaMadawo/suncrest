import React from "react";

import "./Numbers.css";
import { NumbersCard } from "./NumbersCard/NumbersCard";

export const Numbers = () => {
  return (
    <div className="numbers-container">
      <NumbersCard
        image="./assets/images/stars.webp"
        header="4.7"
        text="Average rating from over 200 reviews"
      />
      <NumbersCard
        image="./assets/images/handshake.webp"
        header="70+"
        text="Clients with us since we started"
      />
      <NumbersCard
        image="./assets/images/peopleicon.webp"
        header="50+"
        text="Employees aligned with our mission"
      />
      <NumbersCard
        image="./assets/images/moneyicon.webp"
        header="$1M+"
        text="In annual ad-spend managed for clients"
      />
    </div>
  );
};
