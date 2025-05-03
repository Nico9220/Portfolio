const Proyectos = () => {
    const proyectos = [
      {
        titulo: "Gestor de Películas",
        descripcion: "App en React para administrar películas por género, vistas y por ver.",
        tecnologias: ["React", "Tailwind", "LocalStorage"],
        github: "https://github.com/Nico9220/tu-repo-peliculas",
        demo: "#",
      },
      {
        titulo: "Wiki Ágil",
        descripcion: "Wiki académica sobre metodologías ágiles en React.",
        tecnologias: ["React", "CSS Modules"],
        github: "https://github.com/Nico9220/tu-repo-wiki",
        demo: "#",
      },
      // Podés sumar más
    ];
  
    return (
      <section id="proyectos" className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Proyectos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                <div className="text-sm text-gray-400 mb-4">
                  {proyecto.tecnologias.join(", ")}
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Proyectos;
  