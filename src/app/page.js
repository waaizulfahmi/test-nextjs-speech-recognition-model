"use client";

import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function SpeechRecognitionPage() {
  const [transcription, setTranscription] = useState('');
  
  useEffect(() => {
    async function loadModelAndStartRecognition() {
      try {
        const model = await tf.loadLayersModel('/models/model_svm.json');
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "id-ID";
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = event => {
          const result = event.results[event.results.length - 1];
          const transkripsi = result[0].transcript;
          
          // Lakukan prediksi dengan model TensorFlow.js
          performSpeechRecognition(model, transkripsi);
        };

        recognition.start();
      } catch (error) {
        console.error('Error:', error);
      }
    }

    loadModelAndStartRecognition();
  }, []);

  async function performSpeechRecognition(model, transkripsi) {
    // Lakukan preprocessing pada transkripsi jika diperlukan
    // Misalnya, mengubah teks menjadi vektor numerik yang sesuai

    const inputTensor = tf.tensor([/* Preprocessed transkripsi */]);
    const predictions = model.predict(inputTensor);

    // Lakukan interpretasi hasil prediksi
    // Misalnya, mencari kategori atau output yang paling mungkin

    // Tampilkan hasil interpretasi atau tindakan sesuai kebutuhan
    setTranscription(transkripsi);
  }

  return (
    <div>
      <p>Transkripsi: {transcription}</p>
    </div>
  );
}
