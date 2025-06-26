// src/features/auth/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/api';

// 1. ESTADO INICIAL
const initialState = {
  user: null, 
  isAuthenticated: false, 
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// 2. THUNK ASÍNCRONO PARA EL LOGIN
export const loginUser = createAsyncThunk(
  'auth/loginUser', 
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('login', credentials);
      return response.data.user; 
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Error de inicio de sesión');
    }
  }
);

// 3. CREACIÓN DEL SLICE
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      // Aquí también podríamos llamar a un endpoint de logout del backend
    },
  },

  extraReducers: (builder) => {
    builder
      // Cuando la petición de login comienza
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Cuando la petición de login tiene éxito
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload; // Guardamos los datos del usuario
      })
      // Cuando la petición de login falla
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Guardamos el mensaje de error
      });
  },
});

// 4. EXPORTACIONES
export const { logout } = authSlice.actions; // Exportamos las acciones síncronas
export const selectUser = (state) => state.auth.user; // Un "selector" para leer el usuario
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated; // Selector para el estado de auth

export default authSlice.reducer; // Exportamos el reducer para la tienda