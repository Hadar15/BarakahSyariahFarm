/**
 * The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
 * This file uses the v2 SDK with Node.js 23 compatibility.
 *
 * @see https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK.
// This is required to access Firestore.
admin.initializeApp();

/**
 * A Cloud Function that triggers whenever a new user is created in Firebase Authentication.
 * It creates a corresponding user profile document in Firestore.
 */
exports.createUserProfile = functions.auth.user().onCreate(async (user) => {
  const { email, uid, displayName, photoURL } = user;

  const userProfile = {
    uid: uid,
    email: email,
    displayName: displayName || (email ? email.split('@')[0] : 'User'),
    profileImage: photoURL || (email ? `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(email)}` : null),
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const userDocRef = admin.firestore().collection('users').doc(uid);

  try {
    await userDocRef.set(userProfile);
    console.log(`Successfully created Firestore profile for user: ${uid}`);
  } catch (error) {
    console.error(`Error creating Firestore profile for user: ${uid}`, error);
  }
  return null;
});
