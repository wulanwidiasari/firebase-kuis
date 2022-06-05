// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwvkysKDSfyWAUjgnIMZUNDV3mnCJ502s",
  authDomain: "kuis-02-17d72.firebaseapp.com",
  databaseURL: "https://kuis-02-17d72-default-rtdb.firebaseio.com",
  projectId: "kuis-02-17d72",
  storageBucket: "kuis-02-17d72.appspot.com",
  messagingSenderId: "607584914579",
  appId: "1:607584914579:web:3c214b391fe8da03029166",
  measurementId: "G-M6SBKJVVYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);