
import { useState } from "react";
import { Heart, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface MatchItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  userName: string;
  userAvatar: string;
  userRating: number;
  isEco?: boolean;
}

const SwapMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatchDialog, setShowMatchDialog] = useState(false);
  
  // Demo data - En una aplicación real, esto vendría de una API
  const items: MatchItemProps[] = [
    {
      id: "1",
      title: "Bicicleta de montaña en excelente estado",
      description: "Bicicleta usada durante 1 año, marca Trek, rodado 29. Lista para usar en senderos o ciudad.",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
      category: "Deportes",
      userName: "Carlos M.",
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      userRating: 4.7,
      isEco: true,
    },
    {
      id: "2",
      title: "Colección de libros de ciencia ficción",
      description: "15 libros de autores como Asimov, Philip K. Dick y Arthur C. Clarke. Todos en buen estado.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      category: "Libros",
      userName: "Ana S.",
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      userRating: 4.9,
    },
    {
      id: "3",
      title: "Cámara DSLR Nikon D3500",
      description: "Poco uso, excelente para empezar en fotografía. Incluye lente 18-55mm y bolso.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      category: "Tecnología",
      userName: "Martín L.",
      userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
      userRating: 4.3,
    },
    {
      id: "4",
      title: "Clases de guitarra (2 meses)",
      description: "Ofrezco 8 clases de guitarra para principiantes. Puedo trasladarme o dar online.",
      image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0",
      category: "Servicios",
      userName: "Laura G.",
      userAvatar: "https://randomuser.me/api/portraits/women/90.jpg",
      userRating: 4.8,
      isEco: true,
    },
  ];

  const handleLike = () => {
    // En una aplicación real, enviaríamos esta información a una API
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Simulamos un match exitoso al final de la lista
      setShowMatchDialog(true);
    }
  };

  const handleDislike = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-heading font-semibold mb-2">Descubre Trueques</h2>
        <p className="text-gray-500">Desliza para encontrar lo que buscas</p>
      </div>

      {/* Card Container */}
      <div className="relative h-[460px] w-full bg-white rounded-xl shadow-md overflow-hidden">
        {/* Card Image */}
        <div className="h-64 overflow-hidden">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/80 text-gray-800 hover:bg-white">
              {currentItem.category}
            </Badge>
          </div>
          {currentItem.isEco && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-eco-green text-white">Eco-friendly</Badge>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{currentItem.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{currentItem.description}</p>
          
          {/* User info */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={currentItem.userAvatar} 
              alt={currentItem.userName}
              className="w-10 h-10 rounded-full" 
            />
            <div>
              <div className="font-medium">{currentItem.userName}</div>
              <div className="flex items-center text-sm">
                <StarIcon className="w-4 h-4 text-eco-terracota mr-1" />
                <span>{currentItem.userRating}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-2">
            <Button 
              onClick={handleDislike}
              className="h-14 w-14 rounded-full bg-white border-2 border-red-500 text-red-500 hover:bg-red-50"
            >
              <X size={24} />
            </Button>
            <Button 
              onClick={handleLike}
              className="h-14 w-14 rounded-full bg-white border-2 border-eco-green text-eco-green hover:bg-eco-green/10"
            >
              <Heart size={24} />
            </Button>
          </div>
        </div>

        {/* Card Counter */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <div className="text-xs text-gray-400">
            {currentIndex + 1} de {items.length}
          </div>
        </div>
      </div>

      {/* Match Dialog */}
      <Dialog open={showMatchDialog} onOpenChange={setShowMatchDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">¡Es un match!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <div className="relative h-20 w-40 mb-6">
              <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-2 border-white overflow-hidden shadow-md">
                <img 
                  src="https://randomuser.me/api/portraits/women/42.jpg"
                  alt="Tu foto" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 h-16 w-16 rounded-full border-2 border-white overflow-hidden shadow-md">
                <img 
                  src={items[items.length - 1].userAvatar}
                  alt={items[items.length - 1].userName}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute top-6 left-0 right-0 flex justify-center">
                <Heart className="text-eco-terracota fill-eco-terracota" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">
              Tú y {items[items.length - 1].userName} quieren hacer un trueque
            </h3>
            <p className="text-gray-500 text-center mb-6">
              ¡Empiecen a chatear para ponerse de acuerdo en los detalles!
            </p>
            <Button className="bg-eco-green hover:bg-eco-green-dark">
              <MessageSquare className="mr-2 h-4 w-4" />
              Iniciar Chat
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Helper Icon Component
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SwapMatch;
