// src/components/Room.js
import React, { useEffect, useRef } from 'react';
import "./Room.css";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SECRET_KEY } from '../../config';

const Room = () => {
  const { roomId } = useParams();
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (!isRoomIdValid(roomId)) {
      alert("Room ID is no longer valid. Please generate a new one.");
      return;
    }
    myMeeting();
  }, []);

  const isRoomIdValid = (id) => {
    const [randomId, timestamp] = id.split('_');
    const oneHour = 60 * 60 * 1000; // One hour in milliseconds
    return (Date.now() - parseInt(timestamp, 10)) < oneHour;
  };

  const myMeeting = () => {
    const appID = APP_ID;
    const serverSecret = SECRET_KEY;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Your Name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: 'Video link',
          url: window.location.protocol + '//' + 
               window.location.host + window.location.pathname
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div ref={videoContainerRef} className='room'>
    </div>
  );
};

export default Room;