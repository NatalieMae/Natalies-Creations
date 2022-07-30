
import Navbar from './Navbar';
import Flowers from './pages/Flowers';
import Home from './pages/Home';
import About from './pages/About';
import Contactinfo from './pages/Contact';
import logo from './LilyRedOrange.jpeg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './styles.css';
import './App.css';
import { Route, Routes} from 'react-router-dom'




function App() {

    return (


<div className="App">
    <div className='nav-container'>
      <Navbar />
    </div>
    <Routes>
      <Route path='/finalproject/src/pages/Home.js' element={<Home />} />
      <Route path='/finalproject/src/pages/Flowers.js' element={<Flowers />} />
      <Route path='/finalproject/src/pages/About.js' element={<About />} />
      <Route path='/finalproject/src/pages/Contact.js' element={<Contactinfo />} />
    </Routes>
</div>
  )
}

export default App;
