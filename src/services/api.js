// src/services/api.js

import axios from 'axios';

// Obtener la URL base del backend desde las variables de entorno de Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Verificar que la URL esté definida (esto está perfecto)
if (!API_BASE_URL) {
  console.error("La variable de entorno VITE_API_BASE_URL no está definida.");
}

// Configurar una instancia de Axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Esto es crucial para que el navegador envíe y reciba las cookies
  withCredentials: true, 
});

// NO DEBE HABER NINGÚN INTERCEPTOR QUE IMPORTE ACCIONES DE REDUX AQUÍ.
// Si necesitas interceptores para otras cosas (que no sean de Redux), está bien.

export default apiClient;