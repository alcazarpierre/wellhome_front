// src/layouts/app/BottomNavbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainMenuItems } from '../../data/app/menuData';

const BottomNavbar = () => {
  const activeStyle = "text-brand-primary";
  const inactiveStyle = "text-gray-500 dark:text-gray-400";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 h-16 flex justify-around items-center md:hidden z-40">
      {mainMenuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          end // 'end' es importante para que la ruta de inicio no esté siempre activa
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <item.icon className="h-6 w-6" />
          <span className="text-xs font-medium">{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavbar;