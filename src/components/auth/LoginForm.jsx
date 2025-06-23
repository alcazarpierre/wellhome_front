// src/components/auth/LoginForm.jsx

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/validationSchemas';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// El componente ahora recibe una prop 'onSuccess' para notificar cuando el login es exitoso
const LoginForm = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // En una app real, aquí iría la llamada al backend.
    // Si la llamada es exitosa, notificamos al componente padre.
    if (onSuccess) {
      onSuccess(); // Esto podría cerrar el modal y redirigir.
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Campo de Email */}
      <div>
        <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Correo Electrónico
        </label>
        <input
          id="modal-email"
          type="email"
          {...register('email')}
          className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Campo de Contraseña */}
      <div>
        <label htmlFor="modal-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Contraseña
        </label>
        <div className="relative">
          <input
            id="modal-password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      </div>

      {/* Opciones Adicionales */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="modal-rememberMe" type="checkbox" {...register('rememberMe')} className="h-4 w-4 text-brand-primary rounded" />
          <label htmlFor="modal-rememberMe" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
            Recordarme
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-brand-primary hover:text-brand-accent">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
      
      {/* Botón de Envío */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-lg font-medium text-white bg-brand-primary hover:bg-brand-accent disabled:bg-gray-400"
        >
          {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;