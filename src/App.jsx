// src/App.jsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Hooks y Acciones de Redux para la autenticación
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthStatus } from './features/auth/authSlice';

// Contexto de Tema
import { ThemeContextProvider } from './contexts/ThemeContext';

// Componentes Helper
import ScrollToTop from './components/helpers/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Layouts
import AppLayout from './layouts/AppLayout';

// Páginas Públicas
import LandingPage from './pages/landing/LandingPage';
import DevelopmentTeamPage from './pages/DevelopmentTeamPage';
import NotFoundPage from './pages/NotFoundPage';

// Páginas de la Aplicación (Privadas)
import DashboardPage from './pages/app/DashboardPage';

function App() {
  const dispatch = useDispatch();
  // Leemos el estado de la carga inicial para mostrar un spinner mientras se verifica la sesión
  const initialLoad = useSelector((state) => state.auth.initialLoad);

  // Este efecto se ejecuta una sola vez cuando la aplicación carga
  useEffect(() => {
    // Despachamos la acción para verificar si hay una cookie de sesión válida
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // Mientras se verifica la sesión, mostramos un estado de carga.
  // Esto previene un "parpadeo" donde el usuario ve la landing por un segundo antes de ser redirigido.
  if (initialLoad === 'pending') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Cargando WellHome...</p>
      </div>
    );
  }

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
          {/* --- Rutas Públicas --- */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/equipo-desarrollo" element={<DevelopmentTeamPage />} />
          
          {/* --- Rutas Protegidas y Anidadas --- */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {/* La página de inicio del dashboard se renderiza en el Outlet del AppLayout */}
            <Route index element={<DashboardPage />} /> 
            
            {/* Aquí puedes añadir más rutas que usarán el mismo layout */}
            {/* Ejemplo: <Route path="viviendas" element={<ViviendasPage />} /> */}
          </Route>

          {/* --- Ruta 404 --- */}
          {/* Esta siempre debe ser la última */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;