// src/pages/landing/sections/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react'; 
import fondoHero from '../../../assets/img/FondoHero.png';
import {
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon,
  UserPlusIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'; 

const features = [
  {
    id: 'mantenimiento',
    title: 'Control Total de Mantenimientos',
    description: 'Gestión sencilla y transparente de todas las tareas y solicitudes.',
    icon: Cog6ToothIcon,
  },
  {
    id: 'comunicacion',
    title: 'Comunicación Efectiva y Centralizada',
    description: 'Mantén a todos informados con anuncios, chats y encuestas.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 'registro',
    title: 'Registro Sencillo de Residentes y Colaboradores',
    description: 'Administra tu comunidad con perfiles detallados.',
    icon: UserPlusIcon,
  },
  {
    id: 'finanzas',
    title: 'Transparencia Financiera y Control de Ingresos',
    description: 'Accede a estados de cuenta claros y gestiona tus finanzas.',
    icon: BanknotesIcon,
  },
  {
    id: 'digitalizacion',
    title: 'Digitaliza Todos los Procesos',
    description: 'Moderniza la gestión y toma decisiones más eficientes.',
    icon: DevicePhoneMobileIcon,
  },
];

const HeroSection = ({onOpenPreRegModal}) => {
  const carouselRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); 

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector('div.flex-shrink-0');

    const cardWidth = firstCard ? firstCard.offsetWidth + parseFloat(getComputedStyle(firstCard.parentNode).gap) : 304; 
    
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });

    console.log(`Scroll manual: ${direction}, a ${carousel.scrollLeft + scrollAmount}. CardWidth: ${cardWidth}`);

  };

  return (
    <section id="inicio" className="relative flex items-center justify-center min-h-screen bg-brand-primary dark:bg-content-bg-dark text-white overflow-hidden py-16 md:py-24">
      {/* Imagen de fondo (con overlay para legibilidad) */}
      <div className="absolute inset-0">
        <img
          src={fondoHero}
          alt="Fondo Wellhome"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-screen-xl text-center">
        {/* Título Principal (H1) - Blanco fijo sobre el overlay */}
        <h1 className="text-4xl xs:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-md">
          Bienvenido a Wellhome: <br /> Simplifica la Administración y Eleva la Calidad de Vida en tu Comunidad.
        </h1>

        {/* Subtítulo (H2) - Blanco fijo sobre el overlay */}
        <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-10 opacity-90 drop-shadow-sm">
          Digitaliza procesos, centraliza la comunicación y accede a toda la información desde cualquier lugar. Una aplicación confiable y transparente, diseñada para administradores, residentes y colaboradores.
        </h2>

        {/* Botón CTA */}
        <button
          className="px-8 py-3 md:px-10 md:py-4 bg-brand-accent text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
          onClick={onOpenPreRegModal}
        >
          Regístrate Gratis
        </button>

        <div className="mt-12 md:mt-16 bg-content-bg-light dark:bg-content-bg-dark bg-opacity-90 dark:bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-xl inline-block w-full relative">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-primary dark:text-brand-accent">Funcionalidades Clave</h3>

          {/* Versión para pantallas XS (móvil pequeño) */}
          <ul className="grid grid-cols-1 gap-4 text-left text-lg text-content-text-light dark:text-content-text-dark sm:hidden">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-center">
                <feature.icon className="w-6 h-6 mr-2 text-brand-accent flex-shrink-0" />
                {feature.title}
              </li>
            ))}
          </ul>

          {/* Versión para pantallas SM y superiores (Cards tipo Vitrina con Scroll Horizontal) */}
          {/* Este div será el contenedor visible y scrollable */}
          <div className="hidden sm:flex relative justify-center items-center">
            {/* Flecha Izquierda */}
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 z-10 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md transform -translate-x-1/2 sm:translate-x-0 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <ChevronLeftIcon className="h-8 w-8 text-brand-primary" />
            </button>

            {/* Carrusel de Cards (contenedor con overflow y snap) */}
            {/* Ancho fijo para el carrusel para forzar overflow visible */}
            <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide w-full max-w-[calc(3*288px + 2*16px)]"> {/* Ejemplo: 3 tarjetas de 288px + 2 gaps de 16px */}
              <div className="flex flex-nowrap gap-4">
                {features.map((feature) => (
                  <div 
                    key={feature.id} 
                    className="flex-shrink-0 snap-center w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-white dark:bg-gray-700 rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-content-text-light dark:text-content-text-dark border-2 border-transparent hover:border-brand-primary transition-colors duration-300"
                  >
                    {/* Icono en la parte superior */}
                    <feature.icon className="w-16 h-16 md:w-20 md:h-20 mb-4 text-brand-primary dark:text-brand-accent" />
                    {/* Descripción de la funcionalidad */}
                    <h4 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 z-10 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md transform translate-x-1/2 sm:translate-x-0 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <ChevronRightIcon className="h-8 w-8 text-brand-primary" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;