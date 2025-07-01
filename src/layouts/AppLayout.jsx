// src/layouts/app/AppLayout.jsx

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from './app/TopNavbar';
import BottomNavbar from './app/BottomNavbar';
import SideNavbar from './app/SideNavbar';

const AppLayout = () => {
  // Un único estado para el tamaño de la pantalla
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const desktop = window.innerWidth >= 1024;
      
      setIsMobile(mobile);

      if (desktop) {
        setIsSidebarExpanded(true);
      } else if (!mobile) { // Esto es tablet
        setIsSidebarExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {!isMobile && (
        <SideNavbar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {isMobile && <TopNavbar />}
        
        <main className={`flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 ${isMobile ? 'mb-16' : ''}`}>
          <Outlet />
        </main>
      </div>

      {isMobile && <BottomNavbar />}
    </div>
  );
};

export default AppLayout;