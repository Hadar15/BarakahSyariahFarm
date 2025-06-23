import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthCallback = () => {
  const [message, setMessage] = useState('Verifying your sign-in link...');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signInWithLink, getStoredEmail, checkEmailLink } = useAuth();

  useEffect(() => {
    if (checkEmailLink()) {
      const email = getStoredEmail();
      if (!email) {
        setError('Could not find email for sign-in. Please try again from the same device and browser.');
        return;
      }
      signInWithLink(email)
        .then(() => {
          setMessage('Sign-in successful! Redirecting to your dashboard...');
          window.localStorage.removeItem('emailForSignIn');
          setTimeout(() => navigate('/dashboard'), 2000);
        })
        .catch((err) => {
          setError(`Failed to sign in: ${err.message}. Please try again.`);
        });
    } else {
       setError('This is not a valid sign-in link.');
    }
  }, [checkEmailLink, getStoredEmail, navigate, signInWithLink]);

  return (
    <div className="auth-callback-container">
      <h2>Sign-In Completion</h2>
      {error ? (
        <p className="auth-callback-error">{error}</p>
      ) : (
        <p>{message}</p>
      )}
      <a href="/" className="auth-callback-home-link">Go to Homepage</a>
    </div>
  );
};

export default AuthCallback; 