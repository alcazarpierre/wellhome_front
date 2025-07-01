// src/components/modals/PreRegistrationModal.jsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import PreRegistrationForm from '../auth/PreRegistrationForm';

const PreRegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-200">
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Regístrate Gratis</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Completa tus datos y un asesor se pondrá en contacto contigo.</p>
        </div>
        <PreRegistrationForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default PreRegistrationModal;