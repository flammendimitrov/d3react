import React from 'react';
import reactLogo from './logo.svg';
import d3Logo from './d3Logo.svg';
import './App.css';
import { Chart } from './Chart/Chart';
import { RefreshButton } from './Controls/RefreshButton';
import { IData } from './Chart/types';

const makeRandomArray = (valueCount: number): IData => {
  const values: IData = [];
  for (let i =0; i < valueCount; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  return values;
};


const App = () => {
  const [data, setData] = React.useState(makeRandomArray(20));

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="react-logo" alt="react" />
        <img src={d3Logo} className="d3-logo" alt="d3" />
      </header>
      <main>
        <p>Letting React and D3.js play together</p>
        <RefreshButton onRefresh={() => setData(makeRandomArray(Math.floor(Math.random() * 20) + 2))} />
        <Chart data={data} />
      </main>
    </div>
  );
}

export default App;
