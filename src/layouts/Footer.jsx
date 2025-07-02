// src/layouts/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import shortLogo from '../assets/logos/shortLogo.svg';

const Footer = ({ onOpenLoginModal }) => {
  const currentYear = new Date().getFullYear();

const navLinks = [
  { name: 'Nosotros', href: '/#nosotros' },
  { name: 'Preguntas Frecuentes', href: '/#faq' },
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Equipo de Desarrollo', href: '/equipo-desarrollo' }, 
];

// --- ÍCONOS AÑADIDOS ---
const EmailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const WhatsappIcon = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.316 4.814 4.897-1.282zM12.062 9.153c-.316-.157-.92-.456-1.062-.507-.142-.051-.245-.08-.347.08-.102.16-.385.456-.472.537-.087.081-.173.091-.316.041-.142-.05-.596-.22-1.135-.697-.421-.375-.703-.836-.788-.977-.085-.141-.008-.217.073-.291.073-.065.161-.171.244-.258.083-.087.112-.142.173-.245.061-.102.03-.183-.02-.265-.05-.081-.316-.75-.432-.977-.112-.228-.227-.196-.316-.198-.087-.002-.189 0-.291.002-.102 0-.265.041-.407.203s-.542.53-.663.662c-.121.132-.245.289-.245.541s.245 1.09.287 1.173c.041.082.576 1.341 1.667 2.011 1.041.64 1.83.974 2.368 1.196.537.221 1.004.183 1.353.112.392-.081 1.258-.517 1.438-.977.18-.46.18-.851.128-.977s-.087-.183-.173-.245z"/></svg>
);

const socialLinks = [
    { name: 'Facebook', href: '#', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002.892-3.398 2.825-3.398 1.834 0 2.175 1.258 2.175 3.398v8.396h4.98v-10.396c0-3.652-2.225-6.604-5.485-6.604-2.502 0-4.125 1.4-4.98 2.5v-2z" /></svg> }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src={shortLogo}
                alt="Logo"
                className="h-12 mb-4 w-auto"
              />
            </Link>
            <div className="space-y-2 text-sm">
                <a href="mailto:contacto@wellhome.app" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <EmailIcon className="w-5 h-5"/>
                    <span>castrumperu@gmail.com</span>
                </a>
                <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <WhatsappIcon className="w-5 h-5"/>
                    <span>+51 924 707 719</span>
                </a>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-bold text-white uppercase tracking-wider mb-4">Navegación</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-base hover:text-white transition-colors duration-300">
                  {link.name}
                </a>
              ))}
              <button 
                onClick={onOpenLoginModal}
                className="text-base font-semibold md:text-left text-brand-accent hover:text-white transition-colors duration-300 mt-2"
              >
                Ingresar a la app
              </button>
            </nav>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-bold text-white uppercase tracking-wider mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {currentYear} WellHome. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;