import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="content">
          <div className="form-group">
            <label for="exampleInputEmail">Number of players</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" min="0" />
            <input className="btn btn-primary" type="button" value="Deal" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
