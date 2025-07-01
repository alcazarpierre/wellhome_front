// src/data/app/menuData.js

import {
  HomeIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

export const mainMenuItems = [
  {
    name: 'Inicio',
    to: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Viviendas',
    to: '/dashboard/viviendas',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Espacios',
    to: '/dashboard/areas-comunes',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Reportes',
    to: '/dashboard/reportes',
    icon: ChartBarIcon,
  },
  {
    name: 'Estadísticas',
    to: '/dashboard/estadisticas',
    icon: PresentationChartLineIcon,
  },
];