import React from "react";
import "./ball.css";

const QuickPick = ({ combo, createCombo }) => {
  return (
    <div className="qp-container">
      <h2>Quick Pick</h2>
      <button onClick={() => createCombo()} className="btn">
        Create Combo
      </button>
      <div className="num-container">
        {combo && combo.map((num) => <span className="ball">{num} </span>)}
      </div>
      <p>Create a combination that has not shown in data</p>
    </div>
  );
};

export default QuickPick;
