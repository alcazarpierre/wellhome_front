// src/pages/landing/sections/FAQSection.jsx
import React, { useState } from 'react';
import faqImg from '../../../assets/img/whlp03.png'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; 

const faqs = [
  // ... (tus preguntas y respuestas)

  {
    question: `✅ ¿Cualquier persona puede registrarse en Wellhome?`,
    answer: `El registro en Wellhome está vinculado a Conjuntos de Unidades (Condominios, Edificios, etc.) previamente configurados. Las credenciales de acceso se asocian a una propiedad específica dentro de estos. Si tu comunidad ya usa Wellhome, contacta al administrador de tu condominio para solicitar tus accesos. ¡Estamos listos para recibirte!`,
  },
  {
    question: `✅ ¿Cómo puedo registrar mi condominio y empezar a usar la App?`,
    answer: `Para registrar tu condominio, necesitas tener las facultades legales como representante del mismo. Puedes iniciar el proceso fácilmente llenando el formulario en nuestra sección de "Registro", o si prefieres una guía personalizada, no dudes en ponerte en contacto con nuestro equipo. Te acompañaremos en cada paso.`,
  },
  {
    question: `✅ ¿Qué es la "Prueba en Producción" de Wellhome?`,
    answer: `La "Prueba en Producción" es nuestro compromiso con tu tranquilidad y funcionalidad. Te ofrecemos 6 meses de servicio completamente sin costo, durante los cuales te brindaremos acompañamiento total en la configuración, implementación y capacitación. Queremos que te enamores de Wellhome y veas su valor real sin presiones.`,
  },
  {
    question: `✅ ¿Necesito capacitación exhaustiva para usar la App?`,
    answer: `Wellhome está diseñada para ser intuitiva y fácil de usar, por lo que la mayoría de los usuarios no requieren capacitaciones extensivas. Sin embargo, para maximizar el potencial administrativo y la experiencia de gestión, te recomendamos revisar nuestro tutorial interactivo y permitirnos asesorarte durante el proceso de configuración inicial. ¡Estamos para optimizar tu tiempo!`,
  },
  {
    question: `✅ ¿Existe un límite en el número de usuarios que puedo registrar?`,
    answer: `No. Wellhome permite el registro de propietarios, inquilinos, personal de trabajo y cualquier otro usuario que el administrador del Condominio o Centro Comercial considere necesario, siempre dentro de los parámetros de uso configurados para tu comunidad. La App se escala contigo.`,
  },
  {
    question: `✅ ¿Wellhome ya está disponible para implementación?`,
    answer: `¡Sí, estamos a un solo paso de tu comunidad! Si deseas ser parte de nuestra etapa inicial de producción y aprovechar beneficios adicionales, te invitamos a contactarnos. Agendaremos una reunión virtual y coordinaremos la fecha ideal para la configuración de tu condominio. ¡Tu eficiencia está a la vuelta de la esquina!`,
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
    <section id="faq" className="py-16 md:py-24 bg-content-bg-light dark:bg-content-bg-dark text-content-text-light dark:text-content-text-dark"> 
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-center mb-12 text-brand-primary dark:text-content-text-dark"> 
          ¿Tienes Preguntas? Tenemos las Respuestas.
        </h2>

        {/* Contenedor de la imagen y los acordeones */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Imagen ilustrativa */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={faqImg} 
              alt="Preguntas frecuentes resueltas"
              className="rounded-xl shadow-xl w-full h-auto max-w-md md:max-w-full"
            />
          </div>

          {/* Acordeones de Preguntas Frecuentes */}
          <div className="md:w-1/2 w-full">
            {faqs.map((faq, index) => (
              // LÍNEA MODIFICADA: Fondo del item de FAQ se adapta
              <div key={index} className="mb-4 bg-content-bg-light dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <button
                  // LÍNEA MODIFICADA: Colores del texto del botón de pregunta se adaptan
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg md:text-xl focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors duration-200 text-content-text-light dark:text-content-text-dark" 
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {activeIndex === index ? (
                    <ChevronUpIcon className="h-6 w-6 text-brand-accent flex-shrink-0" /> 
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-brand-primary flex-shrink-0" /> 
                  )}
                </button>
                {activeIndex === index && (
                  // LÍNEA MODIFICADA: Colores del texto de la respuesta se adaptan
                  <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-base md:text-lg leading-relaxed text-content-text-light dark:text-content-text-dark"> 
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;