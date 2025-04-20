
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-eco-green-dark font-heading">EcoSwap</span>
          </div>
          <p className="text-gray-600 mb-4">
            Conectando comunidades a través del trueque sustentable y local.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-eco-green text-white hover:bg-eco-green-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-eco-green text-white hover:bg-eco-green-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-eco-green text-white hover:bg-eco-green-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-heading font-medium text-lg mb-4">Explorar</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Trueques recientes</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Categorías</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Mapa de trueques</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Eventos locales</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-medium text-lg mb-4">Comunidad</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Historias de éxito</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Blog</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">ONGs aliadas</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Sustentabilidad</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-medium text-lg mb-4">Ayuda</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Centro de ayuda</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Términos de uso</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Privacidad</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-eco-green">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 EcoSwap. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-sm hover:text-eco-green">Privacidad</a>
            <a href="#" className="text-gray-500 text-sm hover:text-eco-green">Términos</a>
            <a href="#" className="text-gray-500 text-sm hover:text-eco-green">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
