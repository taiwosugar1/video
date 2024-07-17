// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Room from './pages/room/Room';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <a href='tel: +234-802-929-9901'>
                 <div className='side-box'>
                    <h6><FaPhone/><br/> Diamond</h6>
                </div> </a>
                <a href='https://wa.me/2348029299901'> 
                  <div className='side-box2'>
                    <h6><FaWhatsapp/><br/>Book Now</h6> 
                </div></a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;