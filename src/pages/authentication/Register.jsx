// src/components/Register.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      navigate('/');

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
          <h1 className="home-head">Welcome to <b>Multibrand</b> <br />
          Video Calling App</h1>
      <div className="auth-card">
        <h2 className="auth-title">Register</h2>
        <input
          type="email"
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleRegister}>Register</button>
      </div>
      
      <p> Already have an account ? <Link to="/">Login</Link></p>

    </div>
  );
};

export default Register;