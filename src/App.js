import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import {IoMenuSharp} from 'react-icons/io5'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Router>
      <Navbar menuOpen={menuOpen}/>
      <IoMenuSharp className='shownav-btn' onClick={()=>{setMenuOpen(!menuOpen)}}/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
