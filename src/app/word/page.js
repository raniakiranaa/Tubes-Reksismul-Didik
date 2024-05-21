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
            <div className="text-main-text semibold-64 pb-8">Wordplay 1.0 - Animals</div>
            <div className="w-full bg-body-text rounded-full h-3 dark:bg-gray-700">
                <div className="bg-positive-2 h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="text-main-text medium-32 pt-4">What is this?</div>
            <div className="flex flex-row ml-32">
                <div>
                    <Image src={img} alt="icon" height={480}/>
                </div>
                <div className="flex justify-center flex-col ml-16">
                    <div className="flex flex-row space-x-8">
                        <RoundIconButton onClick={ handleSoundClick } />
                        <div className="flex flex-col justify-center">
                            <div className="bold-20 text-main-text">
                                Anjing
                            </div>
                            <div className="text-sub-text regular-20">
                                Dog
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 space-x-8">
                        <RoundIconButton onClick={ handleSoundClick } />
                        <div className="flex flex-col justify-center">
                            <div className="bold-20 text-main-text">
                                Anak Anjing
                            </div>
                            <div className="text-sub-text regular-20">
                                Puppy
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 space-x-8">
                        <RoundIconButton onClick={ handleSoundClick } />
                        <div className="flex flex-col justify-center">
                            <div className="bold-20 text-main-text">
                                Hewan
                            </div>
                            <div className="text-sub-text regular-20">
                                Animal
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-8 space-x-8">
                        <RoundIconButton onClick={ handleSoundClick } />
                        <div className="flex flex-col justify-center">
                            <div className="bold-20 text-main-text">
                                Hewan Peliharaan
                            </div>
                            <div className="text-sub-text regular-20">
                                Pet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-4">
                <Button title="Back" type="medium-secondary"/>
                <Button title="Next" type="medium"/>
            </div>
        </div>
    );
}
