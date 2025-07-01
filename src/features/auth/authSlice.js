// src/features/auth/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/api';

const initialState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  initialLoad: 'pending',
  error: null,
};

// Thunk para Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/login', credentials);
      return response.data.user; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error de inicio de sesión');
    }
  }
);

// Thunk para verificar sesión
export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('/login/status');
      return response.data.user;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

// Thunk para Logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.post('/login/logout');
      return;
    } catch (error) {
      console.error("Error en el logout del backend:", error);
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Casos para loginUser
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Casos para checkAuthStatus
      .addCase(checkAuthStatus.pending, (state) => {
        state.initialLoad = 'pending';
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoad = 'done';
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.initialLoad = 'done';
      })

      // Casos para logoutUser
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        // Aunque falle en el backend, forzamos el logout en el frontend
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;