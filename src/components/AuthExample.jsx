import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthExample = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { 
    user, 
    loading, 
    error, 
    sendSignInLink, 
    signInWithLink, 
    signInWithGoogle, 
    signOut, 
    checkEmailLink,
    getStoredEmail,
    isAuthenticated 
  } = useAuth();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLink(email);
      setMessage('Check your email for the sign-in link!');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle('popup');
      setMessage('Signed in with Google successfully!');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage('Signed out successfully!');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  // Check if user is returning from email link
  React.useEffect(() => {
    if (checkEmailLink()) {
      const storedEmail = getStoredEmail();
      if (storedEmail) {
        signInWithLink(storedEmail)
          .then(() => {
            setMessage('Signed in successfully!');
          })
          .catch((err) => {
            setMessage(`Error: ${err.message}`);
          });
      }
    }
  }, [checkEmailLink, getStoredEmail, signInWithLink]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Authentication</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {message && (
        <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          {message}
        </div>
      )}

      {!isAuthenticated ? (
        <div>
          {/* Email Passwordless Sign-in */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Email Passwordless Sign-in</h3>
            <form onSubmit={handleEmailSignIn} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Sign-in Link
              </button>
            </form>
          </div>

          {/* Google Sign-in */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Google Sign-in</h3>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
            <p className="text-gray-600">
              {user.email}
            </p>
            {user.displayName && (
              <p className="text-gray-600">{user.displayName}</p>
            )}
          </div>
          
          <button
            onClick={handleSignOut}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthExample; 