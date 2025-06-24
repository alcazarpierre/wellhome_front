// src/pages/DevelopmentTeamPage.jsx

import React from 'react';
import { devs } from '../data/teamData';
import DevCard from '../components/team/DevCard';
import Navbar from '../layouts/Navbar'; // Opcional, si quieres la navbar aquí
import Footer from '../layouts/Footer'; // Opcional, si quieres el footer aquí

const DevelopmentTeamPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar /> 
      <main className="py-24 px-4">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <h1 className="xs:text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Conoce a Nuestro Equipo</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Los arquitectos y constructores detrás de WellHome.
            </p>
          </div>
          
          {/* Grilla de tarjetas de desarrolladores */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {devs.map(dev => (
              <DevCard 
                key={dev.id} 
                dev={dev} 
                isInitiallyActive={dev.id === 1} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer /> 
    </div>
  );
};

export default DevelopmentTeamPage;