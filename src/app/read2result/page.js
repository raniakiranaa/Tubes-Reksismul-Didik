"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from '@/components/shares/button';
import Image from 'next/image';
import word from '/public/images/read/sitting.png';

const Read2Result = () => {
    const [score, setScore] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/score_read2')
            .then(response => response.json())
            .then(data => setScore(parseFloat(data.score.toFixed(2))))
            .catch(error => console.error('Error fetching score:', error));
    }, []);

    if (score === null) return <div>Loading...</div>;

    const isPassed = score >= 80;
    const resultMessage = isPassed
        ? "Bravo! Your language proficiency is outstanding. Your commitment and hard work are evident in your incredible performance. Keep up the phenomenal effort and never stop striving for improvement. You're a language learning superstar!"
        : "Keep your chin up! Learning a new language takes time and patience. Use this as an opportunity to identify areas for improvement and focus on mastering them. You're making progress with every attempt.";

    return (
        <div className="flex flex-col items-center p-24">
            <div className="w-full flex justify-start mb-8">
                <div className="text-main-text semibold-64">Read and Select - Result</div>
            </div>
            <Card className="max-w-[1100px] shadow-lg" style={{ borderRadius: '16px' }}>
                <div className="flex items-center">
                    <div className="flex-shrink-0 p-8">
                        <Image src={word} alt="Sitting person" width={425} height={395} />
                    </div>
                    <CardBody className="px-5 py-8 text-medium text-default-400 mb-4 flex flex-col items-center">
                        <div className="semibold-40 text-center">{isPassed ? 'Congratulations!' : 'You can do better!'}</div>
                        <div className="medium-32 mt-4 text-center">Your score :</div>
                        <div className={`bold-96 mt-4 text-center ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                            {score}%
                        </div>
                    </CardBody>
                </div>
                <CardBody className="px-5 py-8 text-medium text-default-400 mb-4">
                    <div className="regular-20 mt-4 text-center">{resultMessage}</div>
                </CardBody>
            </Card>
            <div className="mt-8">
                <Button linkPage="/text" title="Back to Module" type="medium" />
            </div>
        </div>
    );
};

export default Read2Result;
