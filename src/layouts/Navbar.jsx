// src/layouts/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
// import fullLogo from '../assets/logos/fullLogo.svg';
import shortLogo from '../assets/logos/shortLogo.svg';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ onOpenRegisterModal, onOpenLoginModal }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => { }, []);
  useEffect(() => { }, [isMenuOpen, isMobile]);

  const mainNavLinks = [
    { label: 'Inicio', to: '/#inicio' },
    { label: 'Nosotros', to: '/#nosotros' },
    { label: 'Preguntas', to: '/#faq' },
  ];

  const mobileOnlyLinks = [
    { label: 'Contacto', to: '/#contacto' },
  ];

  const desktopOnlyLinks = [
    { label: 'DevTeam', to: '/equipo-desarrollo', responsiveClass: 'hidden lg:flex' },
  ];

  const actionButtons = [
    { label: 'Registro', action: onOpenRegisterModal, isAction: true, type: 'border-button' }, 
    { label: 'Ingresar', action: onOpenLoginModal, isAction: true, type: 'filled-button' },
  ];

  const mobileMenuItems = [...mainNavLinks, ...mobileOnlyLinks, ...desktopOnlyLinks.map(l => ({...l, responsiveClass: ''})), ...actionButtons];
  const desktopMenuItems = [...mainNavLinks,  ...desktopOnlyLinks, ...actionButtons];

  const renderMenuItem = (item) => {
    const itemBaseClass = item.responsiveClass || '';
    if (item.isAction) {
      return (
        <button
          onClick={() => { item.action?.(); closeMenu(); }}
          className={`text-base font-medium py-2 px-4 rounded-full transition-all duration-300 ${item.type === 'border-button' ? 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white' : 'bg-brand-primary text-white hover:bg-brand-accent'}`}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        to={item.to}
        onClick={closeMenu}
        className="text-base font-medium text-content-text-light dark:text-content-text-dark py-2 px-2 relative group transition-all hover:text-brand-accent dark:hover:text-brand-accent"
      >
        {item.label}
        <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-brand-primary"></span>
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-navbar-bg-light dark:bg-navbar-bg-dark shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-screen-xl">
            <Link to="/" className="flex items-center p-2 rounded">
                <img src={shortLogo} alt="Logo" className="h-10 w-auto max-w-none" />
                {/* <img src={isMobile ? shortLogo : fullLogo} alt="Logo" className="h-10 w-auto max-w-none" /> */}
            </Link>
            <div className="flex items-center gap-4">
                <button type="button" onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    <MoonIcon className="h-5 w-5 text-content-text-light dark:hidden" />
                    <SunIcon className="h-5 w-5 text-content-text-light dark:text-yellow-500 hidden dark:inline" />
                </button>
                <div className="hidden md:flex gap-4 items-center"> 
                    {desktopMenuItems.map((item) => <React.Fragment key={item.label}>{renderMenuItem(item)}</React.Fragment>)}
                </div>
                <button type="button" onClick={toggleMenu} className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Bars3Icon className="h-6 w-6 text-content-text-light dark:text-content-text-dark" />
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 flex items-start justify-center pt-20">
                <div className="w-[300px] bg-content-bg-light dark:bg-content-bg-dark rounded-lg shadow-lg p-4 relative animate-fade-in flex flex-col items-center"> 
                    <div className="flex justify-between items-center mb-6 w-full"> 
                       <img src={shortLogo} alt="Logo" className="h-8" />
                       <button onClick={closeMenu} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                         <XMarkIcon className="h-6 w-6 text-content-text-light dark:text-content-text-dark" />
                       </button>
                    </div>
                    <nav className="flex flex-col gap-4 w-full text-center"> 
                        {mobileMenuItems.map((item) => <React.Fragment key={item.label}>{renderMenuItem(item)}</React.Fragment>)}
                    </nav>
                </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;