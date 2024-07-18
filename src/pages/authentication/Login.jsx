// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
          <h1 className="home-head">Welcome to <b>Multibrand</b> <br />
          Video Calling App</h1>
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
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
        <button className="auth-button" onClick={handleLogin}>Login</button>
      </div>
      <p> Dont have an account ? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;