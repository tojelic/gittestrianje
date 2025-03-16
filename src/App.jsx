import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Hardcoded current time (Example: "2025-03-16 14:30:00")
  const hardcodedTime = '2025-03-16 12:44:00';

  return (
    <div className="app-container">
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo vite-logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react-logo" alt="React logo" />
        </a>
      </div>

      <h1 className="title">Welcome to Vite + React</h1>

      <div className="card">
        <button className="count-button" onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p className="description">
          Edit <code>src/App.jsx</code> and save to see the changes!
        </p>
      </div>

      <p className="hardcoded-time">
        Current Hardcoded Time: <span>{hardcodedTime}</span>
      </p>

      <p className="read-the-docs">
        Explore more by clicking on the Vite and React logos above
      </p>
      <p className="read-the-docs">
        <strong>ovo je dev grana</strong>
      </p>
    </div>
  );
}

export default App;
