# Firebase Authentication Setup Guide

This guide will help you set up Firebase authentication with email passwordless sign-in and Google sign-in for your React application.

## Prerequisites

1. A Firebase project
2. React application with Firebase SDK installed

## Installation

Install the required Firebase dependencies:

```bash
npm install firebase
```

## Firebase Project Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard

### 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab

### 3. Enable Email/Password Authentication

1. Click on "Email/Password"
2. Enable "Email link (passwordless sign-in)"
3. Save the changes

### 4. Enable Google Authentication

1. Click on "Google"
2. Enable Google sign-in
3. Add your authorized domain (e.g., `localhost` for development)
4. Save the changes

### 5. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" and select "Web"
4. Register your app and copy the configuration

## Environment Variables

Create a `.env` file in your project root and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Usage

### Basic Usage

Import and use the authentication functions:

```jsx
import { useAuth } from './hooks/useAuth';

function MyComponent() {
  const { 
    user, 
    loading, 
    sendSignInLink, 
    signInWithGoogle, 
    signOut 
  } = useAuth();

  // Your component logic
}
```

### Email Passwordless Sign-in

```jsx
const handleEmailSignIn = async (email) => {
  try {
    await sendSignInLink(email);
    console.log('Check your email for the sign-in link!');
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Google Sign-in

```jsx
const handleGoogleSignIn = async () => {
  try {
    await signInWithGoogle('popup'); // or 'redirect'
    console.log('Signed in with Google!');
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Sign Out

```jsx
const handleSignOut = async () => {
  try {
    await signOut();
    console.log('Signed out successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

## Available Functions

### From `firebase.js`

- `sendEmailLink(email, actionCodeSettings)` - Send passwordless sign-in link
- `signInWithEmailLink(email)` - Complete email link sign-in
- `isEmailLink()` - Check if current URL is a sign-in link
- `signInWithGoogle(method)` - Sign in with Google (popup or redirect)
- `signOutUser()` - Sign out the current user
- `onAuthStateChange(callback)` - Listen to auth state changes
- `getCurrentUser()` - Get the current authenticated user

### From `useAuth` Hook

- `user` - Current user object (null if not authenticated)
- `loading` - Loading state
- `error` - Error state
- `isAuthenticated` - Boolean indicating if user is authenticated
- `sendSignInLink(email, settings)` - Send email link
- `signInWithLink(email)` - Complete email link sign-in
- `signInWithGoogle(method)` - Google sign-in
- `signOut()` - Sign out
- `checkEmailLink()` - Check if URL is a sign-in link
- `getStoredEmail()` - Get stored email from localStorage

## Example Component

See `src/components/AuthExample.jsx` for a complete example of how to use all authentication methods.

## Security Considerations

1. **Environment Variables**: Never commit your Firebase config to version control
2. **Authorized Domains**: Configure authorized domains in Firebase Console
3. **Email Templates**: Customize email templates in Firebase Console
4. **Rate Limiting**: Firebase has built-in rate limiting for security

## Troubleshooting

### Common Issues

1. **"Missing or insufficient permissions"**
   - Check if your Firebase project has the correct rules
   - Ensure you're using the correct API key

2. **"Invalid API key"**
   - Verify your environment variables are set correctly
   - Check if the API key matches your Firebase project

3. **"Popup blocked"**
   - Ensure popups are allowed in the browser
   - Consider using redirect method instead

4. **"Email link expired"**
   - Email links expire after a certain time
   - Request a new link

### Debug Mode

Enable debug mode to see detailed logs:

```javascript
// In your firebase.js
if (process.env.NODE_ENV === 'development') {
  console.log('Firebase config:', firebaseConfig);
}
```

## Next Steps

1. Set up Firebase Security Rules
2. Configure email templates
3. Add user profile management
4. Implement role-based access control
5. Add additional authentication providers (Facebook, Twitter, etc.) 