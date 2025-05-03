import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1f002bcc] backdrop-blur-md border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
    <h1 className="text-xl font-bold">Nico Dev</h1>
    <ul className="flex gap-6 text-sm text-gray-300">
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
