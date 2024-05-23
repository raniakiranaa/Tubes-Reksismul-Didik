import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginButton = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Berhasil:', response);
    window.location.href = '/home';
  };

  const handleLoginFailure = (error) => {
    console.error('Login Gagal:', error);
  };

  return (

    <div style={{ width: '400', height: '100px' }}>
      <GoogleOAuthProvider clientId="675289012964-afc4o7d2r3fbj46d60migjojvg1stdec.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginButton;

