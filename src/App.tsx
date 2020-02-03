import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from './Chart/Chart';

const App = () => {
  const [data, setData] = React.useState([79.6, 87.9, 94.6, 100.5, 105.5, 110.5, 115.7, 121, 126.6, 132.5, 138.4, 143.3, 146.7, 148.7, 149.8, 150.3, 150.6, 150.9]);

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
