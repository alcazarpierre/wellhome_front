// src/components/modals/LoginModal.jsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/24/outline';
import LoginForm from '../auth/LoginForm';
import shortLogo from '../../assets/logos/shortLogo.svg';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { isAuthenticated, initialLoad } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isOpen && initialLoad === 'done') {
      if (isAuthenticated) {
        toast.success('Ya has iniciado sesión.');
        onClose(); 
        navigate('/dashboard'); 
      }
    }
  }, [isOpen, isAuthenticated, initialLoad, navigate, onClose]);

  const handleLoginSuccess = () => {
    toast.success('¡Bienvenido de vuelta!');
    onClose(); 
    navigate('/dashboard'); 
  };

  if (!isOpen || initialLoad === 'pending') {
    return null;
  }

  if (initialLoad === 'done' && !isAuthenticated) {
    return (

      <div 
        className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50 p-4"
        onClick={onClose} 
      >
        {/* Contenedor del contenido del modal */}
        <div 
          className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md"
          onClick={e => e.stopPropagation()} 
        >
          {/* Botón de Cierre */}
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
            <img src={shortLogo} alt="Logo de WellHome" className="mx-auto h-16 w-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Inicia Sesión
            </h2>
          </div>
          
          {/* Renderizamos el formulario reutilizable, pasándole la función de éxito */}
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
  }

  // Si ninguna de las condiciones anteriores se cumple, no renderizar nada
  return null;
};

export default LoginModal;