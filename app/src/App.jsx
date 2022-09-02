import './App.css';
import React from 'react';
import Navbar from './components/navComponent/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about.jsx';
import Commission from './pages/commission.jsx';
import Inventory from './pages/inventory.jsx';
import KbBuild from './pages/kbBuild.jsx';
import PcBuild from './pages/pcBuild.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/pcbuild' element={<PcBuild/>} />
        <Route path='/kbbuild' element={<KbBuild/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/commission' element={<Commission/>} />
      </Routes>
    </Router>
  );
}

export default App;
