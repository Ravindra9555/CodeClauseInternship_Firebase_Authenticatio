import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvyOLEqhR_27k-SWFtmlBKv4mVye2j3Q8",
  authDomain: "fir-auth-c6c3b.firebaseapp.com",
  projectId: "fir-auth-c6c3b",
  storageBucket: "fir-auth-c6c3b.appspot.com",
  messagingSenderId: "589085487927",
  appId: "1:589085487927:web:db26363eef2c59220ea0b2",
  measurementId: "G-4ST7Q572V1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
