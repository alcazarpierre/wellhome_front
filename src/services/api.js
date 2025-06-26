// src/services/api.js

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  console.error("La variable de entorno VITE_API_BASE_URL no está definida. Asegúrate de tener un archivo .env en la raíz del frontend.");
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default apiClient;