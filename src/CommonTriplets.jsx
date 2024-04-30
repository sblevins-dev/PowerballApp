import React from "react";
import "./ball.css";
import { createTriplets } from "./createTriplets";

export const CommonTriplets = ({ combos }) => {
  const findCommonTriplets = () => {
    return createTriplets(combos);
  };

  let triplets = findCommonTriplets();

  return (
    <div className="common-triplet-container">
      <h2>Common Triplets</h2>
      <div className="triplet-wrapper">
        {triplets &&
          triplets.map((num, index) => (
            <div key={index} className="combo-container triplet-container">
              {num.map((n, index) => (
                <span key={index} className="ball">{n} </span>
              ))}
            </div>
          ))}
          
      </div>
      <p>Most common triplets in data since 2020</p>
    </div>
  );
};
