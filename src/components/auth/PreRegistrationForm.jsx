// src/components/auth/PreRegistrationForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { preRegistrationSchema } from '../../utils/validationSchemas';
import { toast } from 'react-hot-toast';

const PreRegistrationForm = ({ onSuccess }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    resolver: zodResolver(preRegistrationSchema),
  });

  // --- Constantes de Estilo para Consistencia ---
  const labelStyle = "block text-sm font-medium text-gray-700 dark:text-gray-300";
  const inputStyle = "mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary transition-colors";
  const errorStyle = "mt-2 text-sm text-red-600";
  const primaryButtonStyle = "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-primary hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all";

  const onSubmit = async (data) => {
    console.log("Datos de Pre-registro:", data);
    
    // Aquí iría la llamada a tu backend para guardar el prospecto
    // POST /api/prospects
    // Simulamos el éxito para la demostración
    const promise = new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.promise(promise, {
      loading: 'Enviando solicitud...',
      success: () => {
        reset(); // Limpia el formulario
        if (onSuccess) onSuccess(); // Cierra el modal
        return "¡Gracias por tu interés! Te contactaremos pronto.";
      },
      error: 'Hubo un error al enviar la solicitud.'
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
        {/* Nombres */}
        <div>
          <label htmlFor="nombres" className={labelStyle}>Nombres</label>
          <input id="nombres" {...register('nombres')} className={inputStyle} placeholder="Ej: Ana" />
          {errors.nombres && <p className={errorStyle}>{errors.nombres.message}</p>}
        </div>

        {/* Apellidos */}
        <div>
          <label htmlFor="apellidos" className={labelStyle}>Apellidos</label>
          <input id="apellidos" {...register('apellidos')} className={inputStyle} placeholder="Ej: Torres" />
          {errors.apellidos && <p className={errorStyle}>{errors.apellidos.message}</p>}
        </div>

        {/* Nombre del Condominio */}
        <div className="md:col-span-2">
          <label htmlFor="nombreCondominio" className={labelStyle}>Nombre del Condominio / Edificio</label>
          <input id="nombreCondominio" {...register('nombreCondominio')} className={inputStyle} placeholder="Ej: Residencial El Sol" />
          {errors.nombreCondominio && <p className={errorStyle}>{errors.nombreCondominio.message}</p>}
        </div>
        
        {/* Correo Electrónico */}
        <div>
          <label htmlFor="email" className={labelStyle}>Correo Electrónico</label>
          <input id="email" type="email" {...register('email')} className={inputStyle} placeholder="tu@correo.com" />
          {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* Celular */}
        <div>
          <label htmlFor="celular" className={labelStyle}>Celular</label>
          <input id="celular" type="tel" {...register('celular')} className={inputStyle} placeholder="Ej: 987654321"/>
          {errors.celular && <p className={errorStyle}>{errors.celular.message}</p>}
        </div>

        {/* País */}
        <div>
          <label htmlFor="pais" className={labelStyle}>País</label>
          <input id="pais" {...register('pais')} className={inputStyle} placeholder="Ej: Perú"/>
          {errors.pais && <p className={errorStyle}>{errors.pais.message}</p>}
        </div>

        {/* Estado / Provincia */}
        <div>
          <label htmlFor="estado" className={labelStyle}>Estado / Región</label>
          <input id="estado" {...register('estado')} className={inputStyle} placeholder="Ej: Arequipa"/>
          {errors.estado && <p className={errorStyle}>{errors.estado.message}</p>}
        </div>

        {/* Ciudad */}
        <div>
          <label htmlFor="ciudad" className={labelStyle}>Ciudad / Provincia</label>
          <input id="ciudad" {...register('ciudad')} className={inputStyle} placeholder="Ej: Arequipa"/>
          {errors.ciudad && <p className={errorStyle}>{errors.ciudad.message}</p>}
        </div>

        {/* Distrito */}
        <div>
          <label htmlFor="distrito" className={labelStyle}>Distrito</label>
          <input id="distrito" {...register('distrito')} className={inputStyle} placeholder="Ej: Paucarpata"/>
          {errors.distrito && <p className={errorStyle}>{errors.distrito.message}</p>}
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