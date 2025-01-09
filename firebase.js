
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPry9hdGpwfAnq2_Z4JCrpLFMF-qQZW_A",
  authDomain: "finetake-f66eb.firebaseapp.com",
  projectId: "finetake-f66eb",
  storageBucket: "finetake-f66eb.firebasestorage.app",
  messagingSenderId: "325330961063",
  appId: "1:325330961063:web:211d00587a8ffc71441182",
  measurementId: "G-Z8TW0GRF4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);