import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="h-screen bg-gray-900 text-white flex items-center justify-center bg-gradient-to-br from-[#1f002b] via-[#2b0d3a] to-[#0f051d]
"
    >
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Hola! Soy Nicolás
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Estudiante de la Tecnicatura universitaria en Desarrollo Web.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#proyectos"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="border border-white hover:bg-white hover:text-gray-900 font-semibold py-2 px-6 rounded transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
