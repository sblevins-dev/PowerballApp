import React from "react";
import "./ball.css";
import { createTriplets } from "./createTriplets";

export const CommonTriplets = ({ combos }) => {
  const findCommonTriplets = () => {
    return createTriplets(combos);
  };

  let triplets = findCommonTriplets();

  console.log(triplets);

  return (
    <div>
      <h2>Common Triplets</h2>
      <div className="num-container triplet-wrapper">
        {triplets &&
          triplets.map((num) => (
            <div className="combo-container triplet-container">
              {num.map((n) => (
                <span className="ball">{n} </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
