// src/layouts/app/SideNavbar.jsx

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { mainMenuItems } from '../../data/app/menuData';
import fullLogo from '../../assets/logos/fullLogo.svg';
import shortLogo from '../../assets/logos/shortLogo.svg';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  SunIcon,
  MoonIcon,
  PhoneIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { useTheme } from '../../contexts/ThemeContext';

const UserAvatar = ({ isExpanded }) => {
  const user = useSelector((state) => state.auth.user);
  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold flex-shrink-0">
        {getInitials(user?.nombre)}
      </div>
      <div className={`transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        <p className="font-semibold text-sm truncate">{user?.nombre}</p>
        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
      </div>
    </div>
  );
};

const SideNavbar = ({ isExpanded, setIsExpanded }) => {
  const dispatch = useDispatch();
  const { darkMode, toggleDarkMode } = useTheme();
  const activeLinkStyle = "bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20";
  const inactiveLinkStyle = "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700";

  const handleLogout = () => {
    dispatch(logoutUser()); 
  };

  return (
    <aside className={`hidden md:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <Link to="/dashboard">
          <img src={isExpanded ? fullLogo : shortLogo} alt="WellHome" className={`transition-all duration-300 ${isExpanded ? 'h-10' : 'h-8'}`} />
        </Link>
      </div>
      
      {/* Menú Principal */}
      <nav className="flex-grow mt-4 px-2 space-y-1">
        {mainMenuItems.map((item) => (
          <NavLink key={item.name} to={item.to} end className={({ isActive }) => `flex items-center gap-4 p-3 rounded-lg transition-colors ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>
            <item.icon className="h-6 w-6 flex-shrink-0" />
            <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Menú de Configuración y Usuario */}
      <div className="px-2 py-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
        {/* Tema */}
        <button onClick={toggleDarkMode} className={`flex items-center w-full gap-4 p-3 rounded-lg ${inactiveLinkStyle}`}>
          {darkMode ? <SunIcon className="h-6 w-6 flex-shrink-0" /> : <MoonIcon className="h-6 w-6 flex-shrink-0" />}
          <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Tema</span>
        </button>

        {/* Emergencia */}
        <button className={`flex items-center w-full gap-4 p-3 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50`}>
          <PhoneIcon className="h-6 w-6 flex-shrink-0" />
          <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Emergencia</span>
        </button>

        {/* Logout */}
        <button onClick={handleLogout} className={`flex items-center w-full gap-4 p-3 rounded-lg ${inactiveLinkStyle}`}>
          <ArrowLeftOnRectangleIcon className="h-6 w-6 flex-shrink-0" />
          <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Cerrar Sesión</span>
        </button>
      </div>

      {/* Perfil de Usuario y Botón de colapso */}
      <div className="p-2 border-t border-gray-200 dark:border-gray-700">
        <UserAvatar isExpanded={isExpanded} />
        <button onClick={() => setIsExpanded(!isExpanded)} className={`flex items-center w-full gap-4 p-3 mt-2 rounded-lg ${inactiveLinkStyle}`}>
          {isExpanded ? <ChevronDoubleLeftIcon className="h-6 w-6 flex-shrink-0" /> : <ChevronDoubleRightIcon className="h-6 w-6 flex-shrink-0" />}
          <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Minimizar</span>
        </button>
      </div>
    </aside>
  );
};

export default SideNavbar;