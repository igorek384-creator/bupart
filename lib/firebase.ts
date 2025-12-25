import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAW4fJHWWEZv61cxiI80oFkzsOZQJWaYYA",
  authDomain: "bupart-98937.firebaseapp.com",
  projectId: "bupart-98937",
  storageBucket: "bupart-98937.firebasestorage.app",
  messagingSenderId: "465889862286",
  appId: "1:465889862286:web:8e15d6bdd1156e8c9a9fdf",
  measurementId: "G-7HRV3EKYV2"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);