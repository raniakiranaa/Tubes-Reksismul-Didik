"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import axios from 'axios';

export const RoundIconButton = (props) => {
    const [audioUrl, setAudioUrl] = useState(null);

    const handleButtonClick = async () => {
        try {
            // Start audio recording
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];

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
            });

            // Start recording when the button is clicked
            mediaRecorder.start();

            setTimeout(() => {
                mediaRecorder.stop();
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
        <div>
            <button
                className="bg-body-text hover:bg-sub-text rounded-full flex items-center justify-center"
                onClick={handleButtonClick}
                style={{ width: '60px', height: '60px' }} 
            >
                <Image src={props.image} alt="sound" width={30} height={30}/>
            </button>
            {audioUrl && 
                <div style={{ marginTop: '10px' }}>
                    <audio controls src={audioUrl} style={{ display: 'block' }} />
                    <button onClick={handleDownload}>Download</button>
                </div>
            }
        </div>
    );
};

RoundIconButton.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string.isRequired,
};

export default RoundIconButton;
