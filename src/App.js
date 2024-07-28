import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login';
import SignupPage from './Components/Signup';
import Navbar from './Components/Navbarpage';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
    
      <div className='App'>
        <Navbar/>
      <Routes>
  
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
        
        
        
      </Routes>
   </div>
    </Router>

  );
}

export default App;