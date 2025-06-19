// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // LÍNEAS MODIFICADAS: Paleta "Confianza Energética"
        'brand-primary': '#2A6EF2', // Azul Principal
        'brand-accent': '#4BE1DF',  // Cian/Turquesa Vibrante
        'brand-success': '#4CAF50', // Verde para éxito

        'content-bg-light': '#F7FAFC',  // Fondo principal (Claro)
        'content-text-light': '#2D3748', // Texto principal (Claro)

        'content-bg-dark': '#1A202C',   // Fondo principal (Oscuro)
        'content-text-dark': '#CBD5E0',  // Texto principal (Oscuro)

        // LÍNEAS AÑADIDAS: Colores específicos para la Navbar
        'navbar-bg-light': '#FFFFFF', // Blanco puro (un tono más claro que content-bg-light)
        'navbar-bg-dark': '#2D3748',  // Gris oscuro (un tono más oscuro que content-bg-dark)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Para navegadores basados en Webkit (Chrome, Safari) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Para Firefox */
          'scrollbar-width': 'none',
          /* Para IE 10+ */
          '-ms-overflow-style': 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
