// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Importamos nuestro reducer

export const store = configureStore({
  reducer: {
    // Aquí registramos todos nuestros slices. 
    auth: authReducer,
  },
});