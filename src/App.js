// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Register from './pages/authentication/Register';
import Login from './pages/authentication/Login';
import Room from './pages/room/Room';
import Home from './pages/home/Home';
import ProtectedRoute from './pages/authentication/ProtectedRoute';



const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/home" element={ 
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/room/:roomId" element={
        <ProtectedRoute>
          <Room />
         </ProtectedRoute> } />
       
      </Routes>
    </Router>
  );
};

export default App;