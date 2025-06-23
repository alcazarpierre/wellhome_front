// src/layouts/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import fullLogo from '../assets/logos/fullLogo.svg';
import shortLogo from '../assets/logos/shortLogo.svg';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ onOpenRegisterModal, onOpenLoginModal }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const menuItems = [
    { label: 'Inicio', href: '#inicio', isAction: false },
    { label: 'Nosotros', href: '#nosotros', isAction: false },
    { label: 'Preguntas', href: '#faq', isAction: false },
    { label: 'Registro', action: onOpenRegisterModal, isAction: true, type: 'border-button' }, 
    { label: 'Ingresar', action: onOpenLoginModal, isAction: true, type: 'filled-button' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-navbar-bg-light dark:bg-navbar-bg-dark shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center p-2 rounded"> 
          <Link to="/">
            <img
              src={isMobile ? shortLogo : fullLogo}
              alt="Logo"
              className="h-10 w-auto max-w-none"
            />
          </Link>
        </div>

        {/* Toggle Dark/Light y Botones de Menú */}
        <div className="flex items-center gap-4">
          {/* Toggle Dark/Light */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition" 
          >
            <SunIcon className="h-5 w-5 text-yellow-500 dark:hidden" />
            <MoonIcon className="h-5 w-5 text-content-text-light dark:text-content-text-dark hidden dark:inline" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center"> 
            {menuItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.isAction ? (
                  <button
                    // --- LÍNEA CORREGIDA --- Se añade optional chaining '?.'
                    onClick={() => { item.action?.(); closeMenu(); }} 
                    className={`text-base font-medium py-2 px-4 rounded-full transition-all duration-300
                      ${item.type === 'border-button'
                        ? 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white'
                        : 'bg-brand-primary text-white hover:bg-brand-accent'
                      }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-base font-medium text-content-text-light dark:text-content-text-dark py-2 px-2 relative group transition-all hover:text-brand-accent dark:hover:text-brand-accent"
                  >
                    <span className="group-hover:text-brand-accent transition">
                      {item.label}
                    </span>
                    <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-brand-primary"></span>
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6 text-content-text-light dark:text-content-text-dark" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 flex items-start justify-center pt-20">
          <div className="w-[300px] bg-content-bg-light dark:bg-content-bg-dark rounded-lg shadow-lg p-4 relative animate-fade-in flex flex-col items-center"> 
            <div className="flex justify-between items-center mb-6 w-full"> 
              <img src={shortLogo} alt="Logo" className="h-8" />
              <button onClick={closeMenu} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <XMarkIcon className="h-6 w-6 text-content-text-light dark:text-content-text-dark" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 w-full"> 
              {menuItems.map((item) => (
                <React.Fragment key={item.label}>
                  {item.isAction ? (
                    <button
                      // --- LÍNEA CORREGIDA --- Se añade optional chaining '?.'
                      onClick={() => { item.action?.(); closeMenu(); }}
                      className={`text-lg font-medium py-2 px-4 rounded-full w-full text-center transition-all duration-300
                        ${item.type === 'border-button'
                          ? 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white'
                          : 'bg-brand-primary text-white hover:bg-brand-accent'
                        }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg font-medium text-content-text-light dark:text-content-text-dark py-2 px-4 w-full text-center relative group transition-all hover:text-brand-accent dark:hover:text-brand-accent"
                    >
                      <span className="group-hover:text-brand-accent transition">
                        {item.label}
                      </span>
                      <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-brand-primary"></span>
                    </a>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;