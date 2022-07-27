import React from 'react';
import logo from './LilyRedOrange.jpeg';
// import Navbar from './Navbar';
import './styles.css';
import './App.css';


function App() {
  // const [setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // },
  // );

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <Navbar /> */}
            <div className='container'>
              <article>
                {/* <h1></h1> */}
              </article>
            </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
          <div className='Home-Page'>
              <h1>Photos by Natalie</h1>
              <h2>Please contact me with requests!</h2>
          </div>
      </header>
    </div>
  );
}

export default App;
