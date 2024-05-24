"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/shares/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReadAndSelect = () => {
    const params = useParams();
    const router = useRouter();
    const taskIndex = parseInt(params.taskIndex, 10);

    const [tasks, setTasks] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/tasks_read2')
            .then(response => response.json())
            .then(data => {
                setTasks(data);
                setSelectedWords([]);
                setResult(null);
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            setSelectedWords([]);
            setResult(null);
        }
    }, [taskIndex, tasks]);

    const handleWordClick = (word) => {
        setSelectedWords(prevSelectedWords =>
            prevSelectedWords.includes(word)
                ? prevSelectedWords.filter(w => w !== word)
                : [...prevSelectedWords, word]
        );
    };

    const checkWords = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/check_read2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskIndex, selectedWords })
        });
        if (response.ok) {
            const data = await response.json();
            setResult(data);
            showToast(data);
        } else {
            toast.error("Failed to check words.");
        }
    };

    const showToast = (data) => {
        if (data.allCorrect) {
            toast.success("You are correct! You guessed all words correctly!", {
                position: "top-center",
            });
        } else {
            toast.error(`Almost there! You got ${data.correctCount} out of ${tasks[taskIndex].correct.length} correct.`, {
                position: "top-center",
            });
        }
    };

    const handleNextClick = async () => {
        await checkWords();
        if (taskIndex < tasks.length - 1) {
            window.location.href = `/read2/${taskIndex + 1}`;
        } else {
            window.location.href = `/read2result`;
        }
    };

    if (tasks.length === 0 || isNaN(taskIndex)) return <div>Loading...</div>;

    const currentTask = tasks[taskIndex];

    if (!currentTask) return <div>No task found</div>;

    return (
        <div className="flex min-h-screen flex-col p-24">
            <ToastContainer />
            <div className="text-main-text semibold-64 pt-8">Read and Select - Advanced</div>
            <div className="w-full bg-body-text rounded-full h-3 dark:bg-gray-700 my-8">
                <div className="bg-positive-2 h-3 rounded-full" style={{ width: `${(taskIndex + 1) / tasks.length * 100}%` }}></div>
            </div>
            <div className="text-main-text medium-32 mb-8">Select the real Indonesian words from the following list</div>
            <div className="grid grid-cols-6 gap-4 mb-16">
                {currentTask.words.map((word, index) => (
                    <button
                        key={index}
                        onClick={() => handleWordClick(word)}
                        className={`p-4 border rounded ${selectedWords.includes(word) ? 'bg-gray-200 text-black' : 'medium'}`}
                    >
                        {word}
                    </button>
                ))}
            </div>
            <div className="flex justify-between mt-8 w-full">
                <Button linkPage="#" onClick={checkWords} title="Check" type="medium-secondary" />
                <div className="flex space-x-4">
                    {taskIndex > 0 && (
                        <Button linkPage={`/read2/${taskIndex - 1}`} title="Back" type="medium-secondary" />
                    )}
                    {taskIndex < tasks.length - 1 ? (
                        <Button linkPage="#" onClick={handleNextClick} title="Next" type="medium" />
                    ) : (
                        <>
                            <Button linkPage="#" onClick={handleNextClick} title="Finish" type="medium" />
                        </>
                    )}
                </div>
            </div>
            {result && (
                <div className="mt-4 text-center text-lg text-green-600">
                    {result.allCorrect ? 'All correct!' : `You got ${result.correctCount} correct out of ${currentTask.correct.length}`}
                </div>
            )}
        </div>
    );
};

export default ReadAndSelect;
