// src/components/auth/PreRegistrationForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { preRegistrationSchema } from '../../utils/validationSchemas';
import { toast } from 'react-hot-toast';
import apiClient from '../../services/api'; 

const PreRegistrationForm = ({ onSuccess }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    resolver: zodResolver(preRegistrationSchema),
  });

  const labelStyle = "block text-sm font-medium text-gray-700 dark:text-gray-300";
  const inputStyle = "mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary transition-colors";
  const errorStyle = "mt-2 text-sm text-red-600";
  const primaryButtonStyle = "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-primary hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all";

  const onSubmit = (data) => {
    toast.promise(
      apiClient.post('/demorequests', data),
      {
        loading: 'Enviando solicitud...',
        success: () => {
          reset(); 
          if (onSuccess) onSuccess(); 
          return '¡Solicitud recibida! Te contactaremos pronto.';
        },
        error: (err) => {
          return err.response?.data?.message || 'No se pudo enviar la solicitud.';
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
        {/* Nombres */}
        <div>
          <label htmlFor="firstName" className={labelStyle}>Nombres</label>
          <input id="firstName" {...register('firstName')} className={inputStyle} placeholder="Ej: Ana" />
          {errors.firstName && <p className={errorStyle}>{errors.firstName.message}</p>}
        </div>

        {/* Apellidos */}
        <div>
          <label htmlFor="lastName" className={labelStyle}>Apellidos</label>
          <input id="lastName" {...register('lastName')} className={inputStyle} placeholder="Ej: Torres" />
          {errors.lastName && <p className={errorStyle}>{errors.lastName.message}</p>}
        </div>

        {/* Nombre del Condominio */}
        <div className="md:col-span-2">
          <label htmlFor="condominiumName" className={labelStyle}>Nombre del Condominio / Edificio</label>
          <input id="condominiumName" {...register('condominiumName')} className={inputStyle} placeholder="Ej: Residencial El Sol" />
          {errors.condominiumName && <p className={errorStyle}>{errors.condominiumName.message}</p>}
        </div>
        
        {/* Correo Electrónico */}
        <div>
          <label htmlFor="email" className={labelStyle}>Correo Electrónico</label>
          <input id="email" type="email" {...register('email')} className={inputStyle} placeholder="tu@correo.com" />
          {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* Celular */}
        <div>
          <label htmlFor="phone" className={labelStyle}>Celular</label>
          <input id="phone" type="tel" {...register('phone')} className={inputStyle} placeholder="Ej: 987654321"/>
          {errors.phone && <p className={errorStyle}>{errors.phone.message}</p>}
        </div>

        {/* País */}
        <div>
          <label htmlFor="country" className={labelStyle}>País</label>
          <input id="country" {...register('country')} className={inputStyle} placeholder="Ej: Perú"/>
          {errors.country && <p className={errorStyle}>{errors.country.message}</p>}
        </div>

        {/* Estado / Provincia */}
        <div>
          <label htmlFor="state" className={labelStyle}>Estado / Provincia</label>
          <input id="state" {...register('state')} className={inputStyle} placeholder="Ej: Arequipa"/>
          {errors.state && <p className={errorStyle}>{errors.state.message}</p>}
        </div>

        {/* Ciudad */}
        <div>
          <label htmlFor="city" className={labelStyle}>Ciudad</label>
          <input id="city" {...register('city')} className={inputStyle} placeholder="Ej: Arequipa"/>
          {errors.city && <p className={errorStyle}>{errors.city.message}</p>}
        </div>

        {/* Distrito */}
        <div>
          <label htmlFor="district" className={labelStyle}>Distrito</label>
          <input id="district" {...register('district')} className={inputStyle} placeholder="Ej: Paucarpata"/>
          {errors.district && <p className={errorStyle}>{errors.district.message}</p>}
        </div>
      </div>

      {/* Checkbox de Términos */}
      <div className="flex items-start space-x-3 pt-2">
        <input id="aceptaTerminos" type="checkbox" {...register('aceptaTerminos')} className="h-4 w-4 mt-1 text-brand-primary focus:ring-brand-primary border-gray-300 rounded" />
        <div className="flex-1">
          <label htmlFor="aceptaTerminos" className="text-sm text-gray-700 dark:text-gray-300">
            Autorizo el uso de mis datos y acepto que el equipo de WellHome se ponga en contacto conmigo.
          </label>
          {errors.aceptaTerminos && <p className={`${errorStyle} mt-1`}>{errors.aceptaTerminos.message}</p>}
        </div>
      </div>

      {/* Botón de Envío */}
      <div className="pt-4">
        <button type="submit" disabled={isSubmitting} className={primaryButtonStyle}>
          {isSubmitting ? 'Enviando...' : 'Solicitar Demo'}
        </button>
      </div>
    </form>
  );
};

export default PreRegistrationForm;