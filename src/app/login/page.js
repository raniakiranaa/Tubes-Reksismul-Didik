// src/app/login/page.js
"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import logo from '/public/icons/logo/logo.png';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

// Menggunakan dynamic import untuk komponen yang hanya perlu di-load di sisi klien
const LoginButton = dynamic(() => import("../../components/shares/LoginButton"), { ssr: false });

const clientId = "675289012964-afc4o7d2r3fbj46d60migjojvg1stdec.apps.googleusercontent.com";

export default function LoginPage() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }

    if (typeof window !== "undefined") {
      gapi.load('client:auth2', start);
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex items-center justify-center w-1/2 bg-blue-2">
        <div className="text-white text-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 p-12">
        <div className="text-main-text text-left">
          <div className="semibold-64 mb-0 flex justify-center">🔒 Log In</div>
          <p className="regular-16 mb-8">Enter your credentials to access your account.</p>
          <div className="flex justify-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
