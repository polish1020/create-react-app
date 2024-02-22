import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRequest } from 'ahooks';

async function getHello() {
  const response = await fetch('/api/hello');
  return response.json();
}

function App() {
  const { data, error, loading } = useRequest(getHello);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <p>loading...</p> : <p>Hello {data.text}</p>}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
