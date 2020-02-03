import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from './Chart/Chart';
import { IData } from './Chart/types';

const makeRandomArray = (valueCount: number): IData => {
  const values: IData = [];
  for (let i =0; i < valueCount; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  return values;
};

const App = () => {
  const [data] = React.useState(makeRandomArray(20));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>Letting React and D3.js play together</p>
        <Chart data={data} />
      </main>
    </div>
  );
}

export default App;
