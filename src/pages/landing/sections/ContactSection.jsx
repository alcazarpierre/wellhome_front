// src/pages/landing/sections/ContactSection.jsx

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../../../utils/validationSchemas';
import { countries } from '../../../data/countries';
import emailjs from '@emailjs/browser'; 
import { toast } from 'react-hot-toast';

const ContactSection = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      pais: 'Perú',
      celular: '+51 ',
      aceptaContacto: false,
    }
  });

  const selectedCountryName = watch('pais');

  useEffect(() => {
    const country = countries.find(c => c.name === selectedCountryName);
    if (country) {
      setValue('celular', `+${country.phone} `);
    }
  }, [selectedCountryName, setValue]);

  const onSubmit = async (data) => {
    const templateParams = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      pais: data.pais,
      ciudad: data.ciudad,
      celular: data.celular,
      asunto: data.asunto,
      mensaje: data.mensaje,
    };

    toast.promise(
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: 'Enviando mensaje...',
        success: () => {
          reset(); // Limpia el formulario en caso de éxito
          return '¡Mensaje enviado con éxito! Te contactaremos pronto.';
        },
        error: (err) => {
          console.error('FAILED...', err);
          return 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
        },
      }
    );

    // await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(data);
    // alert('Formulario enviado con éxito (simulación)');
  };

  const FormField = ({ name, label, type = 'text', placeholder, children }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-lg font-medium mb-2 text-content-text-light dark:text-content-text-dark">{label}</label>
      {(() => {
        const commonProps = {
          id: name,
          ...register(name),
          className: "w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-brand-primary focus:ring-brand-primary transition"
        };
        if (type === 'textarea') {
          return <textarea {...commonProps} placeholder={placeholder} rows={4}></textarea>;
        }
        if (type === 'select') {
          return <select {...commonProps}>{children}</select>;
        }
        return <input type={type} {...commonProps} placeholder={placeholder} />;
      })()}
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );

  return (
    <section id="contacto" className="py-16 md:py-24 bg-content-bg-light dark:bg-content-bg-dark">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-center mb-12 text-brand-primary dark:text-brand-accent">
          Ponte en Contacto con Nosotros
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <FormField name="nombres" label="Nombres" placeholder="Ej: Juan" />
            <FormField name="apellidos" label="Apellidos" placeholder="Ej: Pérez" />
            <FormField name="email" label="Correo Electrónico" type="email" placeholder="tu.correo@ejemplo.com" />
            <FormField name="pais" label="País" type="select">
              {countries.map(country => (
                <option key={country.code} value={country.name}>{country.name}</option>
              ))}
            </FormField>
            <FormField name="ciudad" label="Ciudad" placeholder="Ej: Lima" />
            <FormField name="celular" label="Celular" type="tel" placeholder="+51 987654321" />
            
            {/* El campo "Asunto" ahora ocupa el ancho completo para dar paso al mensaje */}
            <div className="md:col-span-2">
              <FormField name="asunto" label="Asunto" type="select">
                <option value="">Selecciona un asunto...</option>
                <option value="Quiero implementarlo">Quiero implementarlo</option>
                <option value="Necesito información adicional">Necesito información adicional</option>
                <option value="Otro asunto">Otro asunto</option>
              </FormField>
            </div>
            
            <div className="md:col-span-2">
              <FormField name="mensaje" label="Mensaje" type="textarea" placeholder="Escribe tu consulta aquí..." />
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center">
              <input id="aceptaContacto" type="checkbox" {...register('aceptaContacto')} className="h-5 w-5 rounded text-brand-primary focus:ring-brand-primary" />
              <label htmlFor="aceptaContacto" className="ml-3 text-base text-content-text-light dark:text-content-text-dark">
                Acepto que el equipo de Wellhome se ponga en contacto conmigo.
              </label>
            </div>
            {errors.aceptaContacto && <p className="text-red-500 text-sm mt-2">{errors.aceptaContacto.message}</p>}
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 bg-brand-primary text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-accent transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:scale-100"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;