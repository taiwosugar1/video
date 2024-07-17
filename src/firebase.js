// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOQkx2Mlddy5ToTRzmI-XDNiYMkttbPU4",
    authDomain: "multibrand-video.firebaseapp.com",
    projectId: "multibrand-video",
    storageBucket: "multibrand-video.appspot.com",
    messagingSenderId: "611535658582",
    appId: "1:611535658582:web:11248891066a489db525f7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);