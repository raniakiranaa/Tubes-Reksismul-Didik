"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import axios from 'axios';
import microphone from '/public/images/speech/microphone.svg';
import stop from '/public/images/speech/stop.svg';
import sound from '/public/images/speech/sound.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SpeechButton = (props) => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [isRecording, setIsRecording] = useState(false);

    const handleButtonClick = async () => {
        try {
            // Start audio recording
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];
            setIsRecording(true);

            mediaRecorder.addEventListener('dataavailable', (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            });

            mediaRecorder.addEventListener('stop', async () => {
                stream.getTracks().forEach(track => track.stop());

                // Combine recorded audio chunks into a single Blob
                const blob = new Blob(chunks, { type: 'audio/webm' });

                // Play recorded audio
                setAudioUrl(URL.createObjectURL(blob));

                // Send recorded audio to backend for transcription
                const formData = new FormData();
                formData.append('audio_file', blob);

                const response = await axios.post('http://localhost:8000/transcribe/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Display transcript in console
                console.log('Transcription:', response.data.transcription);

                if (response.data.transcription.toLowerCase() == props.word.toLowerCase()) {
                    toast.success("You are correct! Perfect pronounciation!", {
                        position: "top-center",
                    });
                    props.updateGrade();
                } else {
                    toast.error(`You are wrong! Try speaking more clearly!`, {
                        position: "top-center",
                    });
                }
            });

            // Start recording when the button is clicked
            mediaRecorder.start();

            setTimeout(() => {
                mediaRecorder.stop();
                setIsRecording(false);
            }, 5000); // Stop recording after 5 seconds
        } catch (error) {
            console.error('Error recording audio:', error);
        }
    };

    const handleDownload = () => {
      // If audio URL is available, create a temporary link and trigger download
        if (audioUrl) {
            console.log('Audio URL:', audioUrl); // Log the Blob URL
            const link = document.createElement('a');
            link.href = audioUrl;
            link.download = 'recorded_audio.webm';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };  

    return (
        <div className='flex flex-row'>
            <ToastContainer/>
            <div>
                <div className="flex flex-column">
                    <button
                        className={isRecording ? "bg-background hover:bg-body-text rounded-full flex items-center justify-center" : "bg-background hover:bg-body-text rounded-full flex items-center justify-center"}
                        onClick={handleButtonClick}
                        style={{ width: '109px', height: '109px', outline: '2px solid black' }} 
                    >
                        <Image src={isRecording ? stop : microphone} alt={isRecording ? "Stop" : "Sound"} width={64} height={64}/>
                    </button>

                    <button
                        className={isRecording ? "bg-background hover:bg-body-text rounded-full flex items-center justify-center ml-16" : "bg-background hover:bg-body-text rounded-full flex items-center justify-center ml-16"}
                        // onClick={handleButtonClick}
                        style={{ width: '109px', height: '109px', outline: '2px solid black' }} 
                    >
                        <Image src={sound} alt="sound" width={64} height={64}/>
                    </button>
                </div>

                {/* {audioUrl && !isRecording && ( */}
                    <div style={{ marginTop: '32px' }}>
                        <audio controls src={audioUrl} style={{ display: 'block' }} />
                        {/* <button onClick={handleDownload}>Download</button> */}
                    </div>
                {/* )} */}
            </div>
            <div>
                <div className='text-main-text regular-28 ml-8 mt-4'>{props.word}</div>
                <div className="text-sub-text regular-28 ml-8 mt-8">Translate: {props.translate}</div>
            </div>
        </div>
    );
};

SpeechButton.propTypes = {
    onClick: PropTypes.func,
    word: PropTypes.string.isRequired
};

export default SpeechButton;