
import { Link } from 'react-router-dom';
import { MapPin, User, Heart, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-eco-green p-1.5 rounded-md">
            <MapPin className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold font-heading text-eco-green-dark">
            EcoSwap
          </span>
        </Link>

        {/* Nav items */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-eco-green font-medium transition-colors">
            Explorar
          </Link>
          <Link to="/como-funciona" className="text-gray-600 hover:text-eco-green font-medium transition-colors">
            Cómo funciona
          </Link>
          <Link to="/comunidad" className="text-gray-600 hover:text-eco-green font-medium transition-colors">
            Comunidad
          </Link>
          <Link to="/eventos" className="text-gray-600 hover:text-eco-green font-medium transition-colors">
            Eventos
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Heart size={20} />
          </Button>
          <Link to="/mensajes">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <MessageSquare size={20} />
            </Button>
          </Link>
          <Link to="/perfil">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <User size={20} />
            </Button>
          </Link>
          <Button className="hidden md:flex bg-eco-green hover:bg-eco-green-dark">
            Ofrecer Trueque
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
