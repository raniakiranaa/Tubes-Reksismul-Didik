// src/pages/_app.js
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "675289012964-afc4o7d2r3fbj46d60migjojvg1stdec.apps.googleusercontent.com";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
