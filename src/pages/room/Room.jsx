import React, { useEffect, useRef } from 'react'
import "./Room.css"
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SECRET_KEY } from '../../config';

const Room = () => {
  const {roomId} = useParams();
  const videoContainerRef = useRef(null);
  const myMeeting = () =>{
    const appID = APP_ID;
    const serverSecret = SECRET_KEY;
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      roomId,
      Date.now().toString(),
      "Your Name"  
      );
      const zp = ZegoUIKitPrebuilt.create( kitToken );
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
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  }

  useEffect(()=>{
    myMeeting();
  },[]);

  return (
    <div ref={videoContainerRef}>
      
    </div>
  )
}

export default Room