const Footer = () => {
    return (
        <footer className="bg-[#0f051d] text-gray-400 text-sm py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Nicolás Caretta · Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Nico9220"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tuemail@example.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
      
    );
  };
  
  export default Footer;
  