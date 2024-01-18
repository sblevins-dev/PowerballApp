import React from "react";
import "./ball.css";

const QuickPick = ({combo, createCombo}) => {

    return (
        <div>
            <h2>Quick Pick</h2>
            <button onClick={() => createCombo()}>Create Combo</button>
            <div className="num-container">
                {combo && combo.map(num => <span className="ball">{num} </span>)}
            </div>
            
        </div>
    );
}

export default QuickPick;