// src/pages/landing/LandingPage.jsx
import React, { useState } from 'react';
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';
import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import FAQSection from './sections/FAQSection'; 
import ContactSection from './sections/ContactSection';
import RegisterModal from '../../components/modals/RegisterModal';
import LoginModal from '../../components/modals/LoginModal';
import PreRegistrationModal from '../../components/modals/PreRegistrationModal';
import { useTheme } from '../../contexts/ThemeContext';

const LandingPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] =  useState(false);
  const [isPreRegModalOpen, setIsPreRegModalOpen] = useState(false);
  const { darkMode } = useTheme();

  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);
  const handleCloseRegisterModal = () => setIsRegisterModalOpen(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className={`bg-content-bg-light dark:bg-content-bg-dark text-content-text-light dark:text-content-text-dark min-h-screen flex flex-col`}>
      <Navbar 
        onOpenRegisterModal={handleOpenRegisterModal}
        onOpenLoginModal={handleOpenLoginModal} 
      />
      
      <main className="flex-grow">
        <HeroSection onOpenPreRegModal = {() => setIsPreRegModalOpen(true)}/>
        <AboutUsSection />
        <FAQSection /> 
        <ContactSection />
      </main>

      <Footer />

      <PreRegistrationModal isOpen={isPreRegModalOpen} onClose={() => setIsPreRegModalOpen(false)}/>
      <RegisterModal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}/>
    </div>
  );
};

export default LandingPage;