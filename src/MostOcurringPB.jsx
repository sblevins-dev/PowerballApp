import React from "react";
import { createMostOcurringPB } from "./createMostOccurring";

export const MostOcurringPB = ({ combos }) => {
  const createPBHash = () => {
    combos = createMostOcurringPB(combos);
  };

  createPBHash();

  return (
    <div className="pb-container">
      <h2>Most Occurring PowerBall</h2>
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
                <h2 className="ball pb">{ball[0]}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};
