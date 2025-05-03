const Contacto = () => {
    return (
      <section id="contacto" className="bg-gray-800 text-white py-20 px-6 bg-gradient-to-r from-[#2b0d3a] via-[#1f002b] to-[#0f051d]
">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-lg text-gray-300 mb-6">
            ¿Querés hablar sobre un proyecto o simplemente saludar? Estoy abierto a nuevas oportunidades y colaboraciones.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="mailto:tuemail@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              Enviame un correo
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              className="text-blue-400 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Nico9220"
              target="_blank"
              className="text-blue-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contacto;
  