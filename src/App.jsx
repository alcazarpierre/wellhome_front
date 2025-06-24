// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import DevelopmentTeamPage from './pages/DevelopmentTeamPage';
// import NotFoundPage from './pages/NotFoundPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/equipo-desarrollo" element={<DevelopmentTeamPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App; // LÍNEA MODIFICADA: Asegura que se exporte como default
