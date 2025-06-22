// src/App.js
import React from 'react';
import './App.css';
import HomePage from './views/HomePage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <HomePage />
      </div>
    </AuthProvider>
  );
}

export default App;

