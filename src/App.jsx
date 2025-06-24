// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/landing/LandingPage';
import DevelopmentTeamPage from './pages/DevelopmentTeamPage';
import ScrollToTop from './components/helpers/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          // Estilos para un look más consistente con tu app
          className: '',
          style: {
            background: '#333',
            color: '#fff',
          },
          // Estilos para las notificaciones de éxito
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
        />
        <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/equipo-desarrollo" element={<DevelopmentTeamPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App; // LÍNEA MODIFICADA: Asegura que se exporte como default
