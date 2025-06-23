// src/components/modals/LoginModal.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import fullLogo from '../../assets/logos/fullLogo.svg';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLoginSuccess = () => {
    alert('Inicio de sesión exitoso (simulación)');
    onClose(); // Cierra el modal
    navigate('/dashboard'); // Redirige al dashboard
  };

  return (
    // Fondo del modal (overlay)
    <div 
      className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic fuera
    >
      {/* --- LÍNEA MODIFICADA: Se añade 'relative' para posicionar el botón de cierre --- */}
      <div 
        className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md"
        onClick={e => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        {/* --- BOTÓN DE CERRAR --- */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Encabezado */}
        <div className="text-center mb-6">
          <img src={fullLogo} alt="Logo de WellHome" className="mx-auto h-16 w-auto mb-4" />
          <h2 className="text-xl font-extrabold text-gray-500 dark:text-white">
            Inicia Sesión
          </h2>
        </div>
        
        {/* Renderizamos el formulario reutilizable */}
        <LoginForm onSuccess={handleLoginSuccess} />

        {/* Enlace a Registro */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta?{' '}
          <Link to="/registro" onClick={onClose} className="font-medium text-brand-primary hover:text-brand-accent">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;