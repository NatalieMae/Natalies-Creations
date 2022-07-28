import React, { Component } from 'react';
import Navbar from './Navbar';
import Flowers from './pages/Flowers';
import Home from './pages/Home';
import About from './pages/About';
import Contactinfo from './pages/Contact';
import logo from './LilyRedOrange.jpeg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './styles.css';
import './App.css';
// import Home from './pages/Flowers';



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/flowers":
      component = <Flowers />
      break
    case "/about":
      component = <About />
      break
    case "/home":
      component = <Home />
      break
    case "/contact":
      component = <Contactinfo />
      break
}
    return (



<div className="App">
  <header className="App-header">
    <div className='nav-container'>
      <Navbar />
      {component}
    </div>
  <img src={logo} className="App-logo" alt="logo" />
          <div className='Home-Page'>
              <h1>Photos by Natalie</h1>
              <h2>Please contact me with requests!</h2>
          </div>
      </header>
    </div>
    )
}

export default App;
