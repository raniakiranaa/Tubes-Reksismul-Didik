"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from '@/components/shares/button';
import Image from 'next/image';
import word from '/public/images/read/sitting.png';
import { useRouter } from 'next/navigation';

export default function App() {
    const router = useRouter();

    const { grade = '0' } = router.query || {};

    const parsedGrade = parseInt(grade);

    const isPassed = parsedGrade >= 60;
    const resultMessage = isPassed
        ? "Outstanding performance! You've shown exceptional dedication and progress on your language learning journey. With each step forward, you're getting closer to mastering a new language. Keep up the fantastic work and continue embracing the challenges ahead. Go, you!"
        : "It seems you've encountered some setbacks on your language learning journey. But fear not! Mistakes are an inevitable part of the learning process, and each one brings valuable lessons. Keep your head up, for every stumble is an opportunity to grow wiser. You've got this!";

    return (
        <div className="flex flex-col items-center p-24">
            <div className="w-full flex justify-start mb-8">
                <div className="text-main-text semibold-64">Speak UP - Result</div>
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
                            {parsedGrade}%
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

}
