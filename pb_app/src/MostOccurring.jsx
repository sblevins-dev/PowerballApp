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
        {combos &&
          combos.map((ball, index) => {
            return (
              <div key={index} className="ball-container">
                <span className="times">
                  {ball[1] > 1
                    ? ball[1] + " Times"
                    : ball[1] + " Time"}
                </span>
                <h2 className="ball">{ball[0]}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};
