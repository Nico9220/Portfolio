import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Nico Dev</h1>
        <ul className="hidden md:flex space-x-6 text-blue-400">
          <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
          <li><a href="#sobremi" className="hover:text-white transition">Sobre mí</a></li>
          <li><a href="#proyectos" className="hover:text-white transition">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
