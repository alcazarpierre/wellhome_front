// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
// import LoginPage from './pages/auth/LoginPage';
// import NotFoundPage from './pages/NotFoundPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/equipo-desarrollo" element={<div>Página del Equipo de Desarrollo (futuro)</div>} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App; // LÍNEA MODIFICADA: Asegura que se exporte como default
