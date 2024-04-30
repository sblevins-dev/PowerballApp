import React from "react";
import "./ball.css";

const QuickPick = ({ combo, createCombo }) => {
  return (
    <div className="qp-container">
      <h3>Quick Pick</h3>
      <button onClick={() => createCombo()} className="btn">
        Create Combo
      </button>
      <div className="num-container">
        {combo && combo.map((num) => <span key={num} className="ball">{num} </span>)}
      </div>
      <p>Create a combination that has not shown in data</p>
    </div>
  );
};

export default QuickPick;
