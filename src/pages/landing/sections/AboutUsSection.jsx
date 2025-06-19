// src/pages/landing/sections/AboutUsSection.jsx
import React from 'react';
import aboutUsImg from '../../../assets/img/whlp02.png';
import { UserGroupIcon, ClockIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const commitments = [
  {
    id: 'acompanamiento',
    title: 'Acompañamiento Personalizado',
    description: 'Te guiamos en cada paso del proceso de configuración y registro.',
    icon: UserGroupIcon,
  },
  {
    id: 'soporte',
    title: 'Soporte Dedicado 24/7',
    description: 'Siempre estamos aquí para brindarte asistencia técnica y administrativa.',
    icon: ClockIcon,
  },
  {
    id: 'soluciones',
    title: 'Soluciones a tu Medida',
    description: 'Desarrollamos funcionalidades y reportes que se adaptan a tus necesidades.',
    icon: PuzzlePieceIcon,
  },
];

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-content-bg-light dark:bg-content-bg-dark text-content-text-light dark:text-content-text-dark">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold mb-6 text-brand-primary dark:text-brand-accent">
            Wellhome: La Gestión de tu Condominio, Reinventada por Expertos.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
          <div className="md:w-1/2 text-justify">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <strong className="text-brand-primary">Wellhome es tu Aplicativo Web integral</strong>, diseñado para simplificar la administración y transformar la vida diaria en cualquier tipo de comunidad: condominios, centros comerciales, edificios corporativos y más. Te ofrecemos una herramienta digital robusta, desarrollada por <strong className="text-brand-primary">especialistas con profunda experiencia</strong> en la gestión de unidades multipropietario.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Nuestra plataforma te brinda todas las funcionalidades necesarias para que tu gestión sea más <strong className="text-brand-primary">eficiente, transparente y accesible</strong>. Con Wellhome, no solo digitalizas procesos; obtienes la capacidad de <strong className="text-brand-primary">medir, analizar y mejorar</strong> continuamente la calidad de vida y la convivencia en tu comunidad.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutUsImg}
              alt="Wellhome Team"
              className="rounded-xl shadow-xl w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* --- SECCIÓN DE COMPROMISOS MODIFICADA --- */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-content-text-light dark:text-content-text-dark">Nuestro Compromiso es Contigo:</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {commitments.map((commitment) => (
              <div
                key={commitment.id}
                className="
                  group relative 
                  w-48 h-48 sm:w-56 sm:h-56 
                  flex flex-col items-center justify-center 
                  text-center text-white 
                  p-4 
                  rounded-full 
                  bg-gradient-to-br from-brand-primary to-brand-accent 
                  shadow-lg 
                  transform hover:scale-105 transition-transform duration-300
                "
              >
                <commitment.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 transition-transform duration-300 group-hover:-translate-y-1" />
                
                {/* LÍNEA MODIFICADA: Se ajusta el tamaño de fuente y se añade 'break-words' */}
                <h4 className="font-bold text-sm sm:text-base break-words">{commitment.title}</h4>
                
                {/* LÍNEA MODIFICADA: Se añade 'break-words' para seguridad */}
                <p className="hidden sm:block text-xs sm:text-sm mt-1 opacity-90 break-words">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-xl md:text-2xl font-bold text-brand-primary dark:text-brand-accent">
            "Estuvimos en tu lugar, conocemos tus necesidades."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;