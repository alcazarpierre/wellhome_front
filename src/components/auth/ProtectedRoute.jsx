// src/components/auth/ProtectedRoute.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Leemos ambos estados desde Redux
  const { isAuthenticated, initialLoad } = useSelector((state) => state.auth);
  const location = useLocation();

  // 1. Mientras la verificación inicial está pendiente, mostramos un estado de carga.
  // Esto "congela" la ruta hasta que sepamos si el usuario está autenticado o no.
  if (initialLoad === 'pending') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Verificando sesión...</p>
      </div>
    );
  }

  // 2. Una vez que la carga inicial terminó, aplicamos la lógica de siempre.
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;