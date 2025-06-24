// src/data/teamData.js

// 1. Importa las imágenes de los desarrolladores
import Pierre from '../assets/team/pierre.png';
import Luca from '../assets/team/luca.png';
import Pablo from '../assets/team/pablo.png';
import Franco from '../assets/team/franco.png';
import Alejandro from '../assets/team/alejandro.png';

// 2. Define el array de desarrolladores
// Nota: Para los colores, usamos directamente las clases de Tailwind CSS. Es un patrón muy potente.
export const devs = [
  {
    id: 1,
    nombre: "Pierre Alcázar",
    imagen: Pierre,
    color: "bg-green-400", // verde
    rol1: "Project Manager",
    rol2: "FullStack Developer",
    pais: "Peru",
    github: "https://github.com/alcazarpierre",
    linkedin: "https://www.linkedin.com/in/alcazarpierre/",
  },
  {
    id: 2,
    nombre: "Luca Bruzzone",
    imagen: Luca,
    color: "bg-purple-300", // púrpura
    rol1: "Colaborador",
    rol2: "FullStack Developer",
    pais: "Chile",
    github: "https://github.com/lucabruzzone",
    linkedin: "https://www.linkedin.com/in/bruzzone-luca/",
  },
  {
    id: 3,
    nombre: "Pablo Figueroa",
    imagen: Pablo,
    color: "bg-yellow-400", // Amarillo
    rol1: "Colaborador",
    rol2: "Front-End Developer",
    pais: "Argentina",
    github: "https://github.com/pablofigueroa16",
    linkedin: "https://www.linkedin.com/in/pablo-figueroa-0b204b22a/",
  },
  {
    id: 4,
    nombre: "Franco Famulari",
    imagen: Franco,
    color: "bg-blue-300", // Celeste
    rol1: "Colaborador",
    rol2: "Front-End Developer",
    pais: "Argentina",
    github: "https://github.com/FrancoFamulari", // Corregido para el ejemplo
    linkedin: "https://www.linkedin.com/in/franco-famulari-25b2b9127/",
  },
  {
    id: 5,
    nombre: "Alejandro Becerra",
    imagen: Alejandro,
    color: "bg-red-400", // rojo
    rol1: "Colaborador",
    rol2: "Back-End Developer",
    pais: "Colombia",
    github: "https://github.com/alej098",
    linkedin: "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/",
  },
];