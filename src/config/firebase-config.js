
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDwjss33oQ85LMTL-qPpuxhQww29KDVSjQ",
  authDomain: "intro-firebase-4e935.firebaseapp.com",
  projectId: "intro-firebase-4e935",
  storageBucket: "intro-firebase-4e935.appspot.com",
  messagingSenderId: "781238648233",
  appId: "1:781238648233:web:8c7d09d5af0704ba4d98b8",
  measurementId: "G-ECS2X4J7DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);