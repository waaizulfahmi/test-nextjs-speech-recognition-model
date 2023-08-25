"use client";
import { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function Test() {
  useEffect(() => {
    // Memuat model JSON
    async function loadJSONModel() {
      const modelURL = '/models/model_svm.json'; // Ganti dengan path ke file JSON Anda
      const model = await tf.loadLayersModel(modelURL);
      return model;
    }

    // Memanggil fungsi untuk memuat model
    const loadedModel = loadJSONModel();

    // Contoh penggunaan model setelah dimuat
    loadedModel.then(model => {
      // Lakukan inferensi dengan model
      const input = tf.tensor([[1, 2, 3, 4]]);
      const output = model.predict(input);
      output.print();
    });
  }, []);

  return (
    <div>
      <h1>Model Loading Example with TensorFlow.js and Next.js</h1>
      {/* Konten halaman */}
    </div>
  );
}
