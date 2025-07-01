// src/layouts/app/TopNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { SunIcon, MoonIcon, PhoneIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';
import { logoutUser } from '../../features/auth/authSlice'; 
import shortLogo from '../../assets/logos/shortLogo.svg';

const UserAvatar = () => {
  const user = useSelector((state) => state.auth.user);
  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
        {getInitials(user?.nombre)}
      </div>
    </div>
  );
};

const TopNavbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const dispatch = useDispatch(); 

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-4 z-40">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="lg:hidden">
          <img src={shortLogo} alt="WellHome" className="h-10 w-auto" />
        </Link>
        {/* <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1> */}
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-600" />}
        </button>
        <button className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900">
          <PhoneIcon className="h-6 w-6 text-red-500" />
        </button>
        
        <button onClick={handleLogout} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        <UserAvatar />
      </div>
    </header>
  );
};

export default TopNavbar;