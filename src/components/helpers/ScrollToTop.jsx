// src/components/helpers/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Obtenemos el objeto de ubicación completo, que incluye el 'hash' (#)
  const location = useLocation();

  useEffect(() => {
    // Verificamos si la URL actual tiene un hash
    if (location.hash) {
      // Si hay un hash, obtenemos el ID del elemento (quitando el '#')
      const id = location.hash.substring(1);
      
      // Usamos un pequeño timeout. Esto le da al navegador un instante 
      // para renderizar el contenido de la nueva página antes de que 
      // intentemos encontrar el elemento y hacer scroll.
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Si encontramos el elemento, hacemos un scroll suave hacia él.
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Un delay de 100ms suele ser suficiente.

    } else {
      // Si no hay hash, simplemente hacemos scroll a la parte superior.
      window.scrollTo(0, 0);
    }
  }, [location]); // El efecto se ejecuta cada vez que el objeto 'location' cambia.

  return null;
};

export default ScrollToTop;