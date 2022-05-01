import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import {IoMenuSharp} from 'react-icons/io5'
import Deposit from './pages/Deposit';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Router>
      <Navbar menuOpen={menuOpen}/>
      <IoMenuSharp className='shownav-btn' onClick={()=>{setMenuOpen(!menuOpen)}}/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/deposit" element={<Deposit/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
