// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(() => {
    // Lógica para inicializar el modo oscuro
    // Prioridad: 1. Preferencia del usuario guardada, 2. Preferencia del sistema, 3. Modo claro por defecto

    // Intentar obtener la preferencia guardada del localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }

    // Si no hay preferencia guardada, verificar la preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true; // El sistema prefiere el modo oscuro
    }

    return false; // Por defecto, modo claro
  });

  // Efecto para aplicar/remover la clase 'dark' en el elemento <html>
  // y guardar la preferencia en localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Proveer el estado y la función para alternar a los componentes hijos
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema fácilmente
export const useTheme = () => useContext(ThemeContext);