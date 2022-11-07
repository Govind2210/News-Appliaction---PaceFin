import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCR4DNkTl0adQkxANJr5QlL6A1_9laFm90",
  authDomain: "react-auth-b1e0d.firebaseapp.com",
  projectId: "react-auth-b1e0d",
  storageBucket: "react-auth-b1e0d.appspot.com",
  messagingSenderId: "845973368227",
  appId: "1:845973368227:web:2a3d46a3415bfe9dec7e16",
  measurementId: "G-J4FYRGLQ63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

