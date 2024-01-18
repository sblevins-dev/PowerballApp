import React, { useState } from 'react'
import { createCombo } from './createCombo';
import { checkIfComboExists } from './checkIfComboExists';
import QuickPick from './QuickPick';
import WinningNumbers from './WinningNumbers';

export const Home = () => {
  const [data, setData] = useState(null);
  const [combo, setCombo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await 
        fetch(process.env.REACT_APP_URL);
      const data = await response.json();
      setData(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching JSON data: ', error)
    }
  }

  const createCombination = () => {
    setCombo(checkIfComboExists(data, createCombo));
  }

  return (
    <div>
        <h1 className='app-title'>Powerball</h1>
        <button onClick={fetchData}>Fetch</button>
        
        {data !== null && <WinningNumbers combos={data} />}
        
         <QuickPick combo={combo} createCombo={createCombination} />
    </div>
  )
}
