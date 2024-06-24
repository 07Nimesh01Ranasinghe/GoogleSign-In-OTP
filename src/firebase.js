import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBKivEu4-9n6sRblfCfpUa3-rj7SZL748E",
  authDomain: "sign-in-48540.firebaseapp.com",
  projectId: "sign-in-48540",
  storageBucket: "sign-in-48540.appspot.com",
  messagingSenderId: "1024428646692",
  appId: "1:1024428646692:web:af0abe6b37d3efb53ed3b1",
  measurementId: "G-9HZT7MF1N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };