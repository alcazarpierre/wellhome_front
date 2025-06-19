// src/components/modals/RegisterModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import shortLogo from '../../assets/logos/shortLogo.svg';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const RegisterModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleResidentClick = () => {
    navigate('/signup/resident');
    onClose();
  };

  const handleCondominiumClick = () => {
    navigate('/signup/condominio');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      {/* Fondo del modal y texto principal se adaptan */}
      <div className="bg-content-bg-light dark:bg-content-bg-dark p-6 rounded-lg shadow-xl max-w-sm w-full relative text-content-text-light dark:text-content-text-dark"> 
        {/* Botón para cerrar */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <XIcon className="h-6 w-6" />
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col items-center text-center">
          {/* Contenedor con fondo claro inmutable */}
          <div className="p-2 rounded bg-content-bg-light dark:bg-content-bg-light mb-4"> 
            <img src={shortLogo} alt='Wellhome Short Logo' className="h-16 w-auto" />
          </div>
          {/* LÍNEA MODIFICADA: Color del texto del párrafo */}
          <p className="text-lg font-semibold mb-6 text-content-text-light dark:text-content-text-dark"> 
            Crea tu cuenta como residente o registra tu Condominio para configurar la app.
          </p>

          {/* Opciones (Residente, Condominio) */}
          <div className="flex flex-col space-y-4 w-full">
            <button
              onClick={handleResidentClick}
              className="flex items-center justify-center px-4 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors duration-300 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Soy Residente
            </button>
            <button
              onClick={handleCondominiumClick}
              className="flex items-center justify-center px-4 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors duration-300 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 0 00-2 2v16m4 0h6m-6 0h-2m2 0h2m-2 0V5m0 16v-2m0-4h2m0-4h-2m2 0V5m0 16v-2m0-4h2m0-4h-2m2 0V5m0 16v-2m0-4h2m0-4h-2m2 0V5m0 16v-2m0-4h2" />
              </svg>
              Registrar Condominio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;