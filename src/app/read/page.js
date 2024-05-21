"use client"

import { useState } from 'react';
import { Button, RoundIconButton } from '@/components/shares/button';

const words = [
    'buku', 'hayuk', 'makan', 'yegak', 'jalan', 'bunga', 'pulau',
    'semungut', 'pakai', 'rumah', 'sekolah', 'yekali', 'mari', 'melihat',
    'masasi', 'yaelah', 'belajar', 'lipat'
];

export default function ReadAndSelect() {
    const [selectedWords, setSelectedWords] = useState([]);

    const handleWordClick = (word) => {
        setSelectedWords((prevSelectedWords) =>
            prevSelectedWords.includes(word)
                ? prevSelectedWords.filter((w) => w !== word)
                : [...prevSelectedWords, word]
        );
    };


    return (
        <div className="flex min-h-screen flex-col p-24">
            <div className="text-main-text semibold-64 pt-8">Read and Select</div>
            <div className="w-full bg-body-text rounded-full h-3 dark:bg-gray-700 my-8">
                <div className="bg-positive-2 h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <div className="text-main-text medium-32 mb-8">Select the real Indonesian words from the following list</div>
            <div className="grid grid-cols-6 gap-4 mb-16">
                {words.map((word, index) => (
                    <button
                        key={index}
                        onClick={() => handleWordClick(word)}
                        className={`p-4 border rounded ${
                            selectedWords.includes(word) ? 'bg-gray-200 text-black' : 'medium'
                        }`}
                    >
                        {word}
                    </button>
                ))}
            </div>
            <div className="flex justify-between mt-8 w-full">
                <Button linkPage="/word" title="Check" type="medium-secondary"/>
                <div className="flex space-x-4">
                    <Button linkPage="/word" title="Back" type="medium-secondary"/>
                    <Button linkPage="/word" title="Next" type="medium"/>
                </div>
            </div>
        </div>
    );
}
