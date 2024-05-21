"use client"

import Image from 'next/image';
import img from '/public/images/word/dog.png';
import { Button, RoundIconButton } from '@/components/shares/button';

export default function App() {
    const handleSoundClick = () => {
        console.log('Sound icon clicked');
        // const audio = new Audio('/path/to/your/sound/file.mp3');
        // audio.play();
    };

    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="text-main-text semibold-64 pb-8">Speak UP 1.0 - Introduction</div>
            <div className="w-full bg-body-text rounded-full h-3 dark:bg-gray-700">
                <div className="bg-positive-2 h-3 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <div className="text-main-text medium-32 pt-4 pb-4">Listen to the words, record yourself saying it, play it over to compare!</div>
            <div className="rounded-xl overflow-hidden shadow-md "  style={{ width: '1170px', height: '496px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                <div className="px-8" style={{ width: '1063px', height: '413px' }}>
                    <div className="h-1/4 flex flex-row justify-between items-center">
                        <div>
                            <div className='text-main-text bold-20 pb-2'>A: Siapa nama kamu?</div>
                            <div className="text-sub-text regular-20">A: What is your name?</div>
                        </div>
                        <div>a</div>
                    </div>
                    <div className="h-1/4 flex flex-row justify-between items-center">
                        <div>
                            <div className='text-main-text bold-20 pb-2'>B: Nama aku Lili.</div>
                            <div className="text-sub-text regular-20">B: My name is Lili</div>
                        </div>
                        <div>a</div>
                    </div>
                    <div className="h-1/4 flex flex-row justify-between items-center">
                        <div>
                            <div className='text-main-text bold-20 pb-2'>A: Aku Lala. Salam kenal!</div>
                            <div className="text-sub-text regular-20">A: I am Lala. It's nice to meet you!</div>
                        </div>
                        <div>a</div>
                    </div>
                    <div className="h-1/4 flex flex-row justify-between items-center">
                        <div>
                            <div className='text-main-text bold-20 pb-2'>B: Senang bertemu denganmu!</div>
                            <div className="text-sub-text regular-20">B: It's nice to meet you too!</div>
                        </div>
                        <div>a</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end items-start space-x-8 pt-12 pr-12">
                <Button linkPage="/word" title="Back" type="medium-secondary"/>
                <Button linkPage="/word" title="Next" type="medium"/>
            </div>
        </div>
    );
}
