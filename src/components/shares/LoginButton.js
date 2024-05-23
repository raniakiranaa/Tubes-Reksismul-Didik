import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginButton = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Berhasil:', response);
    // Lakukan tindakan yang sesuai dengan respons login
    window.location.href = '/home'; // Mengarahkan pengguna ke halaman beranda setelah login berhasil
  };

  const handleLoginFailure = (error) => {
    console.error('Login Gagal:', error);
  };

  return (

    <div style={{ width: '400', height: '100px' }}> {/* Adjust width and height as needed */}
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

