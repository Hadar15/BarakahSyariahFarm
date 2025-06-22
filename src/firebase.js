// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailLink as firebaseSignInWithEmailLink, 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Wrapper functions for authentication
const sendEmailLink = async (email, actionCodeSettings = {}) => {
  const defaultSettings = {
    url: window.location.origin + '/auth/callback',
    handleCodeInApp: true,
    ...actionCodeSettings
  };
  
  return sendSignInLinkToEmail(auth, email, defaultSettings);
};

const signInWithEmailLink = async (email) => {
  return firebaseSignInWithEmailLink(auth, email, window.location.href);
};

const isEmailLink = () => {
  return isSignInWithEmailLink(auth, window.location.href);
};

const signInWithGoogle = async (method = 'popup') => {
  const provider = new GoogleAuthProvider();
  if (method === 'popup') {
    return signInWithPopup(auth, provider);
  } else {
    return signInWithRedirect(auth, provider);
  }
};

const signOutUser = async () => {
  return signOut(auth);
};

const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

const getCurrentUser = () => {
  return auth.currentUser;
};

// Export Firebase instances
export { db, auth };

// Export Firebase Auth functions for use in separate files
export {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
};

// Export wrapper functions
export {
  sendEmailLink,
  signInWithEmailLink,
  isEmailLink,
  signInWithGoogle,
  signOutUser,
  onAuthStateChange,
  getCurrentUser
};

