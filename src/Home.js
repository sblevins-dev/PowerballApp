import React, { useEffect, useState } from "react";
import { createCombo } from "./createCombo";
import { checkIfComboExists } from "./checkIfComboExists";
import QuickPick from "./QuickPick";
import WinningNumbers from "./WinningNumbers";
import { CommonTriplets } from "./CommonTriplets";
import { MostOccurring } from "./MostOccurring.jsx";
import { MostOcurringPB } from "./MostOcurringPB.jsx";
import PowerballNumberChart from "./PowerballNumberChart.js";
import WhiteBallNumberChart from "./WhiteBallNumberChart.js";

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
    if (data == null) fetchData();
  }, []);

  const createCombination = () => {
    setCombo(checkIfComboExists(data, createCombo));
  };

  const appTitle = "POWER".split("");

  return (
    <div className="home-wrapper">
      <div className="app-title">
        <div className="pb-title">
          {appTitle.map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
          ))}
          <span className="letter">{"BALL"}</span>
        </div>

        <h2>Statistics</h2>
        <p>Data from <a href="https://data.gov" target="_blank">Data.gov</a>: Combinations since 2020</p>
      </div>


      {data !== null && <WinningNumbers combos={data} />}

      <QuickPick combo={combo} createCombo={createCombination} />
      {data !== null && <WhiteBallNumberChart data={data} />}
      {data !== null && <CommonTriplets combos={data} />}
      {data !== null && <PowerballNumberChart data={data} />}
      
      {/* {data !== null && <MostOccurring combos={data} />} */}
      {/* {data !== null && <MostOcurringPB combos={data} />} */}



      <p>PowerBall past combination data from <a href="https://data.gov" target="_blank">Data.gov</a></p>
    </div>
  );
};
