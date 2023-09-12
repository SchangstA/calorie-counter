import React, { useState } from 'react';
import { AddCal } from './AddCalories';
import { MinusCal } from './MinusCalories';
import { Information } from './Information';
import './App.css';

export function App() {
  const [count, setCount] = useState(0);

  const updateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <div>
        <Information />
      </div>
      <div>
        <h1>Caloric Intake</h1>
        <div>
          <h1 className="calorie-count">{count}</h1>
        </div>
        <div className='add-sub'>
          <AddCal updateCount={updateCount} />
          <MinusCal updateCount={updateCount} />
        </div>
      </div>
    </>
  );
}

export default App;