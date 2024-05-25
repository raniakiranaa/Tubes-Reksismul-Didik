"use client"

import React, { useState } from 'react';
import { Button, RoundIconButton, SpeechButton } from '@/components/shares/button';
import data from '/public/data.json'

export default function App() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(data[0].words)
    const [currentTranslate, setCurrentTranslate] = useState(data[0].translate)
    const [currentProgress, setCurrentProgress] = useState(data[0].progress)
    const [grade, setGrade] = useState(0)
    const [linkPage, setLinkPage] = useState('')

    const handleNextClick = () => {
        if (currentWordIndex < data.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
            setCurrentWord(data[currentWordIndex + 1].words);
            setCurrentTranslate(data[currentWordIndex + 1].translate);
            setCurrentProgress(data[currentWordIndex + 1].progress);
        } else {
            setLinkPage(`/speakresult?grade=${grade}`)
        }
    };

    const handleBackClick = () => {
        if (currentWordIndex > 0) {
            setCurrentWordIndex(currentWordIndex - 1);
            console.log(currentWordIndex -1);
            setCurrentWord(data[currentWordIndex - 1].words)
            setCurrentTranslate(data[currentWordIndex - 1].translate)
            setCurrentProgress(data[currentWordIndex - 1].progress)
        }
    };

    const updateGrade = () => {
        setGrade(prevGrade => prevGrade + 20);
    };

    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="text-main-text semibold-64 pb-8">Speak UP</div>
            <div className="w-full bg-body-text rounded-full h-3 dark:bg-gray-700">
                <div className="bg-positive-2 h-3 rounded-full" style={{ width: currentProgress }}></div>
            </div>
            <div className="text-main-text medium-32 pt-4 pb-8">Click the microphone and read this sentence out loud!</div>
            <div className="ml-16 mt-16">
                <SpeechButton word={currentWord} translate={currentTranslate} updateGrade={updateGrade}/> 
            </div>
            <div className="flex flex-row justify-end space-x-4">
                {/* <Button linkPage="" title="Back" type="medium-secondary" onClick={handleBackClick}/>
                <Button linkPage="" title="Next" type="medium" onClick={handleNextClick}/> */}
                <Button 
                    linkPage="" 
                    title="Back" 
                    type= {currentWordIndex === 0 ? "disabled" : "medium-secondary"} 
                    onClick={handleBackClick} 
                    disabled={currentWordIndex === 0} 
                />
                <Button 
                    linkPage= {linkPage} 
                    title={currentWordIndex === data.length - 1 ? "Finish" : "Next"} 
                    type="medium" 
                    onClick={handleNextClick} 
                />
            </div>
        </div>
    );
}
