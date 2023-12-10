// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBDPKU2eNtknR4pZDB-Iz3gUwRqhuhEIkg",
  authDomain: "collegehook-41aa9.firebaseapp.com",
  projectId: "collegehook-41aa9",
  storageBucket: "collegehook-41aa9.appspot.com",
  messagingSenderId: "554806779306",
  appId: "1:554806779306:web:395086f7c54cf8aa3adfd3",
  measurementId: "G-SJ8HGD4QT1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()