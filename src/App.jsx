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
          className: '',
          style: {
            background: '#333',
            color: '#fff',
          },
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

export default App;
