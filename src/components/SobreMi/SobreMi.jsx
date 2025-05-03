const SobreMi = () => {
    return (
        <section
        id="sobremi"
        className="bg-gradient-to-tr from-[#0f051d] via-[#1e1b3a] to-[#2b0d3a] text-white py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
      
          <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-200">
              Soy estudiante de la Tecnicatura Universitaria en Desarrollo Web en la UNCo.
              Me apasiona el desarrollo frontend, especialmente con React. Busco crecer como
              desarrollador construyendo proyectos reales que aporten valor.
            </p>
            <p className="mt-6 text-gray-400">
              También estoy explorando diseño, UI/UX y herramientas como Tailwind CSS.
              Me gusta aprender nuevas tecnologías y aplicarlas en proyectos propios como este portfolio.
            </p>
          </div>
        </div>
      </section>
      
    );
  };
  
  export default SobreMi;
  