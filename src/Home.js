import React, { useEffect, useState } from "react";
import { createCombo } from "./createCombo";
import { checkIfComboExists } from "./checkIfComboExists";
import QuickPick from "./QuickPick";
import WinningNumbers from "./WinningNumbers";
import { CommonTriplets } from "./CommonTriplets";
import { MostOccurring } from "./MostOccurring.jsx";
import { MostOcurringPB } from "./MostOcurringPB.jsx";

export const Home = () => {
  const [data, setData] = useState(null);
  const [combo, setCombo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL);
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.error("Error fetching JSON data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createCombination = () => {
    setCombo(checkIfComboExists(data, createCombo));
  };

  const appTitle = "POWER".split("");

  return (
    <div className="home-wrapper">
      <h1 className="app-title">
        {appTitle.map((letter, index) => (
          <span key={index} className="letter">{letter}</span>
        ))}
        <span className="letter">{"BALL"}</span>
      </h1>

      {data !== null && <WinningNumbers combos={data} />}

      <QuickPick combo={combo} createCombo={createCombination} />
      {data !== null && <CommonTriplets combos={data} />}
      {data !== null && <MostOccurring combos={data} />}
      {data !== null && <MostOcurringPB combos={data} />}

      <p>PowerBall past combination data from data.gov</p>
    </div>
  );
};
