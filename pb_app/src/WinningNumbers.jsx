import React from "react";
import "./ball.css";

const WinningNumbers = ({ combos }) => {
  let last = combos[combos.length - 1];

  let lastDrawDate = new Date(last[8]);

  let combo = last[9].split(" ").map((num) => parseInt(num, 10));

  return (
    <div className="winning-num-container">
      <h2>Last Winning Numbers</h2>
      <span>
        <strong>{lastDrawDate.toLocaleDateString()}</strong>
      </span>
      <div className="num-container">
        {combo && combo.map((num, index) => <span key={index} className="ball">{num} </span>)}
        <div></div>
      </div>
    </div>
  );
};

export default WinningNumbers;
