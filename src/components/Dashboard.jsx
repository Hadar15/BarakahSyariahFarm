import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import the db instance

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        } else {
          setError('Could not find user profile.');
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError('Failed to load user profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  if (loading) {
    return <div className="dashboard-container"><h2>Loading Dashboard...</h2></div>;
  }

  if (error) {
    return <div className="dashboard-container"><h2>{error}</h2></div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleSignOut} className="dashboard-signout-button">
          Sign Out
        </button>
      </header>
      <main className="dashboard-content">
        <div className="profile-header">
          {userProfile?.profileImage && (
            <img src={userProfile.profileImage} alt="Profile" className="profile-avatar" />
          )}
          <h2>Welcome, {userProfile?.displayName || user?.email}!</h2>
        </div>
        <p>This is your personal dashboard. More features will be added soon!</p>
        <div className="user-info">
          <h3>Your Information</h3>
          <p><strong>Email:</strong> {userProfile?.email}</p>
          <p><strong>User ID:</strong> {userProfile?.uid}</p>
          <p><strong>Profile Created:</strong> {userProfile?.createdAt?.toDate().toLocaleDateString()}</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 