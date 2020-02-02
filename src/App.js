import React from "react";

function App() {
  const HOME_URL = 'https://hhtrung.github.io/'
  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO MY REPOSITORIES</h1>
        <ol>
          <li>
            <a href={`${HOME_URL}tic-tac-toe`}>Tic-tac-toe</a>
          </li>
          <li>
            <a href={`${HOME_URL}Forecast-Weather/`}>Forecast Weather</a>
          </li>
        </ol>
      </header>
    </div>
  );
}

export default App;
