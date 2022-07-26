import React from 'react';
import logo from './LilyRedOrange.jpeg';
import './Nav';
import './styles.css';
import './App.css';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  },
  []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className='Home-Page'>
              <h1>Photos by Natalie</h1>
              <h2>Please contact me with requests!</h2>
          </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }*/
  }
      </header>
    </div>
  );
}

export default App;
