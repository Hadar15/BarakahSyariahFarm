import { useState, useEffect } from 'react';
import { 
  auth, 
  sendEmailLink, 
  signInWithEmailLink, 
  isEmailLink,
  signInWithGoogle, 
  signOutUser, 
  onAuthStateChange,
  getCurrentUser
} from '../firebase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const sendSignInLink = async (email, actionCodeSettings = {}) => {
    try {
      setError(null);
      const result = await sendEmailLink(email, actionCodeSettings);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signInWithLink = async (email) => {
    try {
      setError(null);
      const result = await signInWithEmailLink(email);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signInWithGoogleAuth = async (method = 'popup') => {
    try {
      setError(null);
      const result = await signInWithGoogle(method);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const result = await signOutUser();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const checkEmailLink = () => {
    return isEmailLink();
  };

  const getStoredEmail = () => {
    return window.localStorage.getItem('emailForSignIn');
  };

  return {
    user,
    loading,
    error,
    sendSignInLink,
    signInWithLink,
    signInWithGoogle: signInWithGoogleAuth,
    signOut,
    checkEmailLink,
    getStoredEmail,
    isAuthenticated: !!user
  };
}; 