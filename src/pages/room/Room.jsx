import React, { useEffect, useRef, useState } from 'react'
import "./Room.css"
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SECRET_KEY } from '../../config';

const Room = () => {
  const { roomId } = useParams();
  const videoContainerRef = useRef(null);
  const [participantCount, setParticipantCount] = useState(0);

  const checkParticipantCount = async () => {
    // Assume you have an API endpoint that returns the number of participants in a room
    const response = await fetch(`/api/rooms/${roomId}/participants`);
    const data = await response.json();
    setParticipantCount(data.count);
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
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      onParticipantJoin: () => {
        checkParticipantCount();
      },
      onParticipantLeave: () => {
        checkParticipantCount();
      },
    });
  };

  useEffect(() => {
    checkParticipantCount();
    if (participantCount < 2) {
      myMeeting();
    } else {
      alert("This room already has two participants.");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participantCount]);

  return (
    
    <div ref={videoContainerRef} className='room'>
    </div>
  );
};

export default Room;