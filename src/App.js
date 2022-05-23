import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import History from './pages/History';
import {IoMenuSharp} from 'react-icons/io5'
import Deposit from './pages/Deposit';
import { GlobalContext, GlobalProvider } from './context/BalanceContext';
import SecureRoute from './components/SecureRoute';
import LoginRedirect from './components/LoginRedirect';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Budget from './pages/Budget';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <GlobalProvider>
    <Router>

      
      <Routes>
        <Route element={<LoginRedirect/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
        <Route element={<SecureRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/deposit" element={<Deposit/>}/>
          <Route path="/budget" element={<Budget/>}/>
          <Route path="/history" element={<History/>}/>
        </Route>
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
