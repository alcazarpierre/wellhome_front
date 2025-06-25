// src/utils/validationSchemas.js

import { z } from 'zod';

export const contactSchema = z.object({
  nombres: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  apellidos: z.string().min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  pais: z.string().min(1, { message: "Debes seleccionar un país." }),
  ciudad: z.string().min(2, { message: "El nombre de la ciudad es requerido." }),
  celular: z.string().min(10, { message: "El número de celular parece demasiado corto." }),
  asunto: z.enum(["Quiero implementarlo", "Necesito información adicional", "Otro asunto"], {
    errorMap: () => ({ message: "Por favor, selecciona un asunto." }),
  }),
  
  mensaje: z.string()
             .min(10, { message: "Tu mensaje debe tener al menos 10 caracteres." })
             .max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),

  aceptaContacto: z.boolean().refine(data => data === true, {
    message: "Debes aceptar esta condición para poder enviar el formulario.",
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  password: z.string().min(1, { message: "La contraseña no puede estar vacía." }),
  rememberMe: z.boolean().optional(),
});

export const preRegistrationSchema = z.object({
  nombres: z.string().min(2, { message: "El nombre es requerido." }),
  apellidos: z.string().min(2, { message: "El apellido es requerido." }),
  email: z.string().email({ message: "Por favor, introduce un correo válido." }),
  pais: z.string().min(1, { message: "Debes seleccionar un país." }),
  estado: z.string().min(2, { message: "El estado/provincia es requerido." }),
  ciudad: z.string().min(2, { message: "La ciudad es requerida." }),
  distrito: z.string().min(2, { message: "El distrito es requerido." }),
  celular: z.string().min(9, { message: "El número de celular no es válido." }),
  nombreCondominio: z.string().min(3, { message: "El nombre del condominio es requerido." }),
  aceptaTerminos: z.boolean().refine(data => data === true, {
    message: "Debes aceptar los términos para registrarte.",
  }),
});