// src/pages/landing/LandingPage.jsx
import React, { useState } from 'react';
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';
import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import FAQSection from './sections/FAQSection'; 
import ContactSection from './sections/ContactSection';
import RegisterModal from '../../components/modals/RegisterModal';
import { useTheme } from '../../contexts/ThemeContext';

const LandingPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const { darkMode } = useTheme();

  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);
  const handleCloseRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <div className={`bg-content-bg-light dark:bg-content-bg-dark text-content-text-light dark:text-content-text-dark min-h-screen flex flex-col`}>
      <Navbar onOpenRegisterModal={handleOpenRegisterModal} />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <FAQSection /> 
        <ContactSection />
      </main>

      <Footer />

      <RegisterModal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />
    </div>
  );
};

export default LandingPage;