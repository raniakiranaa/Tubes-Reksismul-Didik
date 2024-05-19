import React from 'react';
import Image from 'next/image';
import logo from '/public/icons/logo/logo.png'

export const Footer = () => {
    return (
        <footer className="bg-blue-2 p-4 text-center" style={{ "height": 211 }}>
            <div className="flex flex-column items-center justify-between pt-8 px-8">
                <Image src={logo} style={{ "width": 200 }}/>
                <div className="flex flex-col text-right">
                    <span className="text-white block">
                        Tugas Besar <span className="font-bold">II4051 Rekayasa Sistem Multimedia</span>
                    </span>
                    <span className="text-white text-regular-20 pt-8">© Uhuy 2024</span>
                </div>
                
            </div>
        </footer>
    );
}