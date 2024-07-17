import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const[roomId, setRoomId] = useState();
    const navigate = useNavigate();
    const handleRoomIdGenerate =()=> {
        const randomId = Math.random().toString(36).substring(2, 9);
        const timestamp = Date.now().toString().substring(-4);
        setRoomId(randomId + timestamp);
    };

const handleOneOnOneCall = () => {
    if(!roomId){
        alert("Please Generate Room ID");
        return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
}

const handleGroupCall = () => {
    if(!roomId){
        alert("Please Generate Room ID");
        return;
    }
    navigate(`room/${roomId}?type=group-call`);
}

  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-content">
            <h1 className="home-title">Wecome to <b>Multibrand</b> <br/>
            Video Calling App</h1>
            <p className="home-subtitle">start a video call with a randomly generated room ID</p>
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
              <button className="call-button" disabled={!roomId} onClick={handleOneOnOneCall}>one on one Call</button>
              <button className="call-button" disabled={!roomId} onClick={handleGroupCall}>Group Call</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home