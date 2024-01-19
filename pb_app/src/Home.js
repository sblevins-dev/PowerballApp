import React, { useState } from 'react'
import { createCombo } from './createCombo';
import { checkIfComboExists } from './checkIfComboExists';
import QuickPick from './QuickPick';
import WinningNumbers from './WinningNumbers';
import { CommonTriplets } from './CommonTriplets';
import { MostOccurring } from './MostOccurring.jsx';

export const Home = () => {
  const [data, setData] = useState(null);
  const [combo, setCombo] = useState(null);

  const fetchData = async () => {
    setData(["1 3 2 5 22 44", "3 5 22 44 77 3", "2 64 1 44 55 5", "2 44 9 10 11 3", "2 66 22 67 44 3", "3 5 8 7 6 6", "3 1 99 84 100 1", "3 1 5 98 97 9"])
    // try {
    //   const response = await 
    //     fetch(process.env.REACT_APP_URL);
    //   const data = await response.json();
    //   setData(data.data);
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error fetching JSON data: ', error)
    // }
  }

  const createCombination = () => {
    setCombo(checkIfComboExists(data, createCombo));
  }

  return (
    <div className='home-wrapper'>
        <h1 className='app-title'>Powerball</h1>
        <button onClick={fetchData}>Fetch</button>
        
        {/* {data !== null && <WinningNumbers combos={data} />} */}
        
         <QuickPick combo={combo} createCombo={createCombination} />
         {data !== null && <CommonTriplets combos={data} />}
         {data !== null && <MostOccurring combos={data} /> }
    </div>
  )
}
