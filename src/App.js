import React, { useState } from 'react';
import ReactList from 'react-list';
import LoadingImage from './loading.gif';
import './App.css';

const URL = 'https://playing-cards-backend.herokuapp.com';

const App = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = () => {
    setIsLoading(true);
    setError(null);
    setData([]);

    fetch(`${URL}/deal?number=${input}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setData(data);
        }
      })
      .catch(() => setError('Irregularity occurred'))
      .finally(() => setIsLoading(false))
  }

  return (
    <div>
      <header className="App-header">
        <div className="content">
          <div className="input-group">
            <input placeholder="Number of players" onKeyUp={e => e.key === 'Enter' && callApi()} value={input} onChange={e => setInput(e.target.value)} type="number" className="form-control" min="0" />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={() => callApi()} type="button">Go</button>
            </span>
          </div>

          {!!error && (
            <div style={{ color: 'red' }}>
              {error}
            </div>
          )}
          {isLoading && (
            <center>
              <img alt="loading" className="loading" src={LoadingImage} />
            </center>
          )}
        </div>
        {data.length > 0 && (
          <div className="result">
            <ReactList
              itemRenderer={(index, key) => {
                const isOdd = index % 2 === 1;
                const item = data[index];
                let value = 'No card';
                if (item.length > 0) {
                  value = item.map(i => `${i[1]}-${i[0]}, `);
                }
                return (
                  <div key={key} style={{ backgroundColor: isOdd ? '#eeeeee' : '#dddddd' }}>
                    {`Player #${index + 1}: `}
                    <span className="value">{value}</span>
                  </div>
                )
              }}
              length={data.length}
              type='uniform'
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
