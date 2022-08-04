
import Navbar from './Navbar';
import Flowers from './pages/Flowers/Flowers';
import FlowerAlbum from './pages/Flowers/FlowerAlbum';
import Home from './pages/Home';
import About from './pages/About';
import UserContactForm from './pages/ContactPages/UserContactForm';
import PhotoUpLoader from './pages/Flowers/PhotoUpLoader';
import SignInSide from './SignInSide';
// import logos from './Photos/logos';
// import logo from './LilyRedOrange.jpeg';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './styles.css';
// import './App.css';
import { Route, Routes} from 'react-router-dom';
import React from 'react';




function App() {

    return (
    <>

    <div className="App">
      <Navbar />
      <br/>
      <div className='Nav-container'>
        <Routes>
          <Route path='/finalproject/src/pages/Flowers/FlowerAlbum.js' element={<FlowerAlbum />} />
          <Route path='/finalproject/src/pages/Home.js' element={<Home />} />
          <Route path='/finalproject/src/pages/Flowers.js' element={<Flowers />} />
          <Route path='/finalproject/src/pages/About.js' element={<About />} />
          <Route path='/finalproject/src/pages/UserContactForm.js' element={<UserContactForm />} />
        </Routes>
      </div>
      <div className='Photo-container'>
        <Routes>
          <Route path='/finalproject/src/pages/PhotoUpLoader.js' element={<PhotoUpLoader />} />
        </Routes>
        <Routes>
          <Route path='/finalproject/src/pages/ContactPages/UserContactForm.js' element={<UserContactForm />} />
          <Route path='/finalproject/src/SignInSide.js' element={<SignInSide />} />
        </Routes>
      </div>
    </div>
    </>
  )
}


export default App;
