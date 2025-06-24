// src/pages/NotFoundPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundIllustration = (props) => (
  <svg viewBox="0 0 768 512" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M164 336H24V144h140v192zM124 304V176H56v128h68z" fill="#D6D6D6"/>
    <path d="M228 368h-48V112h48v256z" fill="#E6E6E6"/>
    <path d="M372 400H276V80h96v320z" fill="#F5F5F5"/>
    <path d="M436 400h-48V80h48v320z" fill="#E6E6E6"/>
    <path d="M548 368H484V112h64v256z" fill="#D6D6D6"/>
    <path d="M744 336H604V144h140v192zM704 304V176h-68v128h68z" fill="#E6E6E6"/>
    <g filter="url(#filter0_f_172_550)">
      <circle cx="384" cy="256" r="128" fill="#0000DC"/>
    </g>
    <path d="M448 344a143.341 143.341 0 01-59.24 10.12C375.4 355.52 361.32 352 344 352a96 96 0 1196-96c0 17.32-3.52 31.4-9.88 44.76A143.341 143.341 0 01448 344z" fill="#fff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M344 328a72 72 0 100-144 72 72 0 000 144zm0 24a96 96 0 100-192 96 96 0 000 192z" fill="#D6D6D6"/>
    <path d="M344 192v104" stroke="#D6D6D6" strokeWidth="24" strokeLinecap="round"/>
    <circle cx="344" cy="320" r="8" fill="#D6D6D6"/>
    <defs>
      <filter id="filter0_f_172_550" x="128" y="0" width="512" height="512" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="64" result="effect1_foregroundBlur_172_550"/>
      </filter>
    </defs>
  </svg>
);


const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-content-bg-light dark:bg-content-bg-dark text-content-text-light dark:text-content-text-dark flex flex-col items-center justify-center text-center p-4">
      
      <NotFoundIllustration className="w-full max-w-lg mx-auto" />

      <h1 className="text-5xl md:text-7xl font-extrabold text-brand-primary mt-8">
        404
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
        Página No Encontrada
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-md">
        Lo sentimos, la página que estás buscando no existe, ha sido movida o está temporalmente indisponible.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-4 bg-brand-primary text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-accent transform hover:scale-105 transition-all duration-300"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;