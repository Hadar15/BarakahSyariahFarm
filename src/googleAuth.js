// Google OAuth Configuration
// Import environment variables for Google OAuth credentials

// Check if required environment variables are set
const requiredEnvVars = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_GOOGLE_REDIRECT_URI || 'http://localhost:3000/auth/callback'
};

// Validate environment variables
const validateEnvVars = () => {
  const missing = [];
  if (!requiredEnvVars.clientId) missing.push('REACT_APP_GOOGLE_CLIENT_ID');
  if (!requiredEnvVars.clientSecret) missing.push('REACT_APP_GOOGLE_CLIENT_SECRET');
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}. Please check your .env file.`);
  }
};

const GOOGLE_CONFIG = {
  clientId: requiredEnvVars.clientId,
  clientSecret: requiredEnvVars.clientSecret,
  redirectUri: requiredEnvVars.redirectUri,
  scope: 'openid email profile',
  responseType: 'code'
};

// Google OAuth URL builder
export const buildGoogleAuthUrl = () => {
  try {
    validateEnvVars();
    
    const params = new URLSearchParams({
      client_id: GOOGLE_CONFIG.clientId,
      redirect_uri: GOOGLE_CONFIG.redirectUri,
      scope: GOOGLE_CONFIG.scope,
      response_type: GOOGLE_CONFIG.responseType,
      access_type: 'offline',
      prompt: 'consent'
    });
    
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  } catch (error) {
    console.error('Failed to build Google Auth URL:', error.message);
    throw error;
  }
};

// Handle Google OAuth callback
export const handleGoogleCallback = async (code) => {
  try {
    validateEnvVars();
    
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: GOOGLE_CONFIG.clientId,
        client_secret: GOOGLE_CONFIG.clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: GOOGLE_CONFIG.redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (tokenData.error) {
      throw new Error(`Token exchange failed: ${tokenData.error}`);
    }

    // Get user info using access token
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userResponse.json();
    
    return {
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      user: userData
    };
  } catch (error) {
    console.error('Google OAuth error:', error);
    throw error;
  }
};

// Initialize Google OAuth
export const initGoogleAuth = () => {
  try {
    validateEnvVars();
    console.log('Google OAuth initialized successfully');
    return true;
  } catch (error) {
    console.error('Google OAuth initialization failed:', error.message);
    return false;
  }
};

// Get Google configuration (for debugging or other uses)
export const getGoogleConfig = () => {
  try {
    validateEnvVars();
    return {
      clientId: GOOGLE_CONFIG.clientId,
      redirectUri: GOOGLE_CONFIG.redirectUri,
      scope: GOOGLE_CONFIG.scope,
      responseType: GOOGLE_CONFIG.responseType,
      clientSecret: '***' // Hide client secret for security
    };
  } catch (error) {
    console.error('Failed to get Google config:', error.message);
    return null;
  }
};

export default {
  buildGoogleAuthUrl,
  handleGoogleCallback,
  initGoogleAuth,
  getGoogleConfig
};
