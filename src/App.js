import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <header className="App-header">
        <div className="content">
          <div className="input-group">
            <input placeholder="Number of players" value={input} onChange={e => setInput(e.target.value)} type="number" className="form-control" min="0" />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => alert(input)} type="button">Go</button>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
