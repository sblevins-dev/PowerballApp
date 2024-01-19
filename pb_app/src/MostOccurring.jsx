import React from "react";
import "./ball.css";
import { createMostOccurring } from "./createMostOccurring";

export const MostOccurring = ({ combos }) => {
  const createOccurring = () => {
    combos = createMostOccurring(combos);
  };

  createOccurring();

  return (
    <div>
      <h2>Most Occurring</h2>
      <div className="num-container num-wrapper">
        {combos && Object.keys(combos).map((key, index) => {
            return (
                <div className="ball-container">
                    {combos[key] > 1 ? combos[key] + " times" : combos[key] + " time"}
                    <h2 className="ball">
                        {key}
                    </h2>
                </div>
            );
        })}
      </div>
    </div>
  );
};
