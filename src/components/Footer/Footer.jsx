const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Nicolás Caretta · Todos los derechos reservados.</p>
          <p className="mt-2">
            Hecho con ❤️ usando React y Tailwind CSS.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  