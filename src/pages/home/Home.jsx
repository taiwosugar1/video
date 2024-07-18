// src/components/Home.js
import React, { useState } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now();
    const fullRoomId = `${randomId}_${timestamp}`;
    setRoomId(fullRoomId);
  };

  const handleOneOnOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room ID");
      return;
    }
    if (!isRoomIdValid(roomId)) {
      alert("Room ID is no longer valid. Please generate a new one.");
      return;
    }
    navigate(`/room/${roomId}?type=one-on-one`);
  };

  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room ID");
      return;
    }
    if (!isRoomIdValid(roomId)) {
      alert("Room ID is no longer valid. Please generate a new one.");
      return;
    }
    navigate(`/room/${roomId}?type=group-call`);
  };

  const isRoomIdValid = (id) => {
    const [randomId, timestamp] = id.split('_');
    const oneHour = 60 * 60 * 1000; // One hour in milliseconds
    return (Date.now() - parseInt(timestamp, 10)) < oneHour;
  };

  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to <b>Multibrand</b> <br />
            Video Calling App</h1>
          <p className="home-subtitle">Start a video call with a randomly generated room ID</p>
          <div className='room-id-container'>
            <input type="text"
              placeholder='Generate Room ID'
              className='room-id-input'
              value={roomId}
              readOnly
            />
            <button className='generate-button' onClick={handleRoomIdGenerate}>Generate</button>
          </div>
          <div className="call-buttons">
            <button className="call-button" disabled={!roomId} onClick={handleOneOnOneCall}>One on One Call</button>
            <button className="call-button" disabled={!roomId} onClick={handleGroupCall}>Group Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;