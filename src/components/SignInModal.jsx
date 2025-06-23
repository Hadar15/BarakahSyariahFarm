"use client"

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { 
    user, 
    loading, 
    error, 
    sendSignInLink, 
    signInWithGoogle, 
    isAuthenticated,
    signOut 
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      window.localStorage.setItem('emailForSignIn', email);
      await sendSignInLink(email);
      setMessage('Link masuk telah dikirim ke email Anda!');
    } catch (err) {
      window.localStorage.removeItem('emailForSignIn');
      setMessage(`Error: ${err.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle('popup');
      setMessage('Berhasil masuk dengan Google!');
      onClose();
      navigate('/dashboard');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage('Berhasil keluar!');
      onClose();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="ml-3 text-gray-600">Memuat...</span>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 className="modal-title">{isAuthenticated ? 'Profil Saya' : 'Masuk'}</h2>
              <button onClick={onClose} className="modal-close-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="modal-body">
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              
              {message && (
                <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-md">
                  {message}
                </div>
              )}

              {!isAuthenticated ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg">Masuk dengan Email</h3>
                    <form onSubmit={handleEmailSignIn} className="space-y-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email Anda"
                        className="modal-input"
                        required
                      />
                      <button
                        type="submit"
                        className="modal-button modal-button-primary"
                      >
                        Kirim Link Masuk
                      </button>
                    </form>
                  </div>

                  <div className="modal-separator">
                    <div className="modal-separator-line"></div>
                    <span className="modal-separator-text">atau</span>
                  </div>

                  <div>
                    <h3 className="text-lg">Masuk dengan Google</h3>
                    <button
                      onClick={handleGoogleSignIn}
                      className="modal-button modal-button-secondary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Masuk dengan Google
                    </button>
                  </div>

                  <div className="text-sm">
                    <p>Dengan masuk, Anda menyetujui syarat dan ketentuan kami</p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Selamat Datang!</h3>
                    <p className="text-gray-600">
                      {user.email}
                    </p>
                    {user.displayName && (
                      <p className="text-gray-600">{user.displayName}</p>
                    )}
                  </div>
                  
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors font-medium"
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal; 