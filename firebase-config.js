// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWXFJ9AXPmWldZ3tRgQMhEjJZJNvxDW-I",
  authDomain: "proyecto3-621ae.firebaseapp.com",
  projectId: "proyecto3-621ae",
  storageBucket: "proyecto3-621ae.firebasestorage.app",
  messagingSenderId: "759156275154",
  appId: "1:759156275154:web:e576ec4b045e30f6c0fa0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // <- Firestore exportado
